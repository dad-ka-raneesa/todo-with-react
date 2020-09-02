import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const list = props.list.map((task, id) => (
    <Task task={task} key={id} id={id}
      onClick={props.onClick}
      onDelete={props.onDelete}
    />
  ))

  return (<div>{list}</div>);
}

export default TaskList;