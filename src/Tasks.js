const Tasks = ({ task, date, time }) => {
   return ( 
      <li>
         <h3>{ task }</h3>
         <p>{ date } at { time }</p>
         <button>x</button>
      </li>
   );
}
 
export default Tasks;