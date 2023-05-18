import '../../styles/Skills/Skills.scss'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

//Import Language Library
const i18n = require('../../utils/i18n')

export const Skills = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className='skills-wrapper' id='skills'>
      {/* Main container */}

      <div className='skills-container'>
        {/* Text wrapper */}

        <div className='skills-text-container'>
          {/* Title */}
          <h1 className='skills-title'>{i18n.text(language, i18n.MAP.skills_title)}</h1>

          {/*Text container  */}
          {/* highlighted-text - represents the bold red text */}

          <p className='skills-text'>
            {i18n.text(language, i18n.MAP.skills_text_1)}
            {i18n.text(language, i18n.MAP.skills_text_2)}{' '}
            <span className='highlighted-text'>{i18n.text(language, i18n.MAP.skills_python)}</span>
            {i18n.text(language, i18n.MAP.skills_text_3)}
            <span className='highlighted-text'>
              {i18n.text(language, i18n.MAP.skills_webdesigner)}
            </span>
            {i18n.text(language, i18n.MAP.skills_text_4)}
            {i18n.text(language, i18n.MAP.skills_little)}{' '}
            <span className='highlighted-text'>
              {i18n.text(language, i18n.MAP.skills_photoshop)}{' '}
              {i18n.text(language, i18n.MAP.skills_msoffice)}
            </span>{' '}
            {i18n.text(language, i18n.MAP.skills_text_5)}
          </p>
        </div>

        <div className='skills-bars-wrapper'>
          {/* The skills with progress bar */}

          <ul className='skills-bar-container'>
            {/* Html progress bar */}

            <li>
              <div className='progressbar-title'>
                <h3>HTML5</h3>
                <span className='percent' id='html-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progressred' id='progress-html'></span>
              </div>
            </li>

            {/* CSS3 / SASS progress bar */}

            <li>
              <div className='progressbar-title'>
                <h3>CSS3 / SASS</h3>
                <span className='percent' id='css-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progressblue' id='progress-css'></span>
              </div>
            </li>

            {/* JavaScript progress bar*/}

            <li>
              <div className='progressbar-title'>
                <h3>JavaScript</h3>
                <span className='percent' id='javascript-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progresspurple' id='progress-javascript'></span>
              </div>
            </li>

            {/* ReactJs progress bar*/}

            <li>
              <div className='progressbar-title'>
                <h3>ReactJs</h3>
                <span className='percent' id='react-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progressorange' id='progress-react'></span>
              </div>
            </li>

            {/* Git, Github progress bar*/}

            <li>
              <div className='progressbar-title'>
                <h3>Git, Github</h3>
                <span className='percent' id='git-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progressgreen' id='progress-git'></span>
              </div>
            </li>

            {/* Responsive Design progress bar*/}

            <li>
              <div className='progressbar-title'>
                <h3>Responsive Design</h3>
                <span className='percent' id='responsive-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progressyellow' id='progress-responsive'></span>
              </div>
            </li>

            {/* NodeJs / ExpressJs progress bar*/}

            <li>
              <div className='progressbar-title'>
                <h3>NodeJs / ExpressJs</h3>
                <span className='percent' id='node-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progressgray' id='progress-node'></span>
              </div>
            </li>

            {/* SQL / Firesbase progress bar*/}

            <li>
              <div className='progressbar-title'>
                <h3>SQL / Firesbase</h3>
                <span className='percent' id='sql-pourcent'></span>
              </div>
              {/* Bar container */}
              <div className='bar-container'>
                <span className='progressbar progresswhitegray' id='progress-sql'></span>
              </div>
            </li>
          </ul>

          {/*Language Skills section*/}

          <div className='lang-skills'>
            <h3 className='lang-skills-title'>{i18n.text(language, i18n.MAP.skills_lang_title)}</h3>
            <p>{i18n.text(language, i18n.MAP.skills_lang)}</p>
            <ul className='skills-bar-container'>
              {/* Writing progress bar*/}

              <li>
                <div className='progressbar-title'>
                  <h3>{i18n.text(language, i18n.MAP.skills_lang_writing)}</h3>
                  <span className='percent' id='writing-pourcent'></span>
                </div>
                {/* Bar container */}
                <div className='bar-container'>
                  <span className='progressbar progresspink' id='progress-writing'></span>
                </div>
              </li>

              {/* Understanding progress bar*/}

              <li>
                <div className='progressbar-title'>
                  <h3>{i18n.text(language, i18n.MAP.skills_lang_understand)}</h3>
                  <span className='percent' id='understanding-pourcent'></span>
                </div>
                {/* Bar container */}
                <div className='bar-container'>
                  <span className='progressbar progresswhite' id='progress-understanding'></span>
                </div>
              </li>

              {/* Speaking progress bar*/}

              <li>
                <div className='progressbar-title'>
                  <h3>{i18n.text(language, i18n.MAP.skills_lang_speak)}</h3>
                  <span className='percent' id='speaking-pourcent'></span>
                </div>
                {/* Bar container */}
                <div className='bar-container'>
                  <span className='progressbar progressdarkorange' id='progress-speaking'></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
