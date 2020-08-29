import React from 'react';

import TodoList from './TodoList.js';
import TextArea from './TextArea';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(content) {
    this.setState((state) => {
      let list = state.list.slice();
      list.push({ content, isDone: false });
      return { list };
    })
  }

  onClick(id, status) {
    this.setState((state) => {
      const list = state.list.slice();
      const todo = list[id];
      todo.isDone = !status;
      return { list };
    })
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoList list={this.state.list} onClick={this.onClick} />
        <TextArea onChange={this.handleChange} />
      </div >
    );
  }
}

export default TodoApp;