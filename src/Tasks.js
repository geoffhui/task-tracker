import React from "react";

const Tasks = ({ tasks, onDelete }) => {
   return ( 
      <li>
         <div className="task-item">
            <h3>{ tasks.text }</h3>
            <p>{ tasks.date } </p>
            <p>{ tasks.time } { tasks.period }</p>
         </div>
         <div className="task-action">
            <button className='btn' onClick={ () => onDelete(tasks.id) }>x</button>
         </div>
      </li>
   );
}
 
export default Tasks;