const http = require('http')



const server = http.createServer(function(req, res){

if (req.url == '/') {
    res.write('welcome')
    return res.end()
}

if (req.url == '/about') {
    res.write('acerca de')
    return res.end()
}

res.write(`
<h1>No hay nada</h1>
<p>No hay nada viejito</p>
<a href='/'>Volver a la principal</a>
`)
res.end()
})
 
server.listen(3000)

console.log('servidor funcionando')