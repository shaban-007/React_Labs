import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password: '',
    };
  }
  handleUserNameChange= (event) => {
    this.setState({
        username: event.target.value
    })
    }
  handlePasswordChange= (event) => {
    this.setState({
        password: event.target.value
    })
    } 
  handleLogin = (e) => {
    alert(`UserName is ${this.state.username}, password: ${this.state.password}`)
    e.preventDefault()
  };


  render() {
    const { username, password} = this.state;

    return (
      <div>
        <h2>Login Form</h2>
        <div>
                <label>Username</label>
                <input type="text" required  value={username} onChange={this.handleUserNameChange} />
        </div>
        <div>
                <label>password</label>
                <input type="password" required  value={password} onChange={this.handlePasswordChange} />
        </div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;