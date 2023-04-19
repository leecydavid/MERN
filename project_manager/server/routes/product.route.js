const express = require('express');

// import controller
const {
    handleCreate,
    handleGetAll,
    handleGetOne,
    handleDelete,
    handleUpdate
} = require('../controllers/product.controller');

const router = express.Router();

// 1. POST route for handle create
router.post('/', handleCreate);

// 2. Get All route for handle get all
router.get('/', handleGetAll);

// 3. Get one route for handle get one
router.get('/:id', handleGetOne);

// 4. Delete route for handle delete
router.delete('/:id', handleDelete);

// 5. Update route for handle update
router.put('/:id', handleUpdate);


module.exports = { productRouter: router }