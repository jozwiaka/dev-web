__modules = __dirname + "/modules";
uri = "mongodb://127.0.0.1:27017/fruitsDB"

// const mongoose = require('mongoose'); //see db.js
const Fruit = require(__modules + "/Fruit.js");
const Person = require(__modules + "/Person.js");
const db = require(__modules + "/db.js");
const utils = require(__modules + "/utils.js")

async function printFruits() {
    const fruits = await Fruit.find({});
    fruits.forEach(fruit => console.log("id = " + fruit.id + ", name = " + fruit.name));
}

async function printPeople() {
    const people = await Person.find({}).populate('fruit'); //define fruit field as a reference to a Fruit document in databse
    people.forEach(person => console.log("name = " + person.name + ", fruit = " + (person.fruit ? person.fruit.name + " (" + person.fruit.id + ")" : 'undefined')));
}

async function print() {
    await printFruits();
    await printPeople();
}

async function updateFruitsNames(oldName, newName) {
    try {
        await Fruit.updateMany({ name: oldName }, { name: newName });
    } catch (err) {
        utils.message(err);
    }
}
async function deleteFruitsByName(name) {
    try {
        await Fruit.deleteMany({ name: name });
    } catch (err) {
        utils.message(err);
    }
}

function createFruits() {
    let fruits = [];
    fruits.push(new Fruit({
        name: "kiwi",
        rating: "3",
        review: "Great"
    }));
    fruits.push(new Fruit({
        name: "banana",
        rating: "3",
        review: "Great"
    }));
    return fruits;
}

function createPerson(fruit) {
    let person = new Person({
        name: "Jhon",
        fruit: fruit
    });

    return person;
}
// ----------------------------------------------------
// MAIN
// ----------------------------------------------------
(async function () {
    db.connect(uri);

    // Clean up
    await Person.deleteMany({});
    await Fruit.deleteMany({});

    fruits = createFruits();
    person = createPerson(fruits[0]);

    utils.message("Created:")
    await Fruit.insertMany(fruits);
    await person.save();
    await print();

    utils.message("Updated:")
    await updateFruitsNames("kiwi", "banana");
    await print();

    utils.message("Deleted:")
    await deleteFruitsByName("banana");
    await print();

    db.disconnect();
})();
