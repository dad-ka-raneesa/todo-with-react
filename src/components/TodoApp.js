import React from 'react';
import uuid from 'uuid';
import TaskList from './TaskList.js';
import InputBar from './InputBar';
import TodoTitle from './TodoTitle';
import { getNextStatus, getDefaultStatus } from './statuses';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'TODO', list: [] };
    this.addTask = this.addTask.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
  }

  addTask(content) {
    this.setState(({ list }) => ({
      list: list.concat({ id: uuid(), content, status: getDefaultStatus() })
    }))
  }

  updateStatus(id) {
    this.setState(({ list }) => {
      const newList = list.map((task) => ({ ...task }));
      const taskToUpdate = newList.find((task) => task.id === id);
      taskToUpdate.status = getNextStatus(taskToUpdate.status);
      return { list: newList };
    });
  }

  updateTitle(title) {
    this.setState({ title });
  }

  deleteTask(id) {
    this.setState(({ list }) => ({
      list: list.filter((task) => task.id !== id),
    }));
  }

  deleteTasks() {
    this.setState({ list: [] });
  }

  render() {
    return (
      <div>
        <TodoTitle value={this.state.title} onChange={this.updateTitle} onDelete={this.deleteTasks} />
        <TaskList list={this.state.list} onClick={this.updateStatus} onDelete={this.deleteTask} />
        <InputBar onChange={this.addTask} />
      </div >
    );
  }
}

export default TodoApp;