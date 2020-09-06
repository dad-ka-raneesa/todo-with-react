import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const list = props.list.map((task) => (
    <Task todo={task} key={task.id}
      updateStatus={props.updateStatus}
      handleDelete={props.handleDelete}
    />
  ))

  return (<div>{list}</div>);
}

export default TaskList;