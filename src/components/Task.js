import React from 'react';
import '../task.css';

const Task = ({ task, id, onDue, onComplete, onProgress }) => {
  const { isDone, isInProgress } = task.status;
  let onClick = onProgress;
  let taskStatus = 'notDone';

  if (isInProgress) {
    onClick = onComplete;
    taskStatus = 'progressing';
  }

  if (isDone) {
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