const fs = require("fs"); //internal Node.js module
fs.copyFileSync("file1.txt", "file2.txt");

var sh = require("superheroes");
var sv = require("supervillains")
var myHero = sh.random();
var myVillain = sv.random()
console.log(myVillain)