import React, { useState  } from 'react';

const Increment_Button = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

 

    return (
      <div className="counter-content">
        <div>
          <button onClick={decrement} className="counter-button">-</button>
          <span className="counter-number">{count}</span>
          <button onClick={increment} className="counter-button">+</button>
        </div>
      </div>
    );
  
    }

export default Increment_Button;
