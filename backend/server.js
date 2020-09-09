const express = require('express');
const {
  initiateState,
  currentState,
  removeTask,
  resetTodo,
  updateStatus,
  updateTitle,
  addTask
} = require('./handlers.js');

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/api/currentState', currentState);

app.get('/api/removeTask/:id', removeTask);

app.get('/api/removeAll', resetTodo);

app.get('/api/updateStatus/:id', updateStatus);

app.post('/api/updateTitle', updateTitle);

app.post('/api/addTask', addTask);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('server is listening on ', port));