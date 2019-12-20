const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
//const request = require('request')
const url = ''
const filename = 'DeployPackage.zip'
const filepath = path.resolve(__dirname, '..', filename)
const src = path.resolve(__dirname, '..', 'server') + '/'
const prompt = require('prompt-sync')()

async function zip() {
  return new Promise((resolve, reject) => {
    console.log('Packaging application...')
    var output = fs.createWriteStream(filepath)
    var archive = archiver('zip')

    output.on('close', function () {
      console.log(archive.pointer() + ' total bytes have been written to ' + filepath)
      resolve()
    })
    archive.on('error', function (err) {
      reject(err)
    })
    archive.pipe(output)
    archive.glob('**/*', {
      cwd: src,
      ignore: ['database/database.json']
    }, {})
    archive.finalize()
  })
}

async function upload() {
  return new Promise((resolve, reject) => {
    console.log(`Uploading application to ${url}`)
    var pwc = prompt.hide('Enter user password: ')
    request({
      url: url,
      headers: {
        'cache-control': 'no-cache',
        'content-disposition': 'attachment; filename=' + filename,
        'content-type': 'application/zip',
      },
      auth: {
        user: 'adhyasdnauela',
        password: pwc
      },
      encoding: null,
      method: 'POST',
      body: fs.createReadStream(filepath)
    }, (error, response, body) => {
      if (error) {
        console.error(error)
        reject(error)
      } else {
        console.log('Uploaded successfully')
        resolve()
      }
    })
  })
}

async function run() {
  await zip()
  console.log('Packaged successfully')
}

// console.log('Deployed successfully')
//   upload()
//     .then(() =>
//       console.log('Deployed successfully')
//     ).catch((err) => console.error(err))
// ).catch((err) => console.error(err))

try {
  run()
} catch (err) {
  console.error(err)
}
