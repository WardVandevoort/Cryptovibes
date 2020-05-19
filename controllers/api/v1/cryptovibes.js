const Users = require('../../../models/Users');

const getAllUsers = (req, res) => {
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

module.exports.getAllUsers = getAllUsers;

