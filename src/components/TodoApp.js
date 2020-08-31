import React from 'react';

import TaskList from './TaskList.js';
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

  onClick(id) {
    this.setState(({ list }) => {
      const newList = list.map((task) => ({ ...task }));
      newList[id].isDone = !newList[id].isDone;
      return { list: newList };
    });
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TaskList list={this.state.list} onClick={this.onClick} />
        <TextArea onChange={this.handleChange} />
      </div >
    );
  }
}

export default TodoApp;