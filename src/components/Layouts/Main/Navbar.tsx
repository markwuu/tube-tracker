import React from 'react'
import styled from 'styled-components'
import { Colors } from 'common/colors'
import { Container } from '../../Container'
import { SuccessButton, PrimaryButton } from '../../UI/Buttons/index'
import { SignupModal } from '../../SignupModal/index'
import { LoginModal } from '../../LoginModal/index'

const UINavbar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const Brand = styled.h1`
  color: ${Colors.Black};
  font-size: 26px;
  margin: 0;
`

const NavLinks = styled.nav`
  ${PrimaryButton}, ${SuccessButton} {
    margin-left: 10px;
  }
`

interface State {
  signupModalOpened: boolean
  loginModalOpened: boolean
}
export class Navbar extends React.Component<object, State> {
  state = {
    loginModalOpened: false,
    signupModalOpened: false,
  }
  render() {
    const { signupModalOpened, loginModalOpened } = this.state

    return (
      <Container>
        <UINavbar>
          <Brand>TubeTracker</Brand>
          <NavLinks>
            <SuccessButton onClick={this.showSignupModal}>
              Sign up
            </SuccessButton>
            <PrimaryButton onClick={this.showLoginModal}>Log in</PrimaryButton>
          </NavLinks>
        </UINavbar>
        {signupModalOpened && <SignupModal onClose={this.hideSignupModal} />}
        {loginModalOpened && <LoginModal onClose={this.hideLoginModal} />}
      </Container>
    )
  }

  showLoginModal = () => {
    this.setState({
      loginModalOpened: true,
    })
  }

  hideLoginModal = () => {
    this.setState({
      loginModalOpened: false,
    })
  }

  showSignupModal = () => {
    this.setState({
      signupModalOpened: true,
    })
  }

  hideSignupModal = () => {
    this.setState({
      signupModalOpened: false,
    })
  }
}
