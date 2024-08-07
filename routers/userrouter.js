const express = require('express');

const router = express.Router();
router.get("/add",(req,res)=>{
    res.end('response from user add')
});
router.get("/getall",(req,res)=>{
    res.end('response from user getall')
});
router.get("/getbyid",(req,res)=>{
    res.end('response from user getbyid')
});
router.get("/update",(req,res)=>{
    res.end('response from user update')
});
router.get("/delete",(req,res)=>{
    res.end('response from user delete')
});

module.exports=router;