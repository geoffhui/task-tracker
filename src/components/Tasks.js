import React from "react";
import { FaEdit, FaTrash, FaCheckSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { dateFormat } from "../assets/Functions";

const Tasks = ({ tasks, onDelete, onUpdate }) => {
   const handleUndoComplete = () => {
      onUpdate({
         'id': tasks.id, 
         'text': tasks.text, 
         'dateTime': tasks.dateTime, 
         'completed': true
      })
   }

   return ( 
      <li>
         <div className="task-item">
            <h3>{ tasks.text }</h3>
            <p>{ dateFormat(tasks.dateTime, 'MMMM Do YYYY') } </p>
            <p>{ dateFormat(tasks.dateTime, 'LT') }</p>
         </div>

         <div className="task-action">
            <FaTrash className='delete-btn btn-hover' onClick={ () => onDelete(tasks.id) } />
            <FaCheckSquare className='complete-btn btn-hover' style={{ color: 'green' }} onClick={ () => handleUndoComplete()} />
            <Link to="/edit" state={tasks} style={{ color: 'black' }}>
               <FaEdit className='edit-btn btn-hover' />
            </Link>
         </div>
      </li>
   );
}
 
export default Tasks;