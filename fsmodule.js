const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data)=>{
    console.log(err, data)
})

// const a = fs.readFileSync('example.txt')
// console.log(a)

// console.log("Finish reading File")


