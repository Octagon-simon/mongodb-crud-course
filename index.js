//import express
const express = require('express')
//import the database function
const db = require('./utils/database.js')
//import the model
const User = require('./models/userModel')
//load express
const app = express()
//set a port number
const port = 5000;

//uncomment any function to check out the CRUD operation attached to it

/** SAVE TO THE DATABASE */

//function to create a new document to the users collection
async function create(data) {
    try {
        //save the data and log result
        await User.create(data, (err, savedData) => {
            //if an error should occur, throw the error
            if(err) throw new Error(err)
            //if data was saved to the collection, saveddata will not be null
            if(savedData !== null){
                console.log(`Data has been saved with ID ${savedData._id}`)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
//the data to save to the collection
const data1 = {
    username: "simon",
    email: "simon@gmail.com",
    password: "12345"
}
//call the function to create a new document
//create(data1)

function save(data){
    try {
        //create a new instance of the user model
        const newUser = new User(data)
        //save the data and log result
        newUser.save().then( (data) => {
            console.log(`Data has been saved with ID ${data._id}`)
        })
    } catch (err) {
        console.log(err)
    }
}
//the data to save to the collection
const data2 = {
    username: "tony",
    email: "tony@gmail.com",
    password: "12345"
}
//call the function to save data 
//save(data2)

/** READ FROM THE DATABASE */

async function readAll1(filter){
    try{
        //pass in the data to find to the find method
        const users = await User.find(filter)
        //log the result
        console.log(users)
    }catch(err){
        console.log(err)
    }
}
//our filter
const filter = {
    username : "Simon"
}
//call the function
//readAll1(filter)

//pull out all documents
async function readAll2(){
    try{
        //retrieve all users
        const users = await User.find()
        //log the result
        //console.log(users)
    }catch(err){
        console.log(err)
    }
}
//call the function
//readAll2();

//pull out one document
async function readOne1(id){
    try{
        //find document with specified ID
        const user = await User.findById(id)
        //log the result
        console.log(user)
    }catch(err){
        console.log(err)
    }
}
//call the function
//readOne1('634920aabb680896178c60b8')

async function readOne2(filter){
    try{
        //find document with specified ID
        const user = await User.findOne(filter)
        //log the result
        console.log(user)
    }catch(err){
        console.log(err)
    }
}
//call the function
//readOne2({ id : '634920aabb680896178c60b8' })

async function update(filter, newData){
    try{
        //update a document regardless of whether filter exists or not
        const user = await User.updateOne(filter, newData)
        console.log(user)
    }catch(err){
        console.log(err)
    }
}
//update the username of a document with such id

//update({ _id : "634ba0acd00e55955dc21a47"}, {username : "Mr.Simon"})

//or
//just update the first document because id !== _id so 'id' in this case is invalid

//update({ id : "634ba0acd00e55955dc21a47"}, {username : "Mr.Simon"})

//or
//just update the first document

//update(undefined, {username : "Mr.Simon"})


// id is not the same as _id
//it starts from top to delete or update

async function updateMany(filter, newData){
    try{
        //updates all documents regardless of whether the filter exists or not
        const user = await User.updateMany(filter, newData)
        console.log(user)
    }catch(err){
        console.log(err)
    }
}
//update the username of all documents with such field
//updateMany( {username : "Simon"}, {username : "Mr.Simon"})

//invalid field
//updateMany( {name : "Simon"}, {username : "Mr.Simon"} )

//undefined
//updateMany( undefined, {username : "Mr.Simon"} )

async function updateOne1(id, newData){
    try{
        //find the document with the specified ID and 
        //update its content with the new Data
        await User.findByIdAndUpdate(id, newData)
    }catch(err){
        console.log(err)
    }
}
//call the function
//updateOne1("634920aabb680896178c60b8", {password : "1A2B3C4D5E"});

async function updateOne2(filter, newFields){
    try{
        //find the document with the specified filter and 
        //update its content with the new Data
        await User.findOneAndUpdate(filter, newFields)
    }catch(err){
        console.log(err)
    }
}
//call the function
//updateOne2({ id : "634920aabb680896178c60b8" }, {password : "1A2B3C4D5EF"});

async function updateOne3(filter, newFields){
    try{
        //find the document with the specified filter and 
        //replace the fields in the document with the new one
        await User.findOneAndReplace(filter, newFields)
    }catch(err){
        console.log(err)
    }
}
//call the function
//updateOne3({ _id : "634920aabb680896178c60b8" }, {password : "1A2B3C4D5EFG"});

async function deleteOne1(id){
    try{
        //find the document with the specified ID and delete it
        console.log( await User.findByIdAndDelete(id) )
    }catch(err){
        console.log(err)
    }
}
//call the function
//deleteOne1( "634920aabb680896178c60b8" );

async function deleteOne2(filter){
    try{
        //find the document with the specified field and delete it
        console.log( await User.findOneAndDelete(filter) )
    }catch(err){
        console.log(err)
    }
}
//call the function
//deleteOne2( {name : "Simon"} );

async function deleteOne3(id){
    try{
        //find the document with the specified field and delete it
        //similar to findByIdAndDelete()
        console.log( await User.findByIdAndRemove(id) )
    }catch(err){
        console.log(err)
    }
}
//call the function
//deleteOne3("634acf40c3db64217fd3af95");

async function deleteOne4(id){
    try{
        //find the document with the specified field and delete it
        //similar to findOneAndDelete()
        console.log( await User.findOneAndRemove(id) )
    }catch(err){
        console.log(err)
    }
}
//call the function
//deleteOne4({name : "Simon"});

async function deleteOne5(filter){
    try{
        //deletes just one document whether a filter exists or not
        console.log( await User.deleteOne(filter) )
    }catch(err){
        console.log(err)
    }
}
//call the function
//deleteOne5( {username : "Simon"} );

//field name does not exist
//deleteOne5( {name : "Simon"} );

//undefined
//deleteOne5( undefined );

async function deleteMany(filter){
    try{
        //find the document with the specified field and delete it
        //similar to findOneAndDelete()
        console.log( await User.deleteMany(filter) )
    }catch(err){
        console.log(err)
    }
}
//this will delete all documents
//deleteMany({name : "tony"});

//or

//this will delete all documents
//deleteMany(undefined);

async function caseInsensitiveQuery(filter){
    try{
        //find all users with the matching filter
        const users = await User.find(filter)
        console.log(users)
    }catch(err){
        console.log(err)
    }
}
/*
//call the function
caseInsensitiveQuery({
    username : /simon/i
})
*/

//make our app listen on a port number
app.listen(port, () => {
	//log a message when app is listening
	console.log(`App is listening on port ${port}`)
	//call the database function
	db();
    //check if model is working as it should
    function checkModel(){
        //check the datatype of what our model inherits
        console.log(`The user model inherits datatype ${typeof User.prototype} from the model prototype`)
        //check collection name associated with model
        console.log(`The collection name associated with this model is ${User.prototype.collection.collectionName}`)
    }
    //call the checkModel function
    checkModel();
})
