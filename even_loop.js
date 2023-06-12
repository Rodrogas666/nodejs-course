const http  = require('http')

const server = http.createServer((req, res)=>{
if (req.url == '/') {
    res.write('welcome')
    return res.end()
}

if (req.url == '/about') {
    //blocking code
    for (let i = 0; i < 100000; i++) {
        console.log(Math.random()*i)
    }

    res.end('about page')
}

res.end('nothing')
})

server.listen(3000)

console.log('funcionando en puerto 3000')