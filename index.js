
const connection=require('./config')


async function Getdata()
{
    var res=await connection.ConnectToSQl()
    var MyRequest=new connection.sql.Request();
    MyRequest.query('DataSave 2,"mohamed","cairo" ').then(res=>{
        console.log(res.recordset);

    })
}
Getdata();
