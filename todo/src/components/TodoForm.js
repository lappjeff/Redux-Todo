import React from 'react'

import { FormContainer, Form } from './S_TodoForm'
export default class TodoForm extends React.Component {
  render() {
    return (
      <FormContainer>
        <Form>
          <input type='text' placeholder='Enter New Todo'/>
          <button type='submit'>Add Todo</button>
        </Form>
      </FormContainer>
    );
  }
}
