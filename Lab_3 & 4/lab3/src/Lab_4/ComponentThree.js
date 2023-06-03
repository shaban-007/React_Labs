import React from 'react';
import MyContext from './MyContext';

const ComponentThree = () => {

  const value = useContext(MyContext);
  return (
    <div>       
            <p>Data Shared in CompThree: {value}</p>
    </div>

  );
};

export default ComponentThree;