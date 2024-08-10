const mongoose = require('mongoose');
const url ="mongodb+srv://shubhammodi:9026@mern.acjco.mongodb.net/mydatabase1?retryWrites=true&w=majority&appName=MERN"

// connect to the database

// asynchronous -return a promise
mongoose.connect(url)
.then((result) => {
    console.log("Connected to the database");
})
.catch((err) => {
 console.log(err);
 
})
