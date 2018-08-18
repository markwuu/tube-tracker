import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from 'common/colors'
import { Container } from '../../Container'
import { SuccessButton, PrimaryButton } from '../../UI/Buttons/index'

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
  a {
    margin-left: 10px;
  }
`

// This is a hack because of a limitation with styled-components
// TODO: Fix this after upgrading to 4.0
const SignupLink = SuccessButton.withComponent(Link as any) as any
const LoginLink = PrimaryButton.withComponent(Link as any) as any

export const Navbar = () => (
  <Container>
    <UINavbar>
      <Brand>TubeTracker</Brand>
      <NavLinks>
        <SignupLink to="/signup">Sign up</SignupLink>
        <LoginLink to="/login">Log in</LoginLink>
      </NavLinks>
    </UINavbar>
  </Container>
)
