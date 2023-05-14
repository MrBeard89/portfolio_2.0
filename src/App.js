import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
