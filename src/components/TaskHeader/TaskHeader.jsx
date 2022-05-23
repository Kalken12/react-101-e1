import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (props) => {
  // sample values to be replaced
  console.log("mamam",props)
  
  
  let totalTask =props.length;
  // let unCompletedTask = ;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task"></b>
      <b data-cy="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
