import React, { useState } from "react";
import Task from "../Task/Task";
import TaskHeader from "../TaskHeader/TaskHeader";
import styles from "./addTask.module.css";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task, setTask] = useState("")
  const [list, setList] = useState([])
  const handleChange = (task) => {
    console.log(task.target.value)
    setTask(task.target.value)
    
  }
  const Remove = (id) => {
    let newarr = list.filter((item) => item.id !== id)
    setList(newarr)

  }

  const handleClick = () => {
    if (task == "") {
      return
    }
    const playload = {
      id: Date.now(),
      title: task,
      status: false
    }
    console.log("task", task)


    setList([...list, playload])
    }



  return (
    <>
  
      <div className={styles.todoForm}>
        <input  data-cy="add-task-input" type="text" onChange={handleChange} />
        <button data-cy="add-task-button" onClick={handleClick}>Add</button>

      </div>

      <div>
        {
          list.map((item) =>
           <Task {...item} Remove={Remove} key={item.id} />

          )
        }

      </div>
     
    </>
  );
};

export default AddTask;
