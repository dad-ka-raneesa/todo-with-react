import React from 'react';
import './App.css';
import TodoList from './components/TodoList.js';
import TextArea from './components/TextArea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: ['hello'] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(content) {
    let list = this.state.list.slice();
    list.push(content);
    this.setState({
      list
    })
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoList list={this.state.list} />
        <TextArea onChange={this.handleChange} />
      </div >
    );
  }
}

export default App;
