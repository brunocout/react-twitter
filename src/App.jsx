import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css'
import { ContextProvider } from './context/Datareq'

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes />
      </Router>
    </ContextProvider>
  )
}

export default App
