import React from 'react';

const Task = ({ todo, updateStatus, handleDelete }) => {
  const { id, task, status } = todo;
  return (
    <div className={`taskContainer ${status}`}>
      <div className="taskIcon"></div>
      <div className="taskContent">
        <span onClick={() => updateStatus(id)}>{task}</span>
        <div className="deleteTaskBtn" onClick={() => handleDelete(id)}>X</div>
      </div>
    </div >
  );
}

export default Task;