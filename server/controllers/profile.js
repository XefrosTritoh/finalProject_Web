const express = require('express');
const { Profile } = require('../models/profiles')
const app = express.Router();
app.use(express.json());

//instance of router

 app
      .post('/getprofile' , (req, res) => res.send(Profile.getProfile(req.body.id))) //nothing to update in profile

      .post('/sign', (req,res) =>{ //signs in
            const id = Profile.SignUp(req.body.name)
            res.send({ sucess: true , id: id})
      })

      .post('/login', (req,res) =>{ //signs in
            const id = Profile.Login(req.body.id)

            if(id == -1){
                  res.status(500).send({ sucess: false, message: "cannot sign in" })
            } else {                  res.send({ sucess: true , id: id})
            }
      })
      
module.exports = app;