import React from 'react'
import styled from 'styled-components'
import { Colors } from 'common/colors'

interface Props {
  onClose: () => void
  title: string
}

const UIModal = styled.div`
  background-color: ${Colors.White};
  border: solid 1px ${Colors.Gray200};
  box-shadow: 0 4px 5px -2px ${Colors.Gray200};
`

const Title = styled.div`
  background-color: ${Colors.LightBlue};
  color: ${Colors.White};
  display: flex;
  justify-content: space-between;
  padding: 5px;
`

const Content = styled.div`
  background-color: ${Colors.White};
  padding: 5px;
`

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${Colors.White};
  cursor: pointer;
  font-size: 20px;
  line-height: 20px;
`

export const Modal: React.SFC<Props> = ({ title, children, onClose }) => (
  <UIModal>
    <Title>
      {title}
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </Title>
    <Content>{children}</Content>
  </UIModal>
)
