
import './App.css';
import FunctionalProps from './component/FunctionalProps';
import ClassProps from './component/ClassProps';
import Login from './component/Login'
import Increment_Button from './component/Increment_Button';
import SubscriptionComponent from './component/SubscriptionComponent';
import Two_Buttons from './component/Two_Buttons'


function App() {
  return (
    <div class="App-header">
      {/* <FunctionalProps fname="ahmed" lname="Shaban" age="23" number="01555613249" ><p>This is the child element passed from the parent.</p></FunctionalProps> */}
      {/* <ClassProps course1="React" course2="JavaScript">
          <p>This is the child element passed from the parent.</p>
      </ClassProps> */}
      {/* <Login></Login> */}
      {/* <Increment_Button></Increment_Button> */}
      {/* <SubscriptionComponent></SubscriptionComponent> */}
      <Two_Buttons></Two_Buttons>

    </div>
  );
}

export default App;
