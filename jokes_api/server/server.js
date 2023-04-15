// Load the variables in the .env file so they can be accessed via process.env.VAR_NAME
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {jokesRouter} = require('./routes/jokes.route');

// Environment vars
const port = process.env.API_PORT;

// requiring runs the file!
// we will not be referencing this file later so we do not need to set it to a variable
require('./config/mongoose.config');

const app = express();

// app.use is using middleware
// middleware = things that happen between request and response
// avoid cors error since our front-end is running on a diff port
// our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

// request.body will be undefined without this
app.use(express.json());

// any router that includes jokesRouter will start with '/api/jokes'
// has to go after app.use(express.json()) otherwise cannot receive req.body
app.use('/api/jokes', jokesRouter);

app.listen(port, () => console.log(`Listening on port ${port} for Requests to Respond to.`));



