import styled from 'styled-components'
import { Colors } from 'common/colors'

export const Input = styled.input`
  border: 1px solid ${Colors.Gray200};
  border-radius: 3px;
  font-size: 10px;
  margin-top: 10px;
  padding: 10px;

  &::-webkit-input-placeholder {
    color: ${Colors.Gray300};
  }
`
