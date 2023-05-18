import './App.scss'
import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { LanguageContext, LanguageContextDefaults } from './context/LanguageContext'
import { Themecontext } from './context/Themecontext'

import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [language, setLanguage] = useState(LanguageContextDefaults.value)

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const toggleLanguage = () => {
    language === 'hu' ? setLanguage('en') : setLanguage('hu')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      <div className={`App ${theme}`}>
        <Themecontext.Provider value={{ theme, setTheme, localStorage, toggleTheme }}>
          <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </Router>
        </Themecontext.Provider>
      </div>
    </LanguageContext.Provider>
  )
}

export default App
