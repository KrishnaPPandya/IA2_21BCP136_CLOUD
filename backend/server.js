const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:1234@krishnacluster.2ckhtjo.mongodb.net/?retryWrites=true&w=majority&appName=krishnacluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// Define model
const TodoModel = mongoose.model('Todo', todoSchema);

// Routes
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/todos', async (req, res) => {
  const todo = new TodoModel({
    text: req.body.text
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
