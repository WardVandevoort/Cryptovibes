const Transaction = require("../../../models/Transaction");

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

const transaction = (req, res, next) => {
    let transaction = new Transaction();
    transaction.quantity = req.body.quantity;
    transaction.receiver_id = "r0123456";
    transaction.sender_id = "r0746456";
    transaction.date = d.getDate() + "/" + Month + "/" + d.getFullYear() + "   " 
                       + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    transaction.type_id = req.body.type_id;
    transaction.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Failed to save transaction"
            });
        }

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