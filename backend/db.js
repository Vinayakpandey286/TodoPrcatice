const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}