const express = require('express')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 8081
const shop = require('./shop')
const profiles = require('./profiles')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/shop/section', (req, res) => {
  res.json(shop.getSections())
})
app.get('/api/shop', (req, res) => {
  res.json(shop.get())
})

app.get('/api/profile/:profileId/list/:listId', (req, res) => {
  const { profileId, listId } = req.params
  res.json(profiles.readShoppingList(profileId, listId))
})
app.put('/api/profile/:profileId/list/:listId', (req, res) => {
  const { profileId, listId } = req.params
  profiles.updateShoppingList(profileId, listId, req.body)
  res.sendStatus(204)
})
app.delete('/api/profile/:profileId/list/:listId', (req, res) => {
  const { profileId, listId } = req.params
  profiles.deleteShoppingList(profileId, listId)
  res.sendStatus(204)
})
app.get('/api/profile/:profileId/list', (req, res) => {
  const { profileId } = req.params
  res.json(profiles.readShoppingLists(profileId))
})
app.post('/api/profile/:profileId/list', (req, res) => {
  profiles.createShoppingList(req.body)
  res.sendStatus(201)
})

app.get('/api/profile/:id', (req, res) => {
  res.json({ id: req.params.id })
})

app.get('/api/profile/:profileId/list', (req, res) => {
  const { profileId } = req.params
  res.json(profiles.readShoppingList(profileId))
})

app.get('/api/share/:id', (req, res) => {
  const sharedShoppingList = profiles.findSharedShoppingList(req.params.id)
  if (sharedShoppingList) {
    let copy = JSON.parse(JSON.stringify(sharedShoppingList))
    delete copy.profileId
    res.json(copy)
  } else {
    res.status(404).send(new Error('No shopping list found'))
  }
})
app.get('/share/:id', (req, res) => {
  res.sendFile('views/share.html', { root: __dirname })
})

app.get('/api', (req, res) => {
  res.json({ version: 1 })
})

// app.use((req, res) => {
//   res.sendFile('public/index.html', { root: __dirname })
// })
app.use((req, res) => res.status(500).json({ error: 500 }))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/public/')))
  app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))
}

app.listen(port, function () {
  console.log('Server listening on port %s', port)
})
