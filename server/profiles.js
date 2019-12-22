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
  const lists = db.get('shoppingLists')
    .filter({ profileId: profileId })
    .value()
  return lists
}
function readShoppingList(profileId, listId) {
  return db.get('shoppingLists')
    .find({ profileId: profileId, id: listId })
    .value()
}
function findSharedShoppingList(listId) {
  const item = db.get('shoppingLists')
    .find({ id: listId })
    .value()
  return (item && item.shared) ? item : null

}
function updateShoppingList(profileId, listId, list) {
  db.get('shoppingLists')
    .find({ profileId: profileId, id: listId })
    .assign({ name: list.name, date: list.date, recipient: list.recipient, from: list.from, priority: list.priority, shared: list.shared, items: list.items })
    .write()
}
function updateSharedShoppingList(listId, completedItems) {
  if (listId && completedItems) {
    const sharedShoppingList = findSharedShoppingList(listId)
    if (sharedShoppingList) {
      for (let i = 0; i < sharedShoppingList.items.length(); i++) {
        sharedShoppingList.items[i].completed = completedItems.includes(sharedShoppingList.items[i].id)
      }
      updateShoppingList(sharedShoppingList.profileId, listId, sharedShoppingList)
    }
  }
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
  findSharedShoppingList: findSharedShoppingList,
  updateShoppingList: updateShoppingList,
  updateSharedShoppingList: updateSharedShoppingList,
  deleteShoppingList: deleteShoppingList
}
