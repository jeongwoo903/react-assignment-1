const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    isChecked: {
        type: Boolean,
        default: false,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
