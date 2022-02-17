import '../App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import React from 'react';

const Home = ({ tasks, onAdd, onDelete }) => {
   return ( 
      <div className="container">
         <Header />
         <AddTask onAdd={ onAdd } />
         <TaskList taskListDataSet = { tasks } onDelete={ onDelete } onAdd={ onAdd } />
      </div>
   );
}
 
export default Home;