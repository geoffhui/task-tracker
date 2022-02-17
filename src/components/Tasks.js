import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { dateFormat } from "../assets/Functions";

const Tasks = ({ tasks, onDelete }) => {
   return ( 
      <li>
         <div className="task-item">
            <h3>{ tasks.text }</h3>
            <p>{ dateFormat(tasks.dateTime, 'MMMM Do YYYY') } </p>
            <p>{ dateFormat(tasks.dateTime, 'LT') }</p>
         </div>

         <div className="task-action">
            <FaTrash className='delete-btn btn-hover' onClick={ () => onDelete(tasks.id) } />
            <Link to="/edit" state={tasks} >
            <FaEdit className='edit-btn btn-hover' />
            </Link>
         </div>
      </li>
   );
}
 
export default Tasks;