import React from 'react';

const Task = ({ task, id, onClick }) => {
  return (
    <div className={`taskContainer ${task.status}`} onClick={() => onClick(id)}>
      <span className="taskColor"></span>
      <span className="taskContent" >{task.content}</span>
    </div >
  );
}

export default Task;