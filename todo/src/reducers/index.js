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
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: action.payload
      }
    default:
      return state;
  }
}

export default reducer
