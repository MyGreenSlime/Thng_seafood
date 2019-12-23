const express = require('express')
const router = express.Router()
const {Product, User, Cart} = require("../config/database") 
const MessageHelper = require('../helper/MessageHelper')
const passport = require('passport')

router.get("/all" ,passport.authenticate('jwt',{session : false}), async(req, res) => {
    try {
        let query = await Cart.findAll()
        res.status(200).send(MessageHelper.ResponseMessage(true, "Get All Carts", query))
    }catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false,err))
    }
})

router.get("/:id",passport.authenticate('jwt',{session : false}), async(req, res) => {
    let data  =  req.params.id
    try {
        let query = await Cart.findOne({
            where : {
                id : parseInt(data)
            }
        })
        res.status(200).send(MessageHelper.ResponseMessage(true, "Get Cart by ID", query))

    } catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false, err))
    }
})
router.get("/current",passport.authenticate('jwt',{session : false}), async (req, res) => {
    try {
        let query = await Cart.findOne({
            where : {
                UserId : req.user.id,
                Opened : true
            }
        })
        if(query){
            res.status(200).send(MessageHelper.ResponseMessage(
                true, "Get Current Cart {Exist}", query))
        } else {
            let result = await Cart.create({
                UserId : req.user.id
            })
            res.status(200).send(MessageHelper.ResponseMessage(true, "Get Current Cart {Create}", result))   
        }
        

    } catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false, err))
    }
})

// router.post("/create", async(req, res) =>{
//     let data  =  req.body
//     try {
//         await Product.create({
//             ...data
//         })
//         res.status(200).send(MessageHelper.ResponseMessage(true, "Create New Product"))
//     } catch(err){
//         res.status(500).send(MessageHelper.ResponseMessage(false, err))
//     }
// })



module.exports = router