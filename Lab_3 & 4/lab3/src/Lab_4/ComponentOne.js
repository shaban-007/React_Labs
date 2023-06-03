import React from 'react';
import MyContext from './MyContext';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import ComponentFive from './ComponentFive';

const ComponentOne = () => {
  const Data = 'Data From Comp One';

  return (
    
    

    <MyContext.Provider value={Data}>
      <div>
      <h2>Component One</h2>
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
      </div>
    </MyContext.Provider>
  );
};

export default ComponentOne;