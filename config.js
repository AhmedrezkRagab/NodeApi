const sql = require('mssql')
const config = {
    user: 'sa',
    password: '123456',
    server: 'LAB9INS\\MSSQLSERVER1', // You can use 'localhost\\instance' to connect to named instance
    database: 'Mydb',
 
   
}
 function ConnectToSQl()
{
    return sql.connect(config)
   // Getdata()     
}
module.exports.ConnectToSQl=ConnectToSQl;
module.exports.sql=sql