const express=require('express')
const app=express()
const dbconnect=require('./src/db_Connect.js')
const stroutes=require('./src/routes/user.routes.js')
const cors = require('cors');
dbconnect()


app.use(cors());
app.use(express.json()); 
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Access');
    res.header('Access-Control-Allow-Method','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Credentials','true');
    next();
});

app.use('/api',stroutes)

const port=8080;
app.listen(port,()=>{
    console.log('Your app is running in port',port)
})