import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors, lightenColor } from 'common/colors'
import { Container } from '../../Container'

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

const NavLinks = styled.nav``

const NavLink = styled(Link)`
  color: ${Colors.White};
  border-radius: 5px;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
`

const SignupLink = NavLink.extend`
  background-color: ${Colors.Purple};
  &:focus,
  &:hover {
    background-color: ${lightenColor(Colors.Purple, 0.2)};
  }
`

const LoginLink = NavLink.extend`
  background-color: ${Colors.Blue};
  &:focus,
  &:hover {
    background-color: ${lightenColor(Colors.Blue, 0.2)};
  }
`
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
