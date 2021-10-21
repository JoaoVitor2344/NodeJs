// const http = require('http')
// fs = require('fs')

// fs.readFile('./index.html', function(err, html) {
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {'Content-Type': 'text/html'})
//         response.write(html)
//         response.end()
//     }).listen(3000)
// })

const db = require('./conecta')

// (async () => {
//     const db = require('./conecta')
//     console.log('Começou!')

//     console.log('SELECT * FROM CLIENTES')
//     const clientes = await db.select()
//     console.log(clientes)
// })()