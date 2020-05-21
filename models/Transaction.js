const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    quantity: Number,
    receiver_id: String,
    sender_id: String,
    date: String,
    message: String,
    type_id: String
});
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;