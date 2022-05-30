const fs = require('fs')

console.log('test')

fs.readFile('convert.json', (err, data) => {
    if(err) return console.error(err)
    console.log(data.toString());

    let text = data.toString().slice(2).split('\nv ').join(' ').split(' ').join(',')
    console.log(text)

    fs.writeFile('convert.txt', text, (err) => {
        if(err) throw err;
        console.log('written')
    })
})