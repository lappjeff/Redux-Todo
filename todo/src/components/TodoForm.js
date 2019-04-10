import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import { FormContainer, Form } from './S_TodoForm'

const TodoForm = props => {

  const [value, setValue] = useState('')

  const submitTodo = e => {
    e.preventDefault();
    props.addTodo(value)

    setValue('')
  }

  return (
    <FormContainer>
      <Form onSubmit={submitTodo}>
        <input
          name='newTodo'
          value={value}
          type='text'
          placeholder='Enter New Todo'
          onChange={e => setValue(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </Form>
    </FormContainer>
  );
}

export default connect(null, { addTodo })(TodoForm)
