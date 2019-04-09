import React from 'react'

import { ListContainer, ListItem } from './S_TodoList'
import { toggleTodo } from '../actions'

import { connect } from 'react-redux'

const TodoList = props => {
  return (
    <ListContainer>
      <h3>Todo's</h3>
      {props.todos.map((todo, index) => <ListItem key={index} onClick={() => props.toggleTodo(props.todos, index)}>{todo.value}</ListItem>)}
    </ListContainer>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo })(TodoList)
