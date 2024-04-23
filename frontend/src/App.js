import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newTodoText })
    })
      .then(response => response.json())
      .then(data => {
        setTodos([...todos, data]);
        setNewTodoText('');
      })
      .catch(error => console.error('Error:', error));
  };



  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text}
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
