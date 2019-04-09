const ADD_TODO = 'ADD_TODO'
const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

const TOGGLE_TODO = 'TOGGLE_TODO'
const toggleTodo =  id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

const REMOVE_TODO = 'REMOVE_TODO'
const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}
export {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  addTodo,
  toggleTodo,
  removeTodo
}
