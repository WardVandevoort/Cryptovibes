const Users = require('../../../models/Users');

const getUsers = (req, res) => {
    //console.log("werkt");
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