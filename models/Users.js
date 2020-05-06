const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    wallet: Number
});
const Users = mongoose.model("Users", usersSchema);

module.exports = Users;