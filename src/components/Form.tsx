import React from 'react'
import { Button } from 'components/UI/Form/Button'
import { Container } from './Container'
import styled from 'styled-components'

const Box = styled.div`
  padding: 20px;
  text-align: center;
`

const Header = styled.div`
  background-color: #61bcf6;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
  padding-bottom: 15px;
  padding-top: 15px;
  text-align: center;
`

const Input = styled.input`
  border: 3px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  padding: 7px;
  -webkit-transition: 0.5s;

  &:focus {
    border: 3px solid #555;
  }
`

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
        <Container>
          <Header>Create An Account</Header>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <Box>
              <Input
                type="text"
                value={name}
                placeholder="Username"
                size={30}
                onChange={(e) => this.handleNameChange(e)}
              />
            </Box>
            <Box>
              <Input
                type="password"
                value={password}
                placeholder="Password"
                size={30}
                onChange={(e) => this.handlePasswordChange(e)}
              />
            </Box>
            <Box>
              <Button type="submit">SIGN UP</Button>
            </Box>
          </form>
        </Container>
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
