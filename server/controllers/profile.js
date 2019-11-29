const express = require('express');
const profile = require('../models/profiles')
const friend = require('../models/friends')
const app = express.Router();
app.use(express.json());

//instance of router

 app
      .get('/' , (req, res) => res.send(profile)) //list of users

      .post('/' , (req, res) => { 
            profile.push(req.query);
            friend.push({id: parseInt(req.query.id) , friendId: []}); //adds to friends list with empty array
            res.send(profile);    
      })

      .put('/:id' , (req,res) => {
            const personEdit = profile.find(c => c.id === parseInt(req.params.id));
            if(!personEdit)
                  res.status(400).send("Person not found") //throws an error

            const index = profile.indexOf(personEdit);
            profile[index].name = req.query.name;
            profile[index].location = req.query.location;
            res.send(profile);  
      })

      .delete('/:id', (req,res) => {
            const personDel = profile.find(c => c.id === parseInt(req.params.id));
            if(!personDel)
                  res.status(400).send("Person not found") //throws an error
            const index = profile.indexOf(personDel);
            profile.splice(index,1);

            res.send(profile);  
      });
      
module.exports = app;