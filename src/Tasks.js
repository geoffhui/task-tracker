import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from "moment";

const Tasks = ({ tasks, onDelete, onUpdate }) => {
   const [editView, setEditView] = useState(false)
   const [editTask, setEditTask] = useState(tasks.text)
   const [taskObj, setTaskObj] = useState(tasks)

   const handleEdit = () => {
      // Sets edit input to current task
      setEditTask(tasks.text)
      setEditView(true)
   }

   // Resets edit view
   const handleCancel = () => {
      setEditView(false)
      setEditTask(tasks.text)
   }

   const handleUpdate = () => {
      setTaskObj({
         'id': tasks.id, 
         'text': editTask,
         'dateTime': tasks.dateTime
      })
      setEditView(false)
      onUpdate(taskObj)
   }

   useEffect(() => {
      onUpdate(taskObj)
   }, [taskObj])

   return ( 
      <li>
         { editView ? 
            // displays when editView is true
            <>
               <div className="task-item">
                  <input 
                     autoFocus 
                     type='text' 
                     id='edit-input' 
                     value={ editTask }
                     onChange={ e => setEditTask(e.target.value) } 
                  />
                  <p>{ moment(new Date(tasks.dateTime)).format('MMMM Do YYYY') } </p>
                  <p>{ moment(new Date(tasks.dateTime)).format('LT') }</p>
               </div>
               <div className="task-action">
                  <button className='update-btn btn-hover' onClick={ () => handleUpdate() }>Update</button>
                  <button className='cancel-btn btn-hover' onClick={ () => handleCancel() }>Cancel</button>
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
                  <FaEdit className='edit-btn btn-hover' onClick={ () => handleEdit() } />
               </div>
            </>
         } 
      </li>
   );
}
 
export default Tasks;