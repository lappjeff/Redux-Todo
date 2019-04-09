const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

const toggleTodo = (todos, id) => {
  return {
    type: TOGGLE_TODO,
    payload: todos, id
  }
}

export { ADD_TODO, TOGGLE_TODO, addTodo, toggleTodo }
