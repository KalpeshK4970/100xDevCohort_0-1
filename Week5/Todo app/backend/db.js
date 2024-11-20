const mongoose = require("mongoose")
const { string } = require("zod")

mongoose.connect("mongodb://admin:lhYJYjyyMMzCRTBg@cluster0-shard-00-02.wvdhc.mongodb.net:27017/todo?replicaSet=atlas-wrnlpi-shard-0&ssl=true&authSource=admin")
        .then(() => {
            console.log("DB connected successfully!")
        })
        .catch(() => {
            console.log("failed to connect!")
        })

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema);
module.exports = {
    todo: todo
}

