const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const addTodo = todo => {
  console.log('addTodo', todo)
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export { ADD_TODO, TOGGLE_TODO, addTodo }
