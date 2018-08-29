import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  PrimaryButton,
  SecondaryButton,
  AlertButton,
  InfoButton,
  WarningButton,
  SuccessButton,
} from 'components/UI/Buttons/index'

storiesOf('Buttons', module)
  .add('PrimaryButton', () => <PrimaryButton>Primary button</PrimaryButton>)
  .add('SecondaryButton', () => (
    <SecondaryButton>Secondary button</SecondaryButton>
  ))
  .add('AlertButton', () => <AlertButton>Alert button</AlertButton>)
  .add('InfoButton', () => <InfoButton>Info button</InfoButton>)
  .add('SuccessButton', () => <SuccessButton>Success button</SuccessButton>)
  .add('WarningButton', () => <WarningButton>Warning button</WarningButton>)
