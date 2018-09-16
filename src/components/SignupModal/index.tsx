import React from 'react'
import styled from 'styled-components'
import { Modal } from '../UI/Modal/index'
import { Input } from '../UI/Form/Input'
import { PrimaryButton } from '../UI/Buttons/index'
import { Subscribe } from 'unstated'
import { UserContainer } from 'state/user'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  ${Input} {
    margin-bottom: 10px;
  }
`
interface Props {
  onClose: () => void
}

export const SignupModal: React.SFC<Props> = ({ onClose }) => (
  <Subscribe to={[UserContainer]}>
    {(userContainer: UserContainer) => (
      <Modal title="Sign Up" onClose={onClose}>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            // tslint:disable-next-line
            userContainer.signup(form['email'].value, form['password'].value)
          }}
        >
          <label>Username</label>
          <Input name="email" type="text" required />
          <label>Password</label>
          <Input name="password" type="password" required />
          <PrimaryButton type="submit">Sign up</PrimaryButton>
        </Form>
      </Modal>
    )}
  </Subscribe>
)
