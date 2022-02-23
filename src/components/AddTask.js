import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import TaskError from './TaskError'
import { dbDateFormat, createTimes, dateFormat } from '../assets/Functions'

const AddTask = ({ onAdd }) => {
   const [task, setTask] = useState('')
   const [dateState, setDateState] = useState(new Date())
   const [hour, setHour] = useState('00')
   const [minute, setMinute] = useState('00')
   const [displayTaskError, setDisplayTaskError] = useState(false)

   const changeDate = (e) => {
      setDateState(e)
   }

   const onSubmit = (e) => {
      e.preventDefault()

      if (!task) {
         setDisplayTaskError(true)
         return
      } else {
         setDisplayTaskError(false)

         onAdd({
            text: task,
            dateTime: dbDateFormat(dateState, hour, minute),
            completed: false
         })

         // reset all dates to default values
         setTask('')
         setDateState(new Date())
         setHour('00')
         setMinute('00')
      }
   }

   return ( 
      <div>
         <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
               <label htmlFor='text'>Task</label>
               <input 
                  type='text' 
                  value={ task } 
                  onChange={e => setTask(e.target.value)} 
                  placeholder="Walk the dog..." />
               { displayTaskError ? <TaskError /> : null }
            </div>
            
            <div className='form-control'>
               <label htmlFor='text'>Date</label>
               <Calendar value={ dateState } onChange={ changeDate } className="react-calendar" />
               <h3 className='calendar-date'>{dateFormat(dateState, 'MMMM Do YYYY')}</h3>
            </div>

            <div className='form-control hour-minute'>
               <div className='hour'>
                  <label htmlFor='text' className='date-label'>Hour</label>
                  <select 
                     value={ hour } 
                     onChange={(e) => 
                     setHour(e.target.value)}>
                     {createTimes(24).map(({ value }) => <option key={ value } value={ value } >{ value }</option>)}
                  </select>
               </div>
               <div className="minute">
                  <label htmlFor='text' className='date-label'>Minute</label>
                  <select 
                     value={ minute } 
                     onChange={(e) => setMinute(e.target.value)}>
                     {createTimes(60).map(({ value }) => <option key={ value } value={ value } >{ value }</option>)}
                  </select>
               </div>
            </div>

            <h3 className="calendar-date">{ dateFormat((`${dateFormat(dateState, 'YYYY-MM-DD')}T${hour}:${minute}:00`), 'LT') }</h3>

            <button className='btn btn-block save-btn'>Save Task</button>
         </form>
      </div>
   );
}
 
export default AddTask;