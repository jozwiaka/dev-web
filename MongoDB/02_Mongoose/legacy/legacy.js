// Legacy
function updateFruits() {
    Fruit.updateMany({ name: "kiwi" }, { name: "banana" })
        .then(() => {
            return Fruit.find({}).exec();
        })
        .then((fruits) => {
            fruits.forEach(fruit => console.log("id = " + fruit.id + ", name = " + fruit.name));
            console.log("--------------------------")
        })
        .catch(err => {
            console.log(err);
        });
}

// Legacy
function deleteFruits() {
    Fruit.deleteMany({ name: "banana" })
        .then(() => {
            return Fruit.find({}).exec();
        })
        .then((fruits) => {
            fruits.forEach(fruit => console.log("id = " + fruit.id + ", name = " + fruit.name));
            console.log("--------------------------")
        })
        .catch(err => {
            console.log(err);
        });
}