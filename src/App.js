import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import React, { useState, useEffect } from 'react';

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
    let isMounted = true

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()

    return () => { isMounted = false }
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
    const res = await fetch(`http://localhost:5000/tasks/${updatedTask.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={ onAdd } />
      <TaskList taskListDataSet = { tasks } onDelete={ onDelete } onAdd={ onAdd } onUpdate={ onUpdate } />
    </div>
  );
}

export default App;
