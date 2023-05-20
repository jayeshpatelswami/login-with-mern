const express =require('express');
const Router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')


const { body , validationResult} = require('express-validator')

const jwt_secrate =" 23w4er!@#$%^YHbjgtfre4dhgdyfvhfsgygfasesrjk";

let success = true;

//Route : 1 for create a new user (signup)

Router.post('/createuser',
async(req,res)=>{
    success = false
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({success ,errors : errors.array()})

    }

    try {
        let user = await User.findOne({email : req.body.email});
        if (user) {
            return res.status(400).json({sussec,error:" a user is exist in our database"})
        }
        const salt =await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password,salt)
        user = await User.create({
            username : req.body.username,
            email: req.body.email,
            password: secpass
        })

        const data={
            user:{
                id:user.id
            }
        }

        const authtoken = jwt.sign(data,jwt_secrate)
        success =true
        res.json({success,authtoken})
    } catch (error) {
        success=false
        console.error(success,error.message);
        res.status(500).send("Some Error is Ouuer")
    }

})
//till hear Route 1 

//Route :2 for login a User that exist in our database
Router.post('/login',async(req,res)=>{
    success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success,errors:errors.array()})
    }

    const {email , password} = req.body;
    try {
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({success,errors:"Enter right password or try again"});
        }
        const passcompare = await bcrypt.compare(password,user.password);
        if (!passcompare) {
            return res.status(400).json({success,errors:"Enter right password or try again"});
        }

        const data = {
            user:{
                id:user.id
            }
        }
        success = true
        const authtoken = jwt.sign(data,jwt_secrate)
        res.json({success,authtoken})
    } catch (error) {
        success=false
        console.error(success,error.message);
        res.status(500).send("Some Error is ouured")
    } 
}) 
//till hear Route 2 

//Route : 3 get the data of loged user 
Router.post('/getdata', fetchuser ,async(req,res)=>{
    try {
        let userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.send(user)
    } catch {
        res.status(500).send("SOme erroe is ouuced")
    }
})
//till hear Route 3 

module.exports=Router