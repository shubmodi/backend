const { model,Schema }= require('../connection');

const myschema = new Schema({
    name : String,
    email :{ type : String, unique :true},
    password : { type : String , require : true},
    city: { type : String ,default: 'unknown'},
    createdAt : { type : Date , default : Date.now}
})


 module.exports = model('users',myschema);  //user is collection name