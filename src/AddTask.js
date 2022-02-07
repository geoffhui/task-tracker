import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const AddTask = ({ onAdd }) => {
   const [task, setTask] = useState('')
   const [dateState, setDateState] = useState(new Date())
   const [hour, setHour] = useState('00')
   const [minute, setMinute] = useState('00')

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

      var formatDate = moment(dateState).format(`YYYY-MM-DDT${ hour }:${ minute }`)

      onAdd({
         text: task,
         dateTime: formatDate
      })

      setTask('')
      setDateState(new Date())
      setHour('00')
      setMinute('00')
   }

   function loopHours() {
      const hourList = [];

         for(var i = 0; i < 24; i++) {
            var hoursObj = {};

            if (i < 10) {
               hoursObj['value'] = "0" + i;
            } else {
               hoursObj['value'] = i;
            }

            hourList.push(hoursObj);
         }
         
         return hourList
   }

   function loopMinutes() {
      const minuteList = [];

         for(var i = 0; i < 60; i++) {
            var minutesObj = {};

            if (i < 10) {
               minutesObj['value'] = "0" + i;
            } else {
               minutesObj['value'] = i;
            }

            minuteList.push(minutesObj);
         }
         
         return minuteList
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

            <div className='form-control hour-minute'>
               <div className='hour'>
                  <label htmlFor='text' className='date-label'>Hour
                     <select value={ hour } onChange={(e) => setHour(e.target.value)}>
                     {loopHours().map(({ value }) => <option key={value} value={value} >{value}</option>)}
                     </select>
                  </label>
               </div>
               <div className="minute">
                  <label htmlFor='text' className='date-label'>Minute
                     <select value={ minute } onChange={(e) => setMinute(e.target.value)}>
                     {loopMinutes().map(({ value }) => <option key={value} value={value} >{value}</option>)}
                     </select>
                  </label>
               </div>
            </div>

            <button className='btn btn-block'>Save Task</button>
         </form>
      </div>
   );
}
 
export default AddTask;