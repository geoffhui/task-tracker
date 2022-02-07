import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

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
  }, [])

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const onAdd = async (newTask) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })

    const data = await res.json()
    
    setTasks([...tasks, data])
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={ onAdd } />
      <TaskList taskListDataSet = { tasks } onDelete={ onDelete }/>
    </div>
  );
}

export default App;
