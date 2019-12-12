const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'database/database.json'))
const db = low(adapter)

db.defaults({ shoppingLists: [] })
  .write()

// api/profile/:id/list/:listId
function createShoppingList(list) {
  db.get('shoppingLists')
  .push(list)
  .write()
}
function readShoppingLists(profileId) {
  return db.get('shoppingLists')
  .filter({ profileId: profileId })
  .value()
}
function readShoppingList(profileId, listId) {
  return db.get('shoppingLists')
  .find({ profileId: profileId, id: listId })
  .value()
}
function updateShoppingList(profileId, listId, list) {
  db.get('shoppingLists')
  .find({ profileId: profileId, id: listId })
  .assign({ name: list.name, date: list.date, recipient: list.recipient, priority: list.priority, items: list.items })
  .write()
}
function deleteShoppingList(profileId, listId) {
  db.get('shoppingLists')
  .remove({ profileId: profileId, id: listId })
  .write()
}

module.exports = {
  createShoppingList: createShoppingList,
  readShoppingList: readShoppingList,
  readShoppingLists: readShoppingLists,
  updateShoppingList: updateShoppingList,
  deleteShoppingList: deleteShoppingList
}
