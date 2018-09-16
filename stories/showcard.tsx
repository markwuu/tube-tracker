import React from 'react'
import { storiesOf } from '@storybook/react'
import { TVCard } from 'components/Card/index'

storiesOf('Card', module).add('default', () => (
  <TVCard
    background="https://placeimg.com/300/450/any"
    showName="Breaking Bad"
  />
))
