import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { LanguageContext, LanguageContextDefaults } from './context/LanguageContext'
import { useState } from 'react'
function App() {
  const [language, setLanguage] = useState(LanguageContextDefaults.value)

  const toggleLanguage = () => {
    language === 'hu' ? setLanguage('en') : setLanguage('hu')
  }
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </LanguageContext.Provider>
  )
}

export default App
