import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from 'components/UI/Modal/index'
import { action } from '@storybook/addon-actions'

storiesOf('Modal', module).add('default', () => (
  <Modal title="Sign Up Form" onClose={action('Close Button Clicked')}>
    These are the <em>contents</em> of the modal.
  </Modal>
))
