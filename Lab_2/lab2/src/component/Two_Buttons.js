import React, { Component } from 'react';
import './Component.css'


class Two_Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : prevState.quantity
    }));
  };

  render() {
    const { quantity } = this.state;

    return (
      <div class='counter-content'>
        <button onClick={this.handleDecrement} class='counter-button'>-</button>
        <span class='counter-number'>{quantity}</span>
        <button onClick={this.handleIncrement} class ='counter-button'>+</button>
      </div>
    );
  }
}

export default Two_Buttons;

