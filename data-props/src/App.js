import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 1, text: "Hello There" }
  }

  handleText = value =>
    this.setState({ text: value });

  handleCount = value =>
    this.setState((prevState) => ({ count: prevState.count + value }));



  InputTextComponent = () => {
    return (
      <div className='TextDisplayArea'>
        <p><input type="text" className='textDisplay' value={this.state.text} disabled="on" placeholder="" /></p>
        Input text:
        <Input value={this.state.text} updateText={this.handleText.bind(this)} />
      </div>
    )
  }

  CounterComponent = () => {
    return (
      <div className='CounterDisplayArea'>
        <p>
          <input type="text" className='textDisplay' value={"Count: " + this.state.count} disabled="on" placeholder="" />
        </p>
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    )
  }

  render() {
    return (
      <div className='App'>
        <this.InputTextComponent />
        <hr />
        <this.CounterComponent />
      </div >
    );
  }
}

export default App;
