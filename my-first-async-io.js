const fs = require('fs');
let files = process.argv[2];
const file = fs.readFile(files, function(error, data) {
    if (error) {
        throw error;
    } else {
  console.log(data.toString().split('\n').length - 1);
}});
