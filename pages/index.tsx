
import styles from '../styles/Home.module.css'
import {useState} from 'react'

const Counter = () => {
  const[count, setCount]=useState(0)
  
  // const shoot = (a)=>{
    // alert(a);
  // }
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>Counter App</h1>
        <h3>Count Value: {count}</h3>
      <p>Counter value range limit is 0 to 10</p>
      <button className ={styles.btn} onClick={()=>{
          if(count===10){setCount(0);}else{setCount(count+1);}}}>Increment</button>
      <button className ={styles.btn} onClick={()=>{
          if(count>1){
             setCount(count-1);
          }else{
            setCount(10)}}}>Decrement</button>
            <button onClick={()=>alert("Why did you Click!!!")}>Try this!</button>
    </div>
  )
}

export default Counter
