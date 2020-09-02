import React from 'react';

const Task = ({ task, id, onClick }) => {
  return (
    <div className={`taskContainer ${task.status}`}>
      <div className="taskIcon"></div>
      <div className="taskContent">
        <span onClick={() => onClick(id)}>{task.content}</span>
      </div>
    </div >
  );
}

export default Task;