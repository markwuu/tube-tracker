import React from 'react'
import styled from 'styled-components'
import { Colors } from 'common/colors'

const UIMasthead = styled.div`
  align-items: center;
  background-color: ${Colors.Gray100};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
`

const Heading = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Subheading = styled.p`
  font-size: 24px;
`

export const Masthead = () => (
  <UIMasthead>
    <Heading>Too many TV shows to track?</Heading>
    <Subheading>We can help you with that.</Subheading>
  </UIMasthead>
)
