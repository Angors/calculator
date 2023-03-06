import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../implementations/calculate';
import React from 'react';

export default class App extends React.Component {
  
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <header className="App-header">
        <Display value={this.state.next || this.state.total || "0"} />
          <ButtonPanel clickHandler={this.handleClick}></ButtonPanel>
        </header>
      </div>
    );
  }
}

