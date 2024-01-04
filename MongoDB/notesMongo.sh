#CRUD = Create, Read, Update, Delete
#install mongodb-windows-x86_64-6.0.5-signed.msi
#add bin to PATH
#download mongosh-1.8.2-win32-x64
#add bin to PATH
mongod
# pkill -f mongod
#open new terminal
mongosh
show dbs
use shopDB
use shopDB -> db.dropDatabase() -> show dbs
use fruitsDB -> db.people.deleteMany({})
db.products.insertOne({_id: 1, name: "Pen", price: 1.20})
db.products.insertOne({_id: 2, name: "Pencil", price: 0.60})
show collections
db.products.find()
db.products.find({name: "Pencil"})
db.products.find({price: {$gt: 1}})
db.products.find({_id: 1}, {name: 1})
db.products.find({_id: 1}, {name: 1, _id: 0})
db.products.updateOne({_id: 1}, {$set: {stock: 32}})
db.products.updateOne({_id: 2}, {$set: {stock: 12}})

db.products.insertOne(
    {
        _id: 3,
        name: "Rubber",
        price: 1.30,
        stock: 43,
        reviews: [
            {
                authorName: "JozwiakA",
                rating: 5,
                review: "Best rubber ever!"
            },
            {
                authorName: "Sally",
                rating: 4,
                review: "Awesome rubber!"
            }
        ] 
    }
)