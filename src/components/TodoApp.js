import React, { useState, useEffect } from 'react';
import TaskList from './TaskList.js';
import InputBar from './InputBar';
import TodoTitle from './TodoTitle';
import apiCall from './apiCall';

const setNewState = (setState, action) => apiCall(action).then(setState);

const TodoApp = function(props) {
  const [{ title, list }, setState] = useState({ title: 'Todo', list: [] });

  const dispatch = setNewState.bind(null, setState);
  const updateStatus = (id) => dispatch({ type: 'UPDATE_STATUS', id });
  const removeTask = (id) => dispatch({ type: 'REMOVE_TASK', id });
  const addTask = (task) => dispatch({ type: 'ADD_TASK', task });
  const updateTitle = (title) => dispatch({ type: 'UPDATE_TITLE', title });
  const removeAll = () => dispatch({ type: 'REMOVE_ALL' });

  useEffect(() => {
    dispatch({}); 
  }, []);

  return (
    <div>
      <TodoTitle value={title} updateTitle={updateTitle} handleDelete={removeAll} />
      <TaskList list={list} updateStatus={updateStatus} handleDelete={removeTask} />
      <InputBar onSubmit={addTask} />
    </div>
  )
}

export default TodoApp;