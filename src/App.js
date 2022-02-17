import './App.css';
import Home from './Home'
import EditTask from './EditTask'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([])

  // GET all tasks from server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    // sort by ascending order
    data.sort((a, b) => Date.parse(a.dateTime) - Date.parse(b.dateTime));

    return data
  }  

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [tasks])

  // DELETE task by id
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // ADD new task
  const onAdd = async (newTask) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTask)
    })

    const data = await res.json()
    
    setTasks([...tasks, data])
  }

  // UPDATE task
  const onUpdate = async (updatedTask) => {
    await fetch(`http://localhost:5000/tasks/${updatedTask.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedTask)
    })
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home tasks={ tasks } onAdd={ onAdd } onDelete={ onDelete }  />} />
          <Route exact path="/edit" element={ <EditTask onUpdate={onUpdate} /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
