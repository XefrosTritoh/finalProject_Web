const express = require('express');
const { Profile } = require('../models/profiles')
const friend = require('../models/friends')
const app = express.Router();
app.use(express.json());

//instance of router

 app
      .get('/' , (req, res) => res.send(profile)) //nothing to update in profile
      
      .get('/friend', (req,res) =>{ //returns friends list
            res.send(Profile.Friend())
      })


      .post('/login', (req,res) =>{ //signs in
            const id = Profile.Login(req.body.id)

            if(id == -1){
                  res.status(500).send({ sucess: false, message: "cannot sign in" })
            } else {                  res.send({ sucess: true , id: id})
            }
      })

      .get('/tracker', (req,res) =>{ //returns persons tracks
            res.send(Profile.Tracker())
      })
      
module.exports = app;