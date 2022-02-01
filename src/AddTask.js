import { useState } from 'react';

const AddTask = () => {
   const [task, setTask] = useState('')
   const [date, setDate] = useState('')
   const [time, setTime] = useState('')

   const onSubmit = e => {
      e.preventDefault()

      // add new task, date, and time into data

      setTask('')
      setDate('')
      setTime('')
   }

   return ( 
      <div>
         <form>
            <label htmlFor='text'>Task</label>
            <input type='text' value={ task } 
            onChange={e => setTask(e.target.value)} 
            placeholder="Walk the dog..." />

            <label htmlFor='text'>Date</label>
            <input type='text' value={ date }
            onChange={e => setDate(e.target.value)}
            placeholder="Feb 23..." />

            <label htmlFor='text'>Time</label>
            <input type='text' value={ time }
            onChange={e => setTime(e.target.value)}
            placeholder="5:30 pm..." />

            <button>Save Task</button>
         </form>
      </div>
   );
}
 
export default AddTask;