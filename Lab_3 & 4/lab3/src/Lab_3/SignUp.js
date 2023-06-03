import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email: '',
      password: '',
      age:'',
    };
  }

  
  handleUserNameChange= (event) => {
    this.setState({
        username: event.target.value
    })
    }
    handlEemailChange= (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
  handlePasswordChange= (event) => {
    this.setState({
        password: event.target.value
    })
    }
    handleAgeChange= (event) => {
        this.setState({
            age: event.target.value
        })
    }


  handleSignup = (e) => {
    alert(`UserName is ${this.state.username}, email: ${this.state.email} your Age: ${this.state.age}`)
    e.preventDefault()
  };


  render() {
    const { username,email, password, age } = this.state;

    return (
      <div>
        <h2>Signup Form</h2>
        <div>
                <label>Username</label>
                <input type="text" required  value={username} onChange={this.handleUserNameChange} />
        </div>
        <div>
                <label>password</label>
                <input type="password" required  value={password} onChange={this.handlePasswordChange} />
        </div>
        <div>
                <label>email</label>
                <input type="email" required  value={email} onChange={this.handlEemailChange} />
        </div>
        <div>
                <label>age</label>
                <input type="text" required  value={age} onChange={this.handleAgeChange} />
        </div>
        <button onClick={this.handleSignup}>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;