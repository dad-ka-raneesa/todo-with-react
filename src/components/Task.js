import React from 'react';
import '../task.css';

const Task = ({ task, id, onDue, onComplete }) => {
  let onClick = onComplete;
  let taskStatus = 'notDone';
  if (task.status.isDone) {
    onClick = onDue;
    taskStatus = 'done'
  }
  return (
    <div className={`taskContainer ${taskStatus}`} onClick={() => onClick(id)}>
      <span className="taskColor"></span>
      <span className="taskContent" >{task.content}</span>
    </div >
  );
}

export default Task;