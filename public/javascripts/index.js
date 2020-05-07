const jwt = require('jsonwebtoken');
const config = require('config');
let token = jwt.compact();
let signingKey = config.jwt.secret;

jwt.verify(token,signingKey,function(err,verifiedJwt){
     if(err){
       console.log(err); // Token has expired, has been tampered with, etc
     }else{
       console.log(verifiedJwt); // Will contain the header and body
     }
});