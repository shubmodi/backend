const express = require('express');
const Model  = require('../models/userModel');



const router = express.Router();


router.post('/add',(req,res)=> {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        
        console.log(err);
        res.status(500).json(err);

    });
    // res.send('Response from user add')
})


//getall
//getbybid
//update
//delete

router.get('/getall',(req,res)=> {
    res.send('Request from user getall')
})
// ':' denotes url parameter
router.get('/getbyid/:id',(req,res)=> {
    console.log(req.params.id);
    
    res.send('Request from user getall')
})

router.get('/update',(req,res)=> {
    res.send('Request from user getall')
})

router.get('/delete',(req,res)=> {
    res.send('Request from user getall')
})

module.exports =router;