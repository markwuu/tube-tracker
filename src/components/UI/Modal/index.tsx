import React from 'react'
import styled from 'styled-components'
import { Colors } from 'common/colors'
import ReactDOM from 'react-dom'

interface Props {
  onClose: () => void
  title: string
}

const ModalContainer = styled.div`
  background-color: ${Colors.White};
  border-radius: 3px;
  box-shadow: 0 4px 5px -2px ${Colors.Black};
  overflow: hidden;
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
  padding: 10px;
`

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${Colors.White};
  cursor: pointer;
  font-size: 20px;
  line-height: 20px;
`

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  ${ModalContainer} {
    max-width: 500px;
    width: 40%;
  }
`

export const UIModal: React.SFC<Props> = ({ title, children, onClose }) => (
  <ModalContainer>
    <Title>
      {title}
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </Title>
    <Content>{children}</Content>
  </ModalContainer>
)

export class Modal extends React.Component<Props> {
  modalEl: HTMLElement
  constructor(props: Props) {
    super(props)
    this.modalEl = document.getElementById('modal') as HTMLElement
  }
  render() {
    const overlay = (
      <Overlay>
        <UIModal {...this.props} />
      </Overlay>
    )
    return ReactDOM.createPortal(overlay, this.modalEl)
  }
}
