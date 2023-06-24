const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public', { 'Content-Type': 'application/javascript' }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Todo data
let todos = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
];

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos - Create a new todo
app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: Date.now(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Update a todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find(todo => todo.id === id);
  if (!todo) {
    res.status(404).json({ error: 'Todo not found' });
    return;
  }

  todo.title = title || todo.title;
  todo.completed = completed !== undefined ? completed : todo.completed;

  res.json(todo);
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Todo not found' });
    return;
  }

  const deletedTodo = todos.splice(index, 1)[0];
  res.json(deletedTodo);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});