const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    quantity: Number,
    receiver_id: String,
    sender_id: String,
    date: String,
    type_id: {
        type: String,
        required: true
    }
});
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;