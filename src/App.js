import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

class App extends Component {
  constructor() {
    super();
    this.store = createStore(reducer);
    this.store.subscribe(() => {
      console.log(this.store.getState());
      this.setState({
        value: this.store.getState()
      });
    });
  }
  state = { value: 0 };
  add = () => {
    this.store.dispatch({
      type: "ADD"
    });
  };
  minus = () => {
    this.store.dispatch({
      type: "MINUS"
    });
  };
  nothing = () => {
    this.store.dispatch({
      type: "Nothing"
    });
  };
  render() {
    return (
      <div className="App">
        <p>{this.state.value}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.nothing}>Nothing</button>
      </div>
    );
  }
}

export default App;
