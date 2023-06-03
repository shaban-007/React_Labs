import React, { Component } from 'react';
import './Component.css'


class Increment_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  increment = () => {
    this.setState(() => ({
      count: this.state.count + 1,
    }));
  };

  decrement = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({
        count: this.state.count - 1,
      }));
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter-content">
        <div>
          <button onClick={this.decrement} className="counter-button">-</button>
          <span className="counter-number">{count}</span>
          <button onClick={this.increment} className="counter-button">+</button>
        </div>
      </div>
    );
  }
}

export default Increment_Button;
