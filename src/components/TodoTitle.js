import React from 'react';
import InputBar from './InputBar';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleClick() {
    this.setState({ isEditable: true });
  }

  handleTitleChange(value) {
    this.setState({ isEditable: false });
    this.props.onChange(value);
  }

  render() {
    const header = (
      <div className="title">
        <span onClick={this.handleClick}> {this.props.value}</span>
        <div className="deleteTasksBtn" onClick={() => this.props.onDelete()}>X</div>
      </div>
    );
    const input = (
      <div className="title">
        <InputBar value={this.props.value} onChange={this.handleTitleChange} />
      </div>
    );

    return (this.state.isEditable ? input : header);
  }
}

export default TodoTitle;