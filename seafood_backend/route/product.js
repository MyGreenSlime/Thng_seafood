const express = require('express')
const router = express.Router()
const {Product} = require("../config/database") 
const MessageHelper = require('../helper/MessageHelper')
const passport = require('passport')

router.get("/all" , async(req, res) => {
    try {
        let query = await Product.findAll()
        res.status(200).send(MessageHelper.ResponseMessage(true, "Get All Products", query))
    }catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false,err))
    }
})

router.get("/:id", async(req, res) => {
    let data  =  req.params.id
    try {
        let query = await Product.findOne({
            where : {
                id : parseInt(data)
            }
        })
        res.status(200).send(MessageHelper.ResponseMessage(true, "Get Products by ID", query))

    } catch(err){
        res.status(500).send(MessageHelper.ErrorMessage(false, err))
    }
})

router.post("/create", async(req, res) =>{
    let data  =  req.body
    try {
        await Product.create({
            ...data
        })
        res.status(200).send(MessageHelper.ResponseMessage(true, "Create New Product"))
    } catch(err){
        res.status(500).send(MessageHelper.ResponseMessage(false, err))
    }
})

module.exports = router