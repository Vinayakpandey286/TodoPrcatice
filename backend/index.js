const express = require('express')
const app = express()
const PORT = 5000
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')

app.use(express.json())

app.post('/todo', async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'your inputs are wrong'
        })
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.status(200).json({
        msg: "todo created"
    })
    // if inputs are right then put it in db
})
app.get('/todos', async (req, res) => {
    const todos = await todo.find({})
    res.status(200).json({
        todos
    })
})
app.put('/completed', async (req, res) => {
    const parsedId = updateTodo.safeParse(req.body)
    if (!parsedId.success) {
        res.status(411).json({
            msg: "wrong inputs"
        })
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.status(200).json({
        msg: "todo marked as completed"
    })
})


app.listen(PORT, () => {
    console.log(`port is listening on PORT:${PORT}`)
})


