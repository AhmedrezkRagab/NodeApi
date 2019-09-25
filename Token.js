const JWT=require('jsonwebtoken')
const express=require('express')
const app=express()
app.get('/',function(req,res){
    var token=req.header('X-auth-jwttoken');
    var result=VerifyToken(token);
    console.log(result)
//res.header('X-auth-jwttoken',generatetoken()).send('')
res.send()
})
app.get('/token',function(req,res){
    
res.header('X-auth-jwttoken',generatetoken()).send('')
res.send()
})
app.listen(300)
function generatetoken()
{
    var res =JWT.sign('test','myscret')
    return res;
}
function VerifyToken(token)
{
    return JWT.verify(token,'myscret')
}

