import React from 'react'
import { storiesOf } from '@storybook/react'
import { Masthead } from 'components/LandingPage/Masthead'
import { Form } from 'components/Form'

storiesOf('Masthead', module).add('default', () => <Masthead />)

storiesOf('Form', module).add('default', () => <Form />)
