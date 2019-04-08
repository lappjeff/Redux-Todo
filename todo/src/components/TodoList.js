import React from 'react'

import { ListContainer, ListItem } from './S_TodoList'

import { connect } from 'react-redux'

const TodoList = props => {
  return (
    <ListContainer>
      <h3>Todo's</h3>
      {props.todos.map((todo, index) => <ListItem key={index}>{todo.value}</ListItem>)}
    </ListContainer>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {})(TodoList)
