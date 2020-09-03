import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const list = props.list.map((task) => (
    <Task task={task} key={task.id}
      onClick={props.onClick}
      onDelete={props.onDelete}
    />
  ))

  return (<div>{list}</div>);
}

export default TaskList;