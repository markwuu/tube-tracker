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
  border: 2px solid ${Colors.Gray200};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
`

const Card = styled.div<CardProps>`
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 2px;
  height: 400px;
  padding: 1px;
  width: 300px;
`

const ShowName = styled.div`
  background: ${Colors.White};
  border-left: 2px solid ${Colors.Gray200};
  border-right: 2px solid ${Colors.Gray200};
  border-top: solid 1px ${Colors.Gray200};
  font-size: 20px;
  padding: 10px;
  text-align: center;
  width: 300px;
`

export const TVCard: React.SFC<Props> = ({ background, showName }) => (
  <CardContainer>
    <Card background={background} />
    <ShowName>{showName}</ShowName>
  </CardContainer>
)
