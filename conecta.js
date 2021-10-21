// npm install mysql2
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected') return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3000/teste");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

// async function select(){
//     const con = await connect()
//     const [rows] = await con.query('SELECT * FROM clientes;')
//     return rows
// }

// module.exports = {select}