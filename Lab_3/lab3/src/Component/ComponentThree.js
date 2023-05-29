import React from 'react';
import MyContext from './MyContext';

const ComponentThree = () => {
  return (
    <MyContext.Consumer>
      {(value) => <p>Data Shared in CompThree: {value}</p>}
    </MyContext.Consumer>
  );
};

export default ComponentThree;