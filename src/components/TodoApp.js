import React from 'react';
import TaskList from './TaskList.js';
import TextArea from './TextArea';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.changeTaskIsInDue = this.changeTaskIsInDue.bind(this);
    this.changeTaskIsInProgress = this.changeTaskIsInProgress.bind(this);
    this.changeTaskIsCompleted = this.changeTaskIsCompleted.bind(this);
  }

  handleChange(content) {
    this.setState(({ list }) => {
      let newList = list.slice();
      newList.push({ content, status: { isDone: false, isInProgress: false } });
      return { list: newList };
    })
  }

  updateStatus(id, status) {
    this.setState(({ list }) => {
      const newList = list.slice();
      newList[id].status = status;
      return { list: newList };
    });
  }

  changeTaskIsInDue(id) {
    this.updateStatus(id, { isDone: false, isInProgress: false });
  }

  changeTaskIsInProgress(id) {
    this.updateStatus(id, { isDone: false, isInProgress: true });
  }

  changeTaskIsCompleted(id) {
    this.updateStatus(id, { isDone: true, isInProgress: false });
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TaskList list={this.state.list}
          onDue={this.changeTaskIsInDue}
          onProgress={this.changeTaskIsInProgress}
          onComplete={this.changeTaskIsCompleted}
        />
        <TextArea onChange={this.handleChange} />
      </div >
    );
  }
}

export default TodoApp;