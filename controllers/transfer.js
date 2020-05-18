const Transaction = require('../../../models/Transaction');

let d = new Date();
let Month = d.getMonth() + 1;

//get alle transactions
const getTransactions = (req, res) => {
    Transaction.find({$or:[{"receiver_id": "r0746456"}, {"sender_id": "r0746456"}]}, (err, docs) => {
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

//get alle transactions per user
const getTransaction = (req, res) => {
    Transaction.find({_id: req.params.id}, (err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "transactions": doc
                }
            });
        }
    });
}

//doe nieuwe transfer
const transaction = (req, res, next) => {
    let transaction = new Transaction();
    transaction.quantity = req.body.quantity;
    transaction.receiver_id = "r0123456";
    transaction.sender_id = "r007";
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
module.exports.getTransaction = getTransaction;
module.exports.transaction = transaction;