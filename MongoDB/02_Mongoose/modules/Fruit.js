mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})
const Fruit = mongoose.model("Fruit", fruitSchema); //Fruit -> fruits
module.exports = Fruit;