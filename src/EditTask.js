import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import TaskError from './TaskError'
import EditHeader from "./EditHeader";
import { useLocation, useNavigate } from 'react-router-dom';

const EditTask = ({  onUpdate }) => {
   const location = useLocation()
   const navigate = useNavigate()
   const [task, setTask] = useState(location.state)
   const [text, setText] = useState(task.text)
   const [dateState, setDateState] = useState(new Date(task.dateTime))
   const [hour, setHour] = useState(moment(task.dateTime).format('hh'))
   const [minute, setMinute] = useState(moment(task.dateTime).format('mm'))
   const [displayTaskError, setDisplayTaskError] = useState(false)

   const changeDate = (e) => {
      setDateState(e)
   }

   // Update
   const handleUpdate = async () => {
      if (!text) {
         setDisplayTaskError(true)
         return
      } else {
         setDisplayTaskError(false)
         setTask({
            "id": task.id,
            "text": text,
            "dateTime":  moment(dateState).format(`YYYY-MM-DDT${ hour }:${ minute }`)
         })
   
         await onUpdate(task)
         navigate("/")
      }
   }

   useEffect(() => {
      onUpdate(task)
   }, [task])

   // creates an array of objects with values from 0 to 23
   function loopHours() {
      const hourList = [];

         for(var i = 0; i < 24; i++) {
            var hoursObj = {};

            if (i < 10) {
               hoursObj['value'] = `0${i}`;
            } else {
               hoursObj['value'] = i;
            }
            hourList.push(hoursObj);
         }
         return hourList
   }

   // creates an array of objects with values from 0 to 59
   function loopMinutes() {
      const minuteList = [];

         for(var i = 0; i < 60; i++) {
            var minutesObj = {};

            if (i < 10) {
               minutesObj['value'] = `0${i}`;
            } else {
               minutesObj['value'] = i;
            }
            minuteList.push(minutesObj);
         }
         return minuteList
   }

   return ( 
      <div>
         <EditHeader />

         <input 
            autoFocus 
            type='text' 
            id='edit-input' 
            value={ text }
            onChange={ e => setText(e.target.value) } />
            { displayTaskError ? <TaskError /> : null }

         <div>
            <div className='form-control'>
               <label htmlFor='text'>Date</label>
               <Calendar value={ dateState } onChange={ changeDate } className="react-calendar" />
               <h3 className='calendar-date'>{moment(dateState).format('MMMM Do YYYY')}</h3>
            </div>
         </div>

         <div className='form-control hour-minute'>
            <div className='hour'>
               <label htmlFor='text' className='date-label'>Hour</label>
               <select 
                  value={ hour } 
                  onChange={(e) => setHour(e.target.value)}>
                  {loopHours().map(({ value }) => <option key={ value } value={ value } >{ value }</option>)}
               </select>
            </div>

            <div className="minute">
               <label htmlFor='text' className='date-label'>Minute</label>
               <select 
                  value={ minute } 
                  onChange={(e) => setMinute(e.target.value)}>
                  {loopMinutes().map(({ value }) => <option key={ value } value={ value } >{ value }</option>)}
               </select>
            </div>
         </div>

         <button className='btn btn-block' onClick={ handleUpdate }>Update Task</button>
      </div>
   );
}
 
export default EditTask;