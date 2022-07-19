const fs = require('fs')
let files=process.argv[2]
const file = fs.readFileSync(files)
const str = file.toString()
console.log(str.split('\n').length-1 )