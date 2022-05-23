import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = (props) => {
  console.log("props",props)
const {title,id, Remove} = props
console.log("id",id)
 

  // NOTE: do not delete `data-cy` key value pair
 
  return (
    <div className="maindiv">
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text" className="namediv">{props.title} </div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button"onClick={()=>Remove(id)} >Remove</button>
    </li>
    </div>
  );
};

export default Task;
