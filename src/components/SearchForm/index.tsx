import React from 'react'
import styled from 'styled-components'
import { Input } from '../UI/Form/Input'
import { PrimaryButton } from '../UI/Buttons/index'
import magnifier from '../../magnifier.svg'
import { Colors } from 'common/colors'

interface SearchProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = styled.form`
  display: flex;
  justify-content: center;
`

const SearchInput = Input.extend`
  border-bottom-right-radius: 0;
  border-right: 0;
  border-top-right-radius: 0;
  font-size: 35px;
  height: 55px;
`

const SearchButton = PrimaryButton.extend`
  background: url(${magnifier}) no-repeat center;
  background-color: ${Colors.LightBlue};
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  font-size: 20px;
`

export const SearchForm: React.SFC<SearchProps> = (props) => (
  <Form {...props}>
    <SearchInput type="text" name="query" />
    <SearchButton />
  </Form>
)
