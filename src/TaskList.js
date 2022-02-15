import Tasks from "./Tasks";
import React from 'react';

const TaskList = ({ taskListDataSet, onDelete, onAdd, onUpdate }) => {
   return ( 
      <div className='task'>
         <h3>{ taskListDataSet.length > 0 ? 'Tasks' : 'No Tasks Available' }</h3>
         <ul className="list">
            { taskListDataSet.map((task, index) => (
               <Tasks key={ index } tasks={ task } onDelete={ onDelete } onAdd={ onAdd } onUpdate={ onUpdate } />
            )) }
         </ul>
      </div>
   );
}
 
export default TaskList;