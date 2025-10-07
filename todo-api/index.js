import express from "express";

const app = express();
app.use(express.json());


let todos = [
  { "id": 1, "title": "Belajar Node.js", "done": false },
  { "id": 2, "title": "Belajar Express.js", "done": true }
]

app.get("/", (req, res) => {
    res.json(todos)
})

app.post("/todos", (req, res) => {
    const { title } = req.body;
    const newTodos = { id: todos.length + 1, title : "Belajar REST API", done: "false" };
    todos.push(newTodos);
    res.status(201).json (newTodos)
})

app.put("/todos/id", (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const newTodos = { id: 1,  "title": "Belajar Express.js Lanjutan", "done": true}
    todos.push(newTodos);
    res.status(201).json (newTodos)
})

app.delete("/todos/id", (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const newTodos = { id: 1,  "title": "Belajar Express.js Lanjutan", "done": true}
    todos.push(newTodos);
    res.status(201).json({  msg: "Todo berhasil dihapus"})
})

app.listen(5001, () => console.log(
    "Server running on http://localhost:5001"
));