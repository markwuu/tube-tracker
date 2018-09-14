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
  justify-content: center;
  overflow: hidden;
  width: 300px;
`

const Card = styled.div<CardProps>`
  background: url(${({ background }) => background}) no-repeat;
  background-size: cover;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 400px;
`

const ShowName = styled.div`
  // background: ${Colors.Black};
  background-color: rgba(0,0,0,0.8);
  color: ${Colors.White};
  font-size: 20px;
  margin-top: auto;
  // opacity: 0.8;
  padding: 10px;
  text-align: center;
`

export const TVCard: React.SFC<Props> = ({ background, showName }) => (
  <CardContainer>
    <Card background={background}>
      <ShowName>{showName}</ShowName>
    </Card>
  </CardContainer>
)
