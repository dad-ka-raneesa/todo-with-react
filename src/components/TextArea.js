import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  onKeyPress(event) {
    let inputValue = event.target.value;
    if (event.charCode === 13) {
      this.props.onChange(inputValue);
      inputValue = '';
    }
    this.setState({
      inputValue
    })
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.inputValue}
        onChange={this.handleChange}
        onKeyPress={this.onKeyPress}></input>
    );
  }
}

export default TextArea;