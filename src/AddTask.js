import { useState } from 'react';


const AddTask = ({ onAdd }) => {
   const [task, setTask] = useState('')
   const [date, setDate] = useState('')
   const [time, setTime] = useState('')

   const onSubmit = (e) => {
      e.preventDefault()

      if (!task) {
         alert('Please add a task')
         return
      }
      if (!date) {
         alert('Please add a date')
         return
      }
      if (!time) {
         alert('Please add a time')
         return
      }

      onAdd({
         id: Math.floor(Math.random() * 10000000),
         text: task,
         date,
         time
      })

      setTask('')
      setDate('')
      setTime('')
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
               <input type='text' value={ date }
               onChange={e => setDate(e.target.value)}
               placeholder="Feb 23..." />
            </div>

            <div className='form-control'>
               <label htmlFor='text'>Time</label>
               <input type='text' value={ time }
               onChange={e => setTime(e.target.value)}
               placeholder="5:30 pm..." />
            </div>

            <button className='btn btn-block'>Save Task</button>
         </form>
      </div>
   );
}
 
export default AddTask;