var Todo = require('../models/todo');

module.exports = {
  index,
  create,
  delete: deleteTodo
}


function index(req, res, next) {
  res.render('index', { 
    title: 'To Do List' ,
    todos: Todo.getAll()
  });
}

function create(req, res){
  console.log(req.body);
  Todo.create(req.body);
  res.redirect('/');
}

function deleteTodo(req, res){
  Todo.deleteOne(req.params.id);
  res.redirect('/');
}