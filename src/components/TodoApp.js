import React, { useState } from 'react';
import TaskList from './TaskList.js';
import InputBar from './InputBar';
import TodoTitle from './TodoTitle';
import { getNextStatus, getDefaultStatus } from './statuses';

const TodoApp = function(props) {
  const [list, setTodoList] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [title, setTitle] = useState('Todo');

  const reset = function() {
    setTodoList([]);
    setLastId(0);
    setTitle('Todo');
  };

  const addTask = function(task) {
    setTodoList(list => [...list, { id: lastId, task, status: getDefaultStatus() }]);
    setLastId(id => id + 1);
  };

  const removeTask = function(taskId) {
    setTodoList(list => list.filter(task => task.id !== taskId));
  }

  const updateStatus = function(taskId) {
    setTodoList(list => {
      const newList = list.map((task) => ({ ...task }));
      const taskToUpdate = newList.find((task) => task.id === taskId);
      taskToUpdate.status = getNextStatus(taskToUpdate.status);
      return newList;
    })
  }

  return (
    <div>
      <TodoTitle value={title} updateTitle={setTitle} handleDelete={reset} />
      <TaskList list={list} updateStatus={updateStatus} handleDelete={removeTask} />
      <InputBar onSubmit={addTask} />
    </div>
  )
}

export default TodoApp;