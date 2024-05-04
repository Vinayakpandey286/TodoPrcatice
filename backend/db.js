const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vinayakpandey286:Pandey!!28@cluster0.6ip89gu.mongodb.net/todo')

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