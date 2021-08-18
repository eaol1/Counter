import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  
  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  }
  
  const getBagesClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  }
  
  const handleIncrement = (params) => {
    //console.log(params);
    setCount(count + 1)
    setIsDisabled(false);
  }
  
  const handleDecrement = (params) => {
    //console.log(params);
    if (count - 1 <= 0) {
      setIsDisabled(true);
    }
    setCount(count - 1)
  }
  
  return (
    <>
      <span className={getBagesClasses()}>{formCount()}</span>
      <button
        className='btn btn-secondary btn-sm m-2'
        onClick={() => handleIncrement({id:1})}
      >
        Increment
      </button>
      <button
        className='btn btn-secondary btn-sm'
        onClick={() => handleDecrement({id:1})}
        disabled={isDisabled}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
