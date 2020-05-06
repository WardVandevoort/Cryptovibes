const passport = require('passport');
const User = require('../models/User');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

//inlezen en uitlezen users (niet van toepassing)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());