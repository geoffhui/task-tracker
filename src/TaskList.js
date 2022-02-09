import Tasks from "./Tasks";
import React from 'react';

const TaskList = ({ taskListDataSet, onDelete }) => {
   return ( 
      <div className='task'>
         <h3>{ taskListDataSet.length > 0 ? 'Tasks' : 'No Tasks Available' }</h3>
         <ul className="list">
            { taskListDataSet.map(task => (
               <Tasks key={ task.id } tasks={ task } onDelete={ onDelete } />
            )) }
         </ul>
      </div>
   );
}
 
export default TaskList;