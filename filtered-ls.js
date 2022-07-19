const fs = require('fs')
const path = require('path')
const arg = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(arg, function (err, files) {
if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
  })
})