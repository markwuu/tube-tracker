import React from 'react'
import { Modal } from '../UI/Modal/index'

interface Props {
  onClose: () => void
}

export const LoginModal: React.SFC<Props> = ({ onClose }) => (
  <Modal title="Login" onClose={onClose}>
    Login goes here
  </Modal>
)
