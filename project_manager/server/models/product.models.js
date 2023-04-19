// we need mongoose for model
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, '{PATH} is required.'],
            // {PATH} will be replaced with whatever the filed name is, such as 'title'
            // for example: if we do not include a setup, the err message will say, 'title is required'
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
            // 'title must be at least 3 characters' 
        },
        price: {
            type: String,
            required: [true, '{PATH} is required.'],
        },
        description: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [5, '{PATH} must be at least {MINLENGTH} characters.']
        },
    },
    { timestamps: true } 
    // adds our created_at and updated_at
)

// Register schema with mongoose and provide a string to name the collection. 
// This returns a reference to our model that we can use for database operations. 
const Product = mongoose.model('Product', ProductSchema);
// product is just a variable name but safe to set it to obvious name

module.exports = { Product };
// you can export this file with an object like so or directly since we only have one thing to export like (export default Product;)
// but, exporting it into an object makes it easier to add more exports later like (module.exports = {Product, ...})