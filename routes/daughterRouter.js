const express = require("express")
const daughterRouter = express.Router()
const Daughter = require("../models/daughterModel.js")

// Get All
daughterRouter.get("/", (req, res, next) => {
    Daughter.find((err, articles) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(articles)
    })
})

// Post One
daughterRouter.post("/", (req, res, next) => {
    const newDaughter = new Daughter(req.body)
    newDaughter.save((err, savedArticle) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedArticle)
    })
})

module.exports = daughterRouter