import React from 'react';
import TaskList from './TaskList.js';
import InputBar from './InputBar';
import TodoTitle from './TodoTitle';
import { getNextStatus, getDefaultStatus } from './statuses';
import '../todo.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'TODO', list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
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

  updateTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <TodoTitle value={this.state.title} onChange={this.updateTitle} />
        <TaskList list={this.state.list} onClick={this.updateStatus}
        />
        <InputBar onChange={this.handleChange} />
      </div >
    );
  }
}

export default TodoApp;