import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from "moment";

const Tasks = ({ tasks, onDelete, onAdd, handleEdit }) => {
   const [editView, setEditView] = useState(false)
   const [editTask, setEditTask] = useState(tasks.text)

   // resets edit view
   const handleCancel = () => {
      setEditView(false)
      setEditTask('')
   }

   // BUG - rendering issue (renders after DELETE, and again after ADD)
   // handle edit
   const onEdit = (taskObj) => {
      onDelete(taskObj.id)
      onAdd({
         id: taskObj.id,
         text: editTask,
         dateTime: taskObj.dateTime
      })

      setEditView(false)
   }

   return ( 
      <li>
         { editView ? 
            // displays when editView is true
            <>
               <div className="task-item">
                  <input type='text' value={ editTask } onChange={ e => setEditTask(e.target.value) } />
                  <p>{ moment(new Date(tasks.dateTime)).format('MMMM Do YYYY') } </p>
                  <p>{ moment(new Date(tasks.dateTime)).format('LT') }</p>
               </div>
               <div className="task-action">
                  <button onClick={ () => onEdit(tasks) }>Update</button>
                  <button onClick={ () => handleCancel() }>Cancel</button>
               </div>
            </>    
         : 
            // displays when editView is false
            <>
               <div className="task-item">
                  <h3>{ tasks.text }</h3>
                  <p>{ moment(new Date(tasks.dateTime)).format('MMMM Do YYYY') } </p>
                  <p>{ moment(new Date(tasks.dateTime)).format('LT') }</p>
               </div>
               <div className="task-action">
                  <FaTrash className='delete-btn btn-hover' onClick={ () => onDelete(tasks.id) } />
                  <FaEdit className='edit-btn btn-hover' onClick={ () => setEditView(true) } />
               </div>
            </>
         } 
      </li>
   );
}
 
export default Tasks;