import React from 'react';

const getClassNames = (isDone) => {
  let contentClassName = 'todoContent';
  let colorClassName = 'todoColor blueColor';
  if (isDone) {
    contentClassName = `${contentClassName} done`;
    colorClassName = 'todoColor greenColor';
  }
  return { contentClassName, colorClassName }
}

const CreateTodo = ({ todo, id, onClick }) => {
  const { contentClassName, colorClassName } = getClassNames(todo.isDone);
  return (
    <div className='todo'>
      <span className={colorClassName}></span>
      <span className={contentClassName} onClick={() => onClick(id, todo.isDone)}>{todo.content}</span>
    </div >
  );
}

const TodoList = (props) => {
  const list = props.list.map((todo, id) => (
    <CreateTodo todo={todo} key={id} id={id} onClick={props.onClick} />
  ))

  return (<div>{list}</div>);
}

export default TodoList;