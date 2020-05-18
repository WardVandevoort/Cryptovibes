const Transaction = require('../../../models/Transaction');
const Users = require('../../../models/Users');

let d = new Date();
let Month = d.getMonth() + 1;

//get alle transactions
const getTransactions = (req, res) => {
    Transaction.find({$or:[{"receiver_id": " "}, {"sender_id": " "}]}, (err, docs) => {
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
    transaction.receiver_id = req.user.email;
    //transaction.sender_id = req.user.username;
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

/*const users = (req, res, next) => {
    let users = new Users();
    users.firstname = req.body.firstname;
    users.lastname = req.body.lastname;
    users.email = req.body.email;
    users.password = req.body.password;
    users.wallet = req.body.wallet;
    users.save((err, doc) => {
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
}*/

const getUsers = (req, res) => {
    console.log("werkt");
    Users.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "users": docs
                }
            });
        }
        else{
            res.json({
                "status": "error",
                "message": err
            });
        }
    });
}

module.exports.getTransactions = getTransactions;
module.exports.getTransaction = getTransaction;
module.exports.transaction = transaction;
module.exports.getUsers = getUsers;
//module.exports.users = users;