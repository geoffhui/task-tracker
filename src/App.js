import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState([])

  const onDelete = (id) => {
    setTask(task.filter((task) => task.id !== id))
  }

  const onAdd = (newTask) => {
    setTask([...task, newTask])
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={ onAdd } />
      <TaskList taskListDataSet = { task } onDelete={ onDelete }/>
    </div>
  );
}

export default App;
