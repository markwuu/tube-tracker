import React from 'react'
import { storiesOf } from '@storybook/react'
import { Masthead } from 'components/LandingPage/Masthead'
import { Input } from 'components/UI/Form/Input'

storiesOf('Masthead', module).add('default', () => <Masthead />)

storiesOf('Input', module).add('default', () => <Input />)
