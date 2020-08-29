import React from 'react';
import '../task.css';

const Task = ({ task, id, onClick }) => {
  const taskStatus = task.isDone ? 'done' : 'notDone';
  return (
    <div className={`taskContainer ${taskStatus}`} onClick={() => onClick(id, task.isDone)}>
      <span className="taskColor"></span>
      <span className="taskContent" >{task.content}</span>
    </div >
  );
}

export default Task;