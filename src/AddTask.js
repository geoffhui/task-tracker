import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const AddTask = ({ onAdd }) => {
   const [task, setTask] = useState('')
   const [dateState, setDateState] = useState(new Date())
   const [time, setTime] = useState('')
   const [period, setPeriod] = useState('AM')

   const changeDate = (e) => {
      setDateState(e)
      console.log(e)
   }

   const onSubmit = (e) => {
      e.preventDefault()

      if (!task) {
         alert('Please add a task.')
         return
      }
      if (!time) {
         alert('Please add a time')
         return
      }
      if (parseInt(time) < 1 || parseInt(time) > 12) {
         alert('Time must be between 1 and 12.')
         return
      }

      if (time.includes(":") === false) {
         onAdd({
            text: task,
            date: moment(dateState).format('MMMM Do YYYY'),
            time: time + ":00",
            period: period
         })
      } else {
         onAdd({
            text: task,
            date: moment(dateState).format('MMMM Do YYYY'),
            time: time,
            period: period
         })
      }

      setTask('')
      setDateState(new Date())
      setTime('')
      setPeriod('AM')
   }

   return ( 
      <div>
         <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
               <label htmlFor='text'>Task</label>
               <input type='text' value={ task } 
               onChange={e => setTask(e.target.value)} 
               placeholder="Walk the dog..." />
            </div>
            
            <div className='form-control'>
               <label htmlFor='text'>Date</label>
               <Calendar value={ dateState } onChange={ changeDate } className="react-calendar" />
               <h3 className='calendar-date'>{moment(dateState).format('MMMM Do YYYY')}</h3>
            </div>

            <div className='form-control'>
               <label htmlFor='text'>Time</label>
               <input type='text' value={ time }
               onChange={e => setTime(e.target.value)}
               placeholder="5:30" />
            </div>

            <div className='form-control'>
               <label htmlFor='text'>Period</label>
               <select value={ period } onChange={(e) => setPeriod(e.target.value)}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
               </select>
            </div>

            <button className='btn btn-block'>Save Task</button>
         </form>
      </div>
   );
}
 
export default AddTask;