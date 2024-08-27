import "./App.css"
import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

function App() {
  const navigate = useNavigate()

  return (
    // using Router with Link
    // <Router>
    //   <div>
    //     <Link to={'/profile'}>Profile</Link>
    //     <Link to={'/about'}>About</Link>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/profile" element={<Profile />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </div>
    // </Router>

    //using Router with Button
    <div>
      <button onClick={() => (navigate('/profile'))}>Profile</button>
      <button onClick={() => (navigate('/about'))}>About</button>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App