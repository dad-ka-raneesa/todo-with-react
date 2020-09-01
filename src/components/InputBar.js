import React from 'react';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: this.props.value || '' };
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  onKeyPress(event) {
    let inputValue = event.target.value.trim();
    if (event.charCode === 13 && inputValue !== '') {
      this.props.onChange(inputValue);
      this.setState({ inputValue: '' });
    }
  }

  render() {
    return (
      <input
        type='text'
        className='inputBar'
        value={this.state.inputValue}
        onChange={this.handleChange}
        onKeyPress={this.onKeyPress}></input>
    );
  }
}

export default InputBar;