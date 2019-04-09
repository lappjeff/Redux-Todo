import { ADD_TODO, TOGGLE_TODO } from '../actions'

let id = 0

const setId = () => {
  return id++
}

const initialState = [
    {
      value: 'Walk the dog',
      completed: false,
      id: setId()
    }
]

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case ADD_TODO:
      return [
          ...state,
          {
            value: action.payload,
            completed: false,
            id: setId()
          }

      ]
    case TOGGLE_TODO:

      let changedTodo = state.map(todo => (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo)

      return changedTodo


    default:
      return state;
  }
}

export default reducer
