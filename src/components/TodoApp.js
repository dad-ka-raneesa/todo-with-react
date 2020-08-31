import React from 'react';

import TaskList from './TaskList.js';
import TextArea from './TextArea';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.changeTaskIsInDue = this.changeTaskIsInDue.bind(this);
    this.changeTaskIsCompleted = this.changeTaskIsCompleted.bind(this);
  }

  handleChange(content) {
    this.setState((state) => {
      let list = state.list.slice();
      list.push({ content, status: { isDone: false, isInProgress: false } });
      return { list };
    })
  }

  updateStatus(id, status) {
    this.setState(({ list }) => {
      const newList = list.map((task) => ({ ...task }));
      newList[id].status = status;
      return { list: newList };
    });
  }

  changeTaskIsInDue(id) {
    this.updateStatus(id, { isDone: false, isInProgress: false });
  }

  changeTaskIsCompleted(id) {
    this.updateStatus(id, { isDone: true, isInProgress: false });
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TaskList list={this.state.list}
          onComplete={this.changeTaskIsCompleted}
          onDue={this.changeTaskIsInDue}
        />
        <TextArea onChange={this.handleChange} />
      </div >
    );
  }
}

export default TodoApp;