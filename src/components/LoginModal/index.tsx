import React from 'react'
import styled from 'styled-components'
import { Modal } from '../UI/Modal/index'
import { Input } from '../UI/Form/Input'
import { PrimaryButton } from '../UI/Buttons/index'

const Form = styled.div`
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
  <Modal title="Login" onClose={onClose}>
    <Form>
      <label>Username</label>
      <Input type="text" />
      <label>Password</label>
      <Input type="password" />
      <PrimaryButton>Log in</PrimaryButton>
    </Form>
  </Modal>
)
