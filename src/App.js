import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {
  const tasks = [
    {
       id: '1',
       text: 'Walk the dog',
       date: 'March 21',
       time: '3:15 pm'
    },
    {
       id: '2',
       text: 'Grocery shopping',
       date: 'March 2',
       time: '4:00 pm'
    },
    {
       id: '3',
       text: 'Clean the house',
       date: 'March 30',
       time: '1:45 pm'
    }
 ]

  const [task, setTask] = useState(tasks)

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
