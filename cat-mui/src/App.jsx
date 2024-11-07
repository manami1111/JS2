import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Typography } from '@mui/material'
import { Cat } from './component/Cat'

export const App = () => {
  return (
    <>
    <Container>
      <Typography>猫の画像</Typography>
      <Cat />
    </Container>
    </>
  )
}