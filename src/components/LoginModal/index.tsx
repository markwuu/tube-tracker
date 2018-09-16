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

export const LoginModal: React.SFC<Props> = ({ onClose }) => (
  <Subscribe to={[UserContainer]}>
    {(userContainer: UserContainer) => (
      <Modal title="Login" onClose={onClose}>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            // tslint:disable-next-line
            userContainer.login(form['email'].value, form['password'].value)
          }}
        >
          <label>Email</label>
          <Input name="email" type="text" required />
          <label>Password</label>
          <Input name="password" type="password" required />
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </Form>
      </Modal>
    )}
  </Subscribe>
)
