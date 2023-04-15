const {Jokes} = require('../models/jokes.model');

// handle create function 
const handleCreate = (req, res) => {
    Jokes.create(req.body)
    // .create is the POST method
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

// handle get all function 
const handleGetAll = (req, res) => {
    Jokes.find()
    // .find is the get all method
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

// handle get one function
const handleGetOne = (req, res) => {
    Jokes.findById(req.params.id)
    // .findbyId is get one by id function
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

// handle delete function
const handleDelete = (req, res) => {
    Jokes.findByIdAndDelete(req.params.id)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.status(400).json(error);
    })
}

// handle update function
const handleUpdate = (req, res) => {
    Jokes.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        // when updating a joke, validations must be true
        new: true,
        // return our updated joke
    }) .then(response => {
        res.json(response);
    }) .catch(error => {
        res.status(400).json(error);
    })
}

// export default functions 
module.exports = {
    handleCreate,
    handleGetAll,
    handleGetOne,
    handleDelete,
    handleUpdate
}