const Transaction = require('../../../models/Transaction');

//get one transaction
const getOneTransaction = (req, res) => {
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

//create transfer
const createTransaction = (req, res, next) => {
    let transaction = new Transaction();

    transaction.quantity = req.body.quantity;
    transaction.receiver_id = req.body.receiverName;
    transaction.sender_id = req.body.sender_id;
    transaction.date = new Date().toLocaleDateString()
    transaction.type_id = req.body.type_id;
    transaction.message = req.body.message;
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

//get alle transactions
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

module.exports.getOneTransaction = getOneTransaction; //1
module.exports.createTransaction = createTransaction; //+1
module.exports.getTransactions = getTransactions; //alle

