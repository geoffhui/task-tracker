import React from "react";
import { dateFormat } from "../assets/Functions";
import { FaUndo } from 'react-icons/fa';

const CompletedTasks = ({ tasks, onUpdate }) => {
   const handleComplete = () => {
      onUpdate({
         'id': tasks.id, 
         'text': tasks.text, 
         'dateTime': tasks.dateTime, 
         'completed': false
      })
   }

   return ( 
      <li>
         <div className="task-item">
            <h3 className='strike-through'>{ tasks.text }</h3>
            <p>{ dateFormat(tasks.dateTime, 'MMMM Do YYYY') } </p>
            <p>{ dateFormat(tasks.dateTime, 'LT') }</p>
         </div>

         <div className="task-action">
            <FaUndo className='btn-hover' onClick={ () => handleComplete() } />
         </div>
      </li>
   );   
}
 
export default CompletedTasks;