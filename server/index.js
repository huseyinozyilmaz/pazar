const express = require('express')
const cors = require('cors')
const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const port = process.env.PORT || 8081
const adapter = new FileSync(path.join(__dirname, '../public/json/shop.json'))
const db = low(adapter)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/store', (req, res) => {
  res.json(db.get('sections').value())
})

app.get('/api', (req, res) => {
  res.json({ version: 1 })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/public/')))
  app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))
}

app.listen(port, function () {
  console.log('Server listening on port %s', port)
})
