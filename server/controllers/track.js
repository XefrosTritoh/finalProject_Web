const express = require('express');
const track = require('../models/tracks')

const app = express.Router();
//instance of router

 app
      .get('/' , (req,res) => res.send(track)) //returns tracking info
      .post('/' , (req, res) => {        
            track.push(req.query);
            res.send(track[track.length - 1]);    //if they want to post something
      })

      .put('/:id' , (req,res) => {
            const msgEdit = track.find(c => c.id === parseInt(req.params.id));
            if(!msgEdit)
                  res.status(400).send("Msg not found") //throws an error

            const index = track.indexOf(msgEdit);
            track[index].msg = req.query.msg;
            track[index].date = req.query.date;

            res.send(track);  
      })

      .delete('/:id', (req,res) => {
            const msgDel = track.find(c => c.id === parseInt(req.params.id));
            if(!msgDel)
                  res.status(400).send("Msg not found") //throws an error
            const index = track.indexOf(msgDel);
            track.splice(index,1);

            res.send(track);  
      });

module.exports = app;