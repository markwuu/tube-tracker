import React from 'react'
import { storiesOf } from '@storybook/react'
import { UIModal } from 'components/UI/Modal/index'
import { action } from '@storybook/addon-actions'

storiesOf('Modal', module).add('default', () => (
  <UIModal title="Sign Up Form" onClose={action('Close Button Clicked')}>
    These are the <em>contents</em> of the modal.
  </UIModal>
))
