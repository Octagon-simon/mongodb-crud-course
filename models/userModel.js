//import mongoose
const mongoose = require('mongoose')
//write a schema
//this means that the users collection will have the fields username, email and password
const userSchema = new mongoose.Schema({
    username : {type : String, Required : true},
    email : {type : String, Required : true},
    password : {type : String, Required : true}
})
//create a model for the users collection
//the name of the model is User. Notice the capitalization
//with the User model, we can perform crud operations on the users collection
//which will be created automatically for us
const User = mongoose.model('User', userSchema)
//export model
module.exports = User