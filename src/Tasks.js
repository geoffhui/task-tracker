const Tasks = ({ tasks, onDelete }) => {
   return ( 
      <li>
         <h3>{ tasks.text }</h3>
         <p>{ tasks.date } at { tasks.time } { tasks.period }</p>
         <button className='btn' onClick={ () => onDelete(tasks.id) }>x</button>
      </li>
   );
}
 
export default Tasks;