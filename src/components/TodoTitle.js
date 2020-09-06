import React, { useState } from 'react';
import InputBar from './InputBar';

const TodoTitle = function(props) {
  const [isEditable, toggleEditable] = useState(false);

  const updateTitle = function(title) {
    toggleEditable(!isEditable);
    props.updateTitle(title);
  }

  const title = (
    <div className="title">
      <span onClick={() => toggleEditable(!isEditable)}> {props.value}</span>
      <div className="deleteTasksBtn" onClick={() => props.handleDelete()}>X</div>
    </div>
  );

  const inputBox = (
    <div className="title">
      <InputBar value={props.value} onSubmit={updateTitle} />
    </div>
  );

  return isEditable ? inputBox : title;
}

export default TodoTitle;