import '../App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import React from 'react';

const Home = ({ tasks, onAdd, onDelete, onUpdate }) => {
   return ( 
      <div className="container">
         <Header />
         <AddTask onAdd={ onAdd } />
         <TaskList tasks={ tasks } onDelete={ onDelete } onUpdate={ onUpdate } />
      </div>
   );
}
 
export default Home;