//Using mongoose to create a document object modal
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining a Schema for the mongoDB database
var TodoSchema = Schema({
    todo : {
        type : String
    },
    completed : {
        type : Boolean,
        default : false
    },
    created_by : {
        type : Date,
        default : Date.now
    }
});

//Exporting the modal 
var TodoModal = mongoose.model('Todo',TodoSchema);
module.exports = TodoModal;

