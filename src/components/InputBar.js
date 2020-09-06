import React, { useState } from 'react';

const InputBar = function(props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = function(event) {
    event.preventDefault();
    if (value) {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};

InputBar.defaultProps = { value: '' };

export default InputBar;