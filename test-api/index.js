import express from 'express';
var app = express();

import {todoservice} from './todo.service.js';
let todo_service = new todoservice();
app.get('/todolist', function (req, res) {
  console.log('API called with GET:' + req.url);
  res.json(todo_service.get_todos());
})

app.listen(3000, function () {
  console.log(' app listening on port 3000!')
})