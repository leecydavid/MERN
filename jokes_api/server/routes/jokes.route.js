// we need express in our route 
const express = require('express');

// import controller 
const { 
    handleCreate,
    handleGetAll,
    handleGetOne,
    handleDelete,
    handleUpdate
} = require('../controllers/jokes.controller');

// import router 
// we are going to prepend /api/jokes to all routes coming from this router when we add them to server.js
const router = express.Router();

//1. POST route for handlecreate function 
router.post('/', handleCreate); 

// 2. GET route for handle get all function 
router.get('/', handleGetAll);

// 3. GET route for handle get one function
router.get('/:id', handleGetOne);

// 4. DELETE route for handle delete function
router.delete('/:id', handleDelete);

// 5. UPDATE route for handle update function
router.put('/:id', handleUpdate);


module.exports = { jokesRouter: router }; 
// setting jokesRouter to equal router 


