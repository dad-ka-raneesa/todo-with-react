import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  onKeyPress(event) {
    let inputValue = event.target.value;
    let list = this.state.list.slice();
    if (event.charCode === 13) {
      list.push(inputValue);
      inputValue = '';
    }
    return this.setState({
      list,
      inputValue
    })
  }

  renderChildren() {
    return this.state.list.map((todo, id) => (
      <div key={id}>
        <p style={{ fontWeight: '700' }}>{todo}</p>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <div>
          {this.renderChildren()}
        </div>
        <input
          type='text'
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyPress={this.onKeyPress}></input>
      </div >
    );
  }
}

export default App;
