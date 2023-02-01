const express = require('express');
const userRouter = express.Router();
const users = require('../UserList')
//get user
userRouter.get('/', (req, res) => {
    const date = new Date();
    const hours = date.getHours();
    if (hours > 8 && hours < 18) {
        res.render("opened");
    } else {
        res.render("closed");
    }

});




// delete user



//update user 



//add user

userRouter.post('/login', (req, res) => {
    let email = req.body.email;
    let passwords = req.body.passwords;
    res.send({ msg: `your email is ${email} and your passwords is ${passwords} ` });
})





module.exports = userRouter;