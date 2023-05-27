import React from 'react';

const FunctionalProps = ({ fname, lname, age, number, children }) => {
  return (
    <div>
      <h2>Bio:</h2>
      <p>fName: {fname}</p>
      <p>lName: {lname}</p>
      <p>Age: {age}</p>
      <p>number: {number}</p>
      <h2>Child Component:</h2>
      {children}
    </div>
  );
};

export default FunctionalProps;