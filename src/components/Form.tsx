import React from 'react'
import { Button } from 'components/UI/Form/Button'
import { FormHeader } from 'components/UI/Form/FormHeader'

interface State {
  password: string
  name: string
}

export class Form extends React.Component<object, State> {
  state: State = {
    name: '',
    password: '',
  }

  render() {
    const { name, password } = this.state

    return (
      <div>
        <FormHeader>Create Account</FormHeader>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={name}
            placeholder="Username"
            size={30}
            onChange={(e) => this.handleNameChange(e)}
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            size={30}
            onChange={(e) => this.handlePasswordChange(e)}
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    )
  }

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value })
  }

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Connect to postgres database here
    event.preventDefault()
  }
}
