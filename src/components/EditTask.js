import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import TaskError from './TaskError'
import EditHeader from "./EditHeader";
import { useLocation, useNavigate } from 'react-router-dom';
import { dbDateFormat, createTimes, dateFormat } from "../assets/Functions";

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

   const handleUpdate = async () => {
      if (!text) {
         setDisplayTaskError(true)
         return
      } else {
         setDisplayTaskError(false)
         setTask({
            "id": task.id,
            "text": text,
            "dateTime":  dbDateFormat(dateState, hour, minute)
         })
   
         await onUpdate(task)
         navigate("/")
      }
   }

   const handleCancel = () => {
      navigate('/')
   }

   useEffect(() => {
      onUpdate(task)
   }, [task])

   return ( 
      <div className='container edit-form'>
         <EditHeader className='edit-header'/>

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
               <h3 className='calendar-date'>{dateFormat(dateState, 'MMMM Do YYYY')}</h3>
            </div>
         </div>

         <div className='form-control hour-minute'>
            <div className='hour'>
               <label htmlFor='text' className='date-label'>Hour</label>
               <select 
                  value={ hour } 
                  onChange={(e) => setHour(e.target.value)}>
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

         <div>
            <button className='btn btn-block update-btn' onClick={ handleUpdate }>Update</button>
            <button className='btn btn-block cancel-btn' onClick={ handleCancel }>Cancel</button>
         </div>
      </div>
   );
}
 
export default EditTask;