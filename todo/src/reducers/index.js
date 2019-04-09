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
        todos: [
          ...state.todos,
          {
            value: action.payload,
            completed: false
          }
        ]
      }
    case TOGGLE_TODO:
      console.log(action.payload[action.id])
      return {
        todos: [
          ...state.todos
        ]
      }

    default:
      return state;
  }
}

export default reducer
