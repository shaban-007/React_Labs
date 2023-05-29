import logo from './logo.svg';
import './App.css';
import Prod from './Component/Prod';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import ComponentOne from './Component/ComponentOne';
import FetchPosts from './Component/FetchPosts';
import PostForm from './Component/PostForm';



function App() {
  return (
    <div className="App">
      <h1>Shaban</h1>
      {/* <Prod></Prod> */}
      {/* <SignUp></SignUp> */}
      {/* <Login></Login> */}
      {/* <ComponentOne> </ComponentOne> */}
      {/* <PostForm></PostForm> */}
      <FetchPosts></FetchPosts>
    </div>
  );
}

export default App;
