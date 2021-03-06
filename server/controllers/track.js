const express = require('express');
const { Track } = require('../models/tracks')
const app = express.Router();
//instance of router

 app
      .get('/' , (req,res) => { res.send(Track.getTracks()) }) //returns tracking posts

      .post('/dy' ,(req,res) => {
            const input = Track.getTrackDy(req.body.input);
            if(input == -1)
                  res.status(500).send({ sucess: false, message: "cannot retrieve info" })
            else  
                  res.send({ sucess: true , input: input})
      })
      .post('/add', (req, res) => {
            const input = { name: req.body.name , msg: req.body.msg}
            const flag = Track.addToTracker(input);
            if(flag == -1){
                  res.status(500).send({ sucess: false, message: "cannot post at this time" })
            } else {
                  res.send({ sucess: true , message: "Posted your message"})
      }
      })

module.exports = app;