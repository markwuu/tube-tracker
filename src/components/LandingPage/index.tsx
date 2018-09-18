import React from 'react'
import { MainLayout } from '../Layouts/Main'
import { Masthead } from './Masthead'
import { SearchForm } from '../SearchForm/index'
import styled from 'styled-components'

const SearchFormContainer = styled.div`
  margin-top: 20px;
`

export const LandingPage = () => (
  <MainLayout>
    <Masthead />
    <SearchFormContainer>
      <SearchForm />
    </SearchFormContainer>
  </MainLayout>
)
