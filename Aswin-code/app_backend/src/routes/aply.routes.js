const express=require('express')
const { applying, getdata } = require('../controllers/app.controller')
const routes=express.Router()

routes.post('/adddata',applying)
routes.get("/getdata",getdata)

module.exports=routes;