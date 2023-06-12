const { readFile } = require('fs/promises')


async function read() {
    try {

        const result = await readFile('./data/first.txt', 'utf-8')
        console.log(result)
        const result2 = await readFile('./data/second.txt', 'utf-8')
        console.log(result2)

        // throw new Error('Error inesperdo')

        const result3 = await readFile('./data/third.txt', 'utf-8')
        console.log(result3)

        const result4 = await readFile('./data/fourth.txt', 'utf-8')
        console.log(result4)
    
    } catch (err) {
        console.log(err)
    }
}

read()


// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {

//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         })

//     })


// }

// getText('./data/fourth.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))