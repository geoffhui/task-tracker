import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from "moment";

const Tasks = ({ tasks, onDelete }) => {
   return ( 
      <li>
         <div className="task-item">
            <h3>{ tasks.text }</h3>
            <p>{ moment(new Date(tasks.dateTime)).format('MMMM Do YYYY') } </p>
            <p>{ moment(new Date(tasks.dateTime)).format('LT') }</p>
         </div>
         <div className="task-action">
            <FaTrash className='delete-btn btn-hover' onClick={ () => onDelete(tasks.id) } />
            {/* <FaTimes onClick={ () => onDelete(tasks.id) } /> */}
            {/* <button className='btn' onClick={ () => onDelete(tasks.id) }>x</button> */}
            <FaEdit className='edit-btn btn-hover' />
         </div>
      </li>
   );
}
 
export default Tasks;