const Users = require('../../../models/Users');
const Transaction = require('../../../models/Transaction');

let d = new Date();
let Month = d.getMonth() + 1;

//get one transaction
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

//create transfer
const createTransaction = (req, res, next) => {
    let transaction = new Transaction();

    transaction.quantity = req.body.quantity;
    transaction.receiver_id = req.body.username;
    transaction.sender_id = req.user.sender_id;
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

module.exports.getTransaction = getTransaction; //1
module.exports.createTransaction = createTransaction; //+1
module.exports.getTransactions = getTransactions; //alle
module.exports.getUsers = getUsers;

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


//module.exports.users = users;