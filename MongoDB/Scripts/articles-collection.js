db.getCollection("articles").insertMany([

{
    title: "title1",
    content: "content1"
},

{
    title: "title2",
    content: "content2"
},

{
    title: "title3",
    content: "content3"
}

]
)

db.getCollection("articles").find({})



