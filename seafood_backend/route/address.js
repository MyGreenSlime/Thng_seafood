const express = require("express");
const router = express.Router()
const MessageHelper = require('../helper/MessageHelper')
const passport = require('passport')
const {User, Address} = require("../config/database")
router.get("/all", passport.authenticate('jwt',{session : false}), async(req, res) =>{
    try {
        let query = await Address.findAll({})
        res.status(200).send(MessageHelper.ResponseMessage(true, "Get All Address", query))
    } catch(err) {
        res.status(500).send(MessageHelper.ErrorMessage(false,err))
    }
})
router.get("/user/:id",  passport.authenticate('jwt',{session : false}), async(req, res) => {
    let data = req.params.id
    try {
        let query = await Address.findAll({
            where : {
                UserId : parseInt(data)
            }
        })
        res.status(200).send(MessageHelper.ResponseMessage(true, "All Address By UserId", query))
    } catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false, err))
    }
})
router.post("/create", passport.authenticate('jwt',{session : false}), async(req, res) =>{
    let data = req.body
    try {
        await Address.create({
            ...data,
            UserId : req.user.id
        })
        res.status(200).send(MessageHelper.ResponseMessage(true, "Create New Address"))
    } 
    catch(err) {
        res.status(500).send(MessageHelper.ErrorMessage(false, err))
    }
})

module.exports = router