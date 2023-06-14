const Todo = require("../models/todo-model");

async function getTodo(req, res, next) {
  let todos;
  try {
    todos = await Todo.getTodos();
  } catch (error) {
    return next(error);
  }

  res.json({
    todos: todos,
  });
}

async function addTodo(req, res, next) {
  const todoText = req.body.text;

  const todo = new Todo(todoText);

  try {
    const result = await todo.save();
    insertedId = result.insertedId;
  } catch (error) {
    return next(error);
  }
  todo.id = insertedId.toString();

  res.json({
    message: "Added TODO !!",
    todo: todo.id,
  });
}

async function deleteTodo(req, res, next) {
  const todoId = req.params.id;

  const todo = new Todo(null, todoId);

  try {
    await todo.delete();
  } catch (error) {
    return next(error);
  }

  res.json({
    message: "Todo is deleted!",
  });
}

async function updateTodo(req, res, next) {
  const todoId = req.params.id;
  const newTodoText = req.body.newText;

  const todo = new Todo(newTodoText, todoId);

  try {
    await todo.save();
  } catch (error) {
    return next(error);
  }

  res.json({
    message: "Todo is fully updated!",
    updatedtodo: todo,
  });
}

module.exports = {
  getTodo: getTodo,
  addTodo: addTodo,
  deleteTodo: deleteTodo,
  updateTodo: updateTodo,
};
