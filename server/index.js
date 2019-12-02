const express = require('express');
const profileController = require('./controllers/profile');
const friendController = require('./controllers/friend');
const trackController = require('./controllers/track');

const app = express(); //must be executed first

const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});

app
    .use(express.json())
    .get('/port' , (req,res) => res.send("Using Port: " + port))
    .use( '/profile' , profileController )
    .use( '/friend' , friendController )
    .use( '/track' , trackController );

app.listen(port, (/*no params */) => console.log(`Running on http://localhost:${port}`));