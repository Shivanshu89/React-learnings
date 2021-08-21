import React, {useState} from 'react';

const IncreaseCount = ()=>{
    const [count, setCount] =  useState(0);
    return(
        <button onClick = {()=> setCount((prev)=> prev+1)}>Click Count {count}</button>
    )
}
export default IncreaseCount;