//MODEL IS IMPORTING FOR CONNECTING AND PASSING DATA TO MONGODB

const { default: mongoose } = require("mongoose")
var mangoose = require("mongoose")
var schema = mangoose.Schema

//1. make schema
var userschema = schema({
    name: {
        firstname: { type: String, reqiured: true }, //at least must have one data
        lastname: String
    },
    age: Number,
    gender: String
})

//2. make model 
var User = mongoose.model('user1', userschema) //user1 - name of table

//link to app js
module.exports = User