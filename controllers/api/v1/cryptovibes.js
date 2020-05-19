const Users = require('../../../models/Users');
const Transaction = require('../../../models/Transaction');

//dlet d = new Date();
//let Month = d.getMonth() + 1;

//get one transaction
const getOneTransaction = (req, res) => {
    Transaction.findOne({_id: req.params.id}, (err, doc) => {
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

module.exports.getOneTransaction = getOneTransaction; //1
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