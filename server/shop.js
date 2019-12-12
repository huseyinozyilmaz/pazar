const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, '../public/json/shop.json'))
const db = low(adapter)

function getSections() {
  return db.get('sections').value()
}

module.exports = {
  getSections: getSections
}