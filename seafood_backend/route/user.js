const express = require("express");
const router = express.Router()
const {User} = require("../config/database")
const bcrytpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {TokenKey} = require("../config/keys")
const MessageHelper = require('../helper/MessageHelper')
const passport = require('passport')

router.post("/register", async (req, res) =>{
    let data = req.body
    data.Email = data.Email.toLowerCase()
    try {
        let query = await User.findOne({
            where : {
                Email : data.Email
            }
        })
        if(query === null){
            await bcrytpt.genSalt(10, async (err, salt) => {
                await bcrytpt.hash(data.Password, salt, async (err, hash) => {
                  if (err) throw err;
                  console.log(hash)
                  data.Password = hash;
                  const result = await User.create({...data})
                  res.status(200).send(MessageHelper.ResponseMessage(true, "Register Successs"))
                });
              });
            
        } else {
            res.status(201).send(MessageHelper.ResponseMessage(false, "This Email is used"))
        }
    } catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false, err))
    }
})

router.post('/login', async(req, res) => {
    let data = req.body
    data.Email = data.Email.toLowerCase()
    try{
        let query = await User.findOne({
            where : {
                Email : data.Email
            }
        })
        if(query === null){
            res.status(400).send(MessageHelper.ResponseMessage(false, "Email Or Password Wrong"))
        } else{
            let Match = await bcrytpt.compare(data.Password, query.Password)
            if(Match){
                const payload = {
                    id : query.id,
                    FirstName : query.FirstName,
                    LastName : query.LastName,
                    Email : query.Email,
                    Role : query.Role
                }
                const Token = await jwt.sign(payload, TokenKey, {expiresIn : 36000})
                res.status(200).send(MessageHelper.ResponseMessage(true, "Login Success", {
                    Token : "Bearer " + Token
                }))
            } else{
                res.status(400).send(MessageHelper.ResponseMessage(false, "Email Or Password Wrong"))
            }
        }
    }catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false, err))
    }
})
router.get('/profile', passport.authenticate('jwt', { session: false}), async (req, res) => {
    let User = {
        id : req.user.id,
        FirstName : req.user.FirstName,
        LastName : req.user.LastName,
        Email : req.user.Email,
        MobilePhone : req.user.MobilePhone,
        Role : req.user.Role
    }
    res.status(200).send(MessageHelper.ResponseMessage(true, "Get Profile",User))
})

module.exports = router;