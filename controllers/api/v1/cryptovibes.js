const Transaction = require('../../../models/Transaction');
const User = require('../../../models/Users');

let d = new Date();
let Month = d.getMonth() + 1;


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

const user = (req, res, next) => {
    let user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = req.body.password;
    user.wallet = req.body.wallet;
    user.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Failed to save user"
            });
        }

        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "user": doc
                }
            });
        }
    });
}

const getUsers = (req, res) => {
    User.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "users": docs
                }
            });
        }
    });
}

module.exports.getTransactions = getTransactions;
module.exports.getTransaction = getTransaction;
module.exports.transaction = transaction;
module.exports.getUsers = getUsers;
module.exports.user = user;