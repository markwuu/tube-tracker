import React from 'react'
import { Button } from 'components/UI/Form/Button'
import { Container } from './Container'
import styled from 'styled-components'
import { Colors } from 'common/colors'

const Box = styled.div`
  background-color: ${Colors.LightGray};
  padding: 20px;
  text-align: center;
`

const Header = styled.div`
  background-color: ${Colors.LightBlue};
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: 1px;
  padding-bottom: 15px;
  padding-top: 15px;
  text-align: center;
`

const Input = styled.input`
  border: none;
  border: solid 1px ${Colors.White};
  border-radius: 3px;
  font-family: Roboto;
  font-size: 10px;
  margin-top: 10px;
  padding: 10px;

  &::-webkit-input-placeholder {
    color: ${Colors.LighterGray};
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
                placeholder="username"
                size={30}
                onChange={(e) => this.handleNameChange(e)}
              />
            </Box>
            <Box>
              <Input
                type="password"
                value={password}
                placeholder="password"
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
