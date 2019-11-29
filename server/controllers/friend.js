const express = require('express');
const friend = require('../models/friends')

const app = express.Router();


 app
      .get('/' , (req, res) => res.send(friend)) //list of friends



      .post('/' , (req, res) => { //Adding a new friend
        const userAdd = friend.find(c => c.id === parseInt(req.query.id));
        const friendAdd = friend.find(c => c.id === parseInt(req.query.idf));

        if(!userAdd)
              res.status(400).send("ID not found") //throws an error if there is no user
       
        else if(!friendAdd)
              res.status(400).send("Friend ID not found") //throws an error is no friendID

        else if(friend[req.query.id].friendId.includes(parseInt(req.query.idf) ) )
              res.status(400).send("Already Friends") //throws an error if already friends     

        else{
            friend[req.query.id].friendId.push(parseInt(req.query.idf))
            friend[req.query.idf].friendId.push(parseInt(req.query.id))
            res.send(friend);
      
      }})


      .delete('/', (req,res) => {
        const userDel = friend.find(c => c.id === parseInt(req.query.id));
        if(!userDel)
              res.status(400).send("ID not found") //throws an error

        const friendDel = friend.find(c => c.id === parseInt(req.query.idf));
        if(!friendDel)
            res.status(400).send("Friend ID not found") //throws an error

      

        let index = req.query.id;
        let indexF = friend[index].friendId.indexOf(req.query.idf);  //finds the index of the friendID inside of User
        friend[req.query.id].friendId.splice(indexF,1); //User to Friend

        index = friend[req.query.idf].friendId.indexOf(req.query.id);  //finds the index of the User inside of FriendID
        friend[req.query.idf].friendId.splice(index,1); //Friend to User

        res.send(friend);  
  });

module.exports = app;