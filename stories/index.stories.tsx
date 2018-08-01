import React from 'react'
import { storiesOf } from '@storybook/react'
import { Masthead } from 'components/LandingPage/Masthead'
import { Form } from 'components/Form'

storiesOf('Masthead', module).add('default', () => <Masthead />)

storiesOf('Form Component', module).add('default', () => <Form />)
