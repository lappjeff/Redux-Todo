import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
  todos: [
    {
      value: 'Walk the dog',
      completed: false
    }
  ]
}

const reducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    default:
      return state;
  }
}

export default reducer
