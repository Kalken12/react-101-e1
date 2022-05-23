import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
 
const [count,setCount] = useState(0)
  const increment =()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    if(count<=0)
    {
      count=0
      return
    }
    else{
      setCount(count-1)
    }
    
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className="incre" onClick={increment}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" className="decre" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
