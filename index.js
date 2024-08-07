//importing express
const express =require('express');
const UserRouter =require("./routers/userrouter");

//intializing express
const app = express();
const port = 5000;


// middleware
app.use('/user',UserRouter);


// route or endpoint
app.get('/', (req,res)=>{
   res.send('response from express')

})

app.get("/add",(req,res)=>{
    res.send('response from add')
})

// get all
// get update

app.get("/update",(req,res)=>{
    res.send('response from update')
})
app.get("/getall",(req,res)=>{
    res.send('response from getall')
})

app.listen(  port, ()=>{console.log('server started')});
