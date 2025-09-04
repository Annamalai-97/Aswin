const express=require('express')
const { registerstudent, getuser, getuserbyid } = require('../controllers/user.controller')
const routes=express.Router()

routes.post('/addstudent',registerstudent)
routes.get("/getuser",getuser)
routes.get('/getuser/:id',getuserbyid)
module.exports=routes;