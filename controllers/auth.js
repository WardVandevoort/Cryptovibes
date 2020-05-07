const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');


const signup = async (req, res, next) =>{
    //console.log(req.body);

    //uit postman momenteel
    
    const user = new User();
    user.username = req.body.username;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.wallet = req.body.wallet;
    await user.setPassword(password);
    await user.save(err, doc).then(result => {
        //console.log(result._id);

        //token toekennen
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, config.get('jwt.secret')); //hardcoded-> nog te vervangen 

        res.json({
            "status": "success",
            "data": {
                 "userdata": doc,
                 "token": token
            }
        })
    }).catch(error =>{
        res.json({
            "status": "error"
        })
    });
};

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        if(!result.user){
            return res.json({
                "status" : "failed",
                "message": "Login failed"
            })
        }
        let token = jwt.sign({
            uid:result.user._id,
            username:result.user.username
        }, config.get('jwt.secret'));
         
        return res.json({
            "status":"succes",
            "data":{
                "token": token 
            }
        });
    }).catch(error => {
        res.json({
            "status":"error",
            "message": error
        })
    });
}

module.exports.signup = signup;
module.exports.login = login;