// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');

const articles = require('./articles/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;


app.use('/api/articles', articles);


const server = app.listen(port, () => {
	console.log('API backend listening on port ' + port);
});

module.exports = server;
