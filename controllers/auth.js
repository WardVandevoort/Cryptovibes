const User = require('../models/User');
//const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const config = require('config');


const signup = async (req, res, next) =>{
    //console.log(req.body);

    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let wallet = 100;

    const user = new User({
        username: username, 
        firstname: firstname, 
        lastname: lastname,
        email: email,
        password: password,
        wallet: wallet
    });

    await user.setPassword(password);
    await user.save((err, doc) => {
        if(!err){

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
            });
        }
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