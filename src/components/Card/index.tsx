import React from 'react'
import styled from 'styled-components'
import { Colors } from 'common/colors'

interface Props {
  showName: string
  background: string
}

interface CardProps {
  background: string
}

const CardContainer = styled.div`
  align-items: center;
  border: 1px solid ${Colors.Gray200};
  border-radius: 2px;
  overflow: hidden;
  justify-content: center;
  width: 300px;
`

const Card = styled.div<CardProps>`
  background: url(${({ background }) => background}) no-repeat;
  background-size: cover;
  border-radius: 2px;
  height: 400px;
  display: flex;
  flex-direction: column;
`

const ShowName = styled.div`
  background: ${Colors.Black};
  color: ${Colors.White};
  opacity: 0.8;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  margin-top: auto;
`

export const TVCard: React.SFC<Props> = ({ background, showName }) => (
  <CardContainer>
    <Card background={background}>
      <ShowName>{showName}</ShowName>
    </Card>
  </CardContainer>
)
