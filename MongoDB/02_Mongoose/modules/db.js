const { default: mongoose } = require("mongoose");
const utils = require(__dirname + "/utils.js");

module.exports.connect = function (uri) {
    mongoose.connect(uri);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        utils.message("Connected to database");
    });
}

module.exports.disconnect = function () {
    mongoose.connection.close();
    utils.message("Connection closed");
}