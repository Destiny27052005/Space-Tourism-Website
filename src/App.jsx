import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import Space from './components/Space'
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import React from 'react';



function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />

          <Routes>
            <Route path="/" element={<Space />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
