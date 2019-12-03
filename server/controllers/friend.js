const express = require('express');
const { Friend } = require('../models/friends')

const app = express.Router();


 app
      .post('/' , (req, res) => res.send(Friend.getFriends(req.body.id))) //returns list of friends

      .post('/find' , (req, res) => {  //finds a person with given ID

            const flag = Friend.Find(req.body.idf)

            if(flag == -1)
                  res.status(409).send({ sucess: false, name: "Person doesnt exist"})
            else  
                  res.send({ sucess: true , name: `User: ${flag}` })
      })


      .post('/add', (req,res) => { //add user if they exist

            const flag = Friend.Add(req.body.id,req.body.idf)

            if(flag == -1)
            res.status(409).send({ sucess: false, msg: "Out of Range or Is User ID"})
            else if(flag == -2)
            {
            res.status(409).send({ sucess: false, msg: "You two are friends Already"})
            }

            else  
                  res.send({ sucess: true , msg: "You two are now friends"})



      })
      .post('/delete', (req,res) => { //removes user if they exist or are friends
            const flag = Friend.Delete(req.body.id,req.body.idf)

            if(flag == -1)
            res.status(409).send({ sucess: false, msg: "Out of Range or Is User ID"})
            else if(flag == -2)
            {
            res.status(409).send({ sucess: false, msg: "Cannot Delete, Server error"})
            }

            else  
                  res.send({ sucess: true , msg: "You two are now not friends"})

      });
module.exports = app;