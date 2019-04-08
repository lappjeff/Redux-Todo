import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import { FormContainer, Form } from './S_TodoForm'

const TodoForm = props => {

  const [newTodo, setNewTodo] = useState('')

  const handleChanges = e => {
    setNewTodo(e.target.value)
  }
  
  return (
    <FormContainer>
      <Form>
        <input
          name='newTodo'
          value={newTodo}
          type='text'
          placeholder='Enter New Todo'
          onChange={(e) => handleChanges(e)}
        />
        <button type='submit'>Add Todo</button>
      </Form>
    </FormContainer>
  );
}

export default TodoForm
