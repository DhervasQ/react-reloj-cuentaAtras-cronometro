
import './App.css';
import React from 'react'
import DigitalClock from './components/DigitalClock'
import Countdown from './components/Countdown'
import Stopwatch from './components/Stopwatch'

const App = () => {
  return (
    <div>
      <DigitalClock></DigitalClock> <Countdown></Countdown> <Stopwatch></Stopwatch>
    </div>
    
  )
}

export default App



