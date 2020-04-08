const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    quantity: mongoose.Types.Decimal128,
    receiver_id: String,
    sender_id: String,
    date: String,
    type_id: String
});
const Transaction = mongoose.model("Transaction", transactionSchema);

let d = new Date();
let Month = d.getMonth() + 1;

const getTransactions = (req, res) => {
    Transaction.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "transactions": docs
                }
            });
        }
    });
}

const transaction = (req, res) => {
    let transaction = new Transaction();
    transaction.quantity = 50,25;
    transaction.receiver_id = "r0123456";
    transaction.sender_id = "r0746456";
    transaction.date = d.getDate() + "/" + Month + "/" + d.getFullYear() + "   " 
                       + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    transaction.type_id = "1";
    transaction.save((err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "transaction": doc
                }
            });
        }
    });
}

module.exports.getTransactions = getTransactions;
module.exports.transaction = transaction;