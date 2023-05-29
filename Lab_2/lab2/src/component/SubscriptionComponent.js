
import React, { Component } from 'react';

class SubscriptionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      subscription: 'Guest'
    };
  }

  handleClick = () => {
    this.setState({
      isLoggedIn: true,
      subscription: 'Logged'
    });
  };

  render() {
    const { isLoggedIn, subscription } = this.state;

    return (
      <div>
        <p>Is Logged In: {isLoggedIn.toString()}</p>
        <p>Subscription: {subscription}</p>
        <button onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}

export default SubscriptionComponent;