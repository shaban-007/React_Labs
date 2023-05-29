// ComponentFive.js
import React from 'react';
import MyContext from './MyContext';

const ComponentFive = () => {
  return (
    <MyContext.Consumer>
      {(value) => <p>Data Shared in ComptFive: {value}</p>}
    </MyContext.Consumer>
  );
};

export default ComponentFive;