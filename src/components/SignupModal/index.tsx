import React from 'react'
import styled from 'styled-components'
import { Modal } from '../UI/Modal/index'
import { Input } from '../UI/Form/Input'
import { PrimaryButton } from '../UI/Buttons/index'

const FormComponent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;

  ${PrimaryButton} {
    margin: 10px;
  }
`
interface Props {
  onClose: () => void
}

export const SignupModal: React.SFC<Props> = ({ onClose }) => (
  <Modal title="Sign Up" onClose={onClose}>
    <FormComponent>
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <PrimaryButton>Sign up</PrimaryButton>
    </FormComponent>
  </Modal>
)
