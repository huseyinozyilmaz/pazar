const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'database/shop.json'))
const migration = require(path.join(__dirname, 'migration/shop.json'))
const db = low(adapter)

db.defaults(migration)
  .write()

function get() {
  return db.value()
}

function getSections() {
  return db.get('sections').value()
}

module.exports = {
  get: get,
  getSections: getSections
}