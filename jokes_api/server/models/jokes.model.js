// we need mongoose for model
const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, '{PATH} is required.'],
            // {PATH} will be replaced with whatever the filed name is, such as 'setup'
            // for example: if we do not include a setup, the err message will say, 'setup is required'
            minLength: [10, '{PATH} must be at least {MINLENGTH} characters.']
            // 'setup must be at least 10 characters' 
        },
        punchline: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
    },
    { timestamps: true } 
    // adds our created_at and updated_at
)

// Register schema with mongoose and provide a string to name the collection. 
// This returns a reference to our model that we can use for database operations. 
const Jokes = mongoose.model('Jokes', JokesSchema);
// Jokes is just a variable name but safe to set it to obvious name

module.exports = { Jokes };
// you can export this file with an object like so or directly since we only have one thing to export like (export default Jokes;)
// but, exporting it into an object makes it easier to add more exports later like (module.exports = {Jokes, ...})