import React from 'react'
import TourCard from './components/TourCard'
import './App.css'
import {
  Container,
  Grid,
} from '@mui/material'

function App() {
  return (
    <div className='App'>
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  )
}

export default App
