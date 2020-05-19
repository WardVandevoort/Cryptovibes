const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
     username: String,
     firstname: String,
     lastname: String,
     email: String,
     password: String,
     wallet: Number
});
User.plugin(passportLocalMongoose);

const Users = mongoose.model("users", User);
module.exports = Users;

module.exports = mongoose.model('users', User);