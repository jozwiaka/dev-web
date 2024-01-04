const mongoose = require("mongoose");
const Fruit = require(__dirname + "/Fruit.js")

const personSchema = new mongoose.Schema({
    name: String,
    fruit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fruit'
    }
});

const Person = mongoose.model("Person", personSchema); //Person -> persons
module.exports = Person;