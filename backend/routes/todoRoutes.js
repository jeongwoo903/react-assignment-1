const express = require('express');
const router = express.Router();
const Todo = require('../schemas/Todo');

// get
router.get('/todo', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// post
router.post('/todo', async (req, res) => {
    try {
        const { id, content, isChecked } = req.body;
        const newTodo = new Todo({
            id,
            content,
            isChecked
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// put
router.put('/todo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { isChecked } = req.body;

        const updatedTodo = await Todo.findOneAndUpdate(
            { id }, // 커스텀 ID 필드로 조회
            { isChecked },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// delete
router.delete('/todo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findOneAndDelete({ id }); // 커스텀 ID 필드로 삭제
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
