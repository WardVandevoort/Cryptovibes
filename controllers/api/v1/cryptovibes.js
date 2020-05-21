const Transaction = require('../../../models/Transaction');

//get one transaction
const getOneTransaction = (req, res) => {
    Transaction.find({_id: req.params.id}, (err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Transaction not found"
            })
        }
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

    transaction.quantity = req.user.quantity;
    transaction.receiver_id = req.user.receiver_id;
    transaction.sender_id = req.user.sender_id;
    transaction.date = new Date().toLocaleDateString()
    transaction.type_id = req.user.type_id;
    transaction.message = req.user.message;
    transaction.save((err, doc) => {
        if(err){
            //console.log("test");
            res.json({
                "status": "error",
                "message": err
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

