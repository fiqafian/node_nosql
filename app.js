var mongoose = require("mongoose")

//link to what file to help for export
var user = require('./model.js')

//connect
mongoose.connect('mongodb://127.0.0.1:27017/', function(error) {
    if (error) throw error
    console.log("succes")

    //creating user objects 
    //data 1
    var userobject = new user({
            name: {
                firstname: 'kumar',
                lastname: 'subramaniam'
            },
            age: 30,
            gender: 'male'
        })
        //data 2
    var userobject = new user({
        name: {
            firstname: 'lisa',
            lastname: 'awas'
        },
        age: 90,
        gender: 'female'
    })


    //save user
    userobject.save(function(error) {
        if (error) throw error
    })

    //find all user in user table -- pakai user instead of userobject
    // 1.find everything  by empty '{}' + 2.exception handling w two params, a-error , b-dbusers
    user.find({}, function(error, dbusers) {
        if (error) throw error
        console.log(JSON.stringify(dbusers))
    })



})