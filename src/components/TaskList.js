import Tasks from "./Tasks";
import React from 'react';
import CompletedTasks from "./CompletedTasks";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
   return ( 
      <>
         <div className='task'>
            <h2>Current Tasks</h2>
            <ul className="list">
               { (tasks.filter((task) => task.completed === false)).length > 0 ? tasks.map((task, index) => {  
                  if (task.completed === false) {
                     return <Tasks key={ index } tasks={ task } onUpdate={ onUpdate } onDelete={ onDelete } />
                  }
               }) : 'Congratulations! You have completed all your tasks!' }
            </ul>
         </div>

         <div className="task">
            <h2>Completed Tasks</h2>
            <ul className="list">
               { (tasks.filter((task) => task.completed === true)).length > 0 ? tasks.map((task, index) => {  
                  if (task.completed === true) {
                     return <CompletedTasks key={ index } tasks={ task } onUpdate={ onUpdate } />
                  }
               }) : 'You have not completed any tasks.' }
            </ul>
         </div>
      </>
   );
}
 
export default TaskList;