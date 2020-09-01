import React from 'react';
import InputBar from './InputBar';
import '../todoTitle.css';

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
    const header = <span onClick={this.handleClick}> {this.props.value}</span>;
    const input = <InputBar value={this.props.value} onChange={this.handleTitleChange} />

    return (<div className="title">{this.state.isEditable ? input : header}</div>);
  }
}

export default TodoTitle;