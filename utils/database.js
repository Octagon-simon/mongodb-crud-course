//import mongoose
const mongoose = require('mongoose')
//check if the database is connected
mongoose.connection.on('open', () => {
    //log a message
    console.log('database is connected');
})
//the function that connects to the database
async function database(){
    try{
        //connect to the database
        //replace the URL with your connection URL
        await mongoose.connect('mongodb://localhost:27017', {dbName : "courseDB"})
    }catch(err){
        console.log(err);
    }
}
//export the function
module.exports = database
