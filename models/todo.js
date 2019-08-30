const todos = [
  // {todo: 'Javascript', done: true},
  // {todo: 'Python', done: false},
  // {todo: 'Express', done: true},
  // {todo: 'Node', done: true},  
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return todos;
}

function getOne(id) {
  return todos[id];
}

function create(todo){
  todos.push(todo);
}

function deleteOne(id){
  todos.splice(id, 1);
}

function update(id, todo){
  todos[id] = todo;
}