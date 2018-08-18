import styled from 'styled-components'
import { Colors, darkenColor } from '../../../common/colors'

const Button = styled.button`
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  padding: 10px 20px;
  text-decoration: none;
  text-transform: uppercase;
`

export const PrimaryButton = Button.extend`
  background-color: ${Colors.LightBlue};
  color: ${Colors.White};

  &:hover,
  &:focus {
    background-color: ${darkenColor(Colors.LightBlue, 0.1)};
  }
`

export const SecondaryButton = Button.extend`
  background-color: ${Colors.White};
  border: 1px solid ${Colors.DarkBlue};
  color: ${Colors.DarkBlue};

  &:hover,
  &:focus {
    box-shadow: inset 0 -2px 0 ${Colors.DarkBlue};
  }
`

export const AlertButton = Button.extend`
  background-color: ${Colors.Red};
  color: ${Colors.White};

  &:hover,
  &:focus {
    background-color: ${darkenColor(Colors.Red, 0.1)};
  }
`

export const InfoButton = Button.extend`
  background-color: ${Colors.Purple};
  color: ${Colors.White};

  &:hover,
  &:focus {
    background-color: ${darkenColor(Colors.Purple, 0.1)};
  }
`

export const SuccessButton = Button.extend`
  background-color: ${Colors.Green};
  color: ${Colors.White};

  &:hover,
  &:focus {
    background-color: ${darkenColor(Colors.Green, 0.1)};
  }
`

export const WarningButton = Button.extend`
  background-color: ${Colors.Pink};
  color: ${Colors.White};

  &:hover,
  &:focus {
    background-color: ${darkenColor(Colors.Pink, 0.1)};
  }
`
