import React from 'react';

const CreateTodo = (props) => {
  return (
    <div className='item'>
      <span className='color'></span>
      <span className='todoContent'>{props.content}</span>
    </div>
  );
}

const TodoList = (props) => {
  const list = props.list.map((todo, id) => (
    <CreateTodo content={todo} key={id} />
  ))

  return (<div>{list}</div>);
}

export default TodoList;