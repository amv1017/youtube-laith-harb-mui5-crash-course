import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchAppBar from './components/AppBar'
import Home from './pages/Home'
import Tour from './pages/Tour'
import './App.css'

function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </Router>
  )
}

export default App
