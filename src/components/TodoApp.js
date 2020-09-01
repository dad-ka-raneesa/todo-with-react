import React from 'react';
import TaskList from './TaskList.js';
import TextArea from './TextArea';
import { getNextStatus, getDefaultStatus } from './statuses';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  handleChange(content) {
    this.setState(({ list }) => {
      return { list: list.concat({ content, status: getDefaultStatus() }) };
    })
  }

  updateStatus(id) {
    this.setState(({ list }) => {
      const newList = list.map((task) => ({ ...task }));
      const task = newList[id];
      task.status = getNextStatus(task.status);
      return { list: newList };
    });
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TaskList list={this.state.list}
          onClick={this.updateStatus}
        />
        <TextArea onChange={this.handleChange} />
      </div >
    );
  }
}

export default TodoApp;