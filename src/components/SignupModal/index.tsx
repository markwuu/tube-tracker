import React from 'react'
import { Modal } from '../UI/Modal/index'

interface Props {
  onClose: () => void
}

export const SignupModal: React.SFC<Props> = ({ onClose }) => (
  <Modal title="Sign Up" onClose={onClose}>
    Sign up form goes here.
  </Modal>
)
