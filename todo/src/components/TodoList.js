import React from 'react'

import { ListContainer, ListItem } from './S_TodoList'
import { toggleTodo, removeTodo } from '../actions'

import { connect } from 'react-redux'

const TodoList = props => {
  return (
    <ListContainer>
      <h3>Todo's</h3>
      {props.todos.map(todo => {
          if (todo.completed === true) {
            return (
              <div key={todo.id}>
                <span onClick={() => props.removeTodo(todo.id)}>X</span>
                <ListItem  className='completed' onClick={() => props.toggleTodo(todo.id)}>{todo.value} </ListItem>
              </div>
            )

          } else {
            return (
              <div key={todo.id}>
                <span onClick={() => props.removeTodo(todo.id)}>X</span>
                <ListItem  onClick={() => props.toggleTodo(todo.id)}>{todo.value}</ListItem>
              </div>
            )
          }
        }
      )}
    </ListContainer>
  )
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { toggleTodo, removeTodo })(TodoList)
