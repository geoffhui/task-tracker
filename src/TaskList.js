import { useState } from "react";
import Tasks from "./Tasks";

const TaskList = () => {
   const tasks = [
      {
         id: '1',
         text: 'Walk the dog',
         date: 'March 21',
         time: '3:15 pm'
      },
      {
         id: '2',
         text: 'Grocery shopping',
         date: 'March 2',
         time: '4:00 pm'
      },
      {
         id: '3',
         text: 'Clean the house',
         date: 'March 30',
         time: '1:45 pm'
      }
   ]

   const [task, setTask] = useState(tasks)

   return ( 
      <>
         <h3>{ task.length > 0 ? 'Tasks' : 'No Tasks Available' }</h3>
         <ul>
            { task.map(task => (
               <Tasks key={ task.id } task={ task.text } date={ task.date } time={ task.time } />
            )) }
         </ul>
      </>
   );
}
 
export default TaskList;