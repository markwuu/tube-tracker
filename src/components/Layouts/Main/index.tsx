import React from 'react'
import { Navbar } from './Navbar'

export const MainLayout: React.SFC = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)
