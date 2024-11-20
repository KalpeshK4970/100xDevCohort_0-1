const express = require("express")
const app = express();
const {todo} = require("./db")
const {createTodo, updateTodo} = require("./types")
const port = 3000;


app.use(express.json());

app.post("/todo", async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return ;
    }

    // mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created!"
    })

})

app.get("/todos", async (req,res) => {

    const todos = await todo.find({})

    res.json({
        todos: todos 
    })
})

app.put("/completed" ,async (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Incorrect id!"
        })

        return ;
    }

    await todo.updateOne({
        _id: updatePayload.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})