const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type : String ,
        required : [true , " username required"]
    } ,

    email : {
        type : String ,
        unique : true ,
        required : [true , "email required"] 
    } ,

    password : {
        type : String ,
        required : [true , " password required"]
    }
})


module.exports = mongoose.model('user' , userSchema)