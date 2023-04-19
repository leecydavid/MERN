const {Product} = require('../models/product.models');

//1. handle create function
const handleCreate = (req, res) => {
    console.log(req.body);
    Product.create(req.body)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

// 2. handle get all function
const handleGetAll = (req, res) => {
    Product.find()
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

// 3. handle get one function
const handleGetOne = (req, res) => {
    Product.findById(req.params.id)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

// 4. handle delete function
const handleDelete = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.status(400).json(error);
    })
}

// 5. handle update function 
const handleUpdate = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true
    }) .then(response => {
        res.json(response);
    }) .catch(error => {
        res.status(400).json(error);
    })
}


// exports default functions 
module.exports = {
    handleCreate,
    handleGetAll,
    handleGetOne,
    handleDelete,
    handleUpdate
}