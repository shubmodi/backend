const express = require('express');
const Model = require('../models/productModel')

const router = express.Router();


router.post('/add', (req, res) => { 
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// getall
// getbyid
// update
// delete 

router.get('/getall', (req, res) => { 
    res.send('Response from product getall')
});

router.get('/getbyid', (req, res) => { 
    res.send('Response from product getbyid')
});

router.get('/update', (req, res) => { 
    res.send('Response from product update')
});

router.get('/delete', (req, res) => { 
    res.send('Response from product delete')
});

module.exports = router;