import React from 'react';

const Task = ({ task, id, onClick, onDelete }) => {
  return (
    <div className={`taskContainer ${task.status}`}>
      <div className="taskIcon"></div>
      <div className="taskContent">
        <span onClick={() => onClick(id)}>{task.content}</span>
        <div className="deleteTaskBtn" onClick={() => onDelete(id)}>X</div>
      </div>
    </div >
  );
}

export default Task;