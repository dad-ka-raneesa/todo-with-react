import React from 'react';

const Task = ({ task, id, onClick, onDelete }) => {
  return (
    <div className={`taskContainer ${task.status}`}>
      <div className="taskIcon"></div>
      <div className="taskContent">
        <span onClick={() => onClick(task.id)}>{task.content}</span>
        <div className="deleteTaskBtn" onClick={() => onDelete(task.id)}>X</div>
      </div>
    </div >
  );
}

export default Task;