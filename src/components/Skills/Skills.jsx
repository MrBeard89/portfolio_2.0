import '../../styles/Skills/Skills.scss'

export const Skills = () => {
  return (
    <div className='skills-wrapper' id='skills'>
      {/* Main container */}

      <div className='skills-container'>
        {/* Text wrapper */}

        <div className='skills-text-container'>
          {/* Title */}
          <h1 className='skills-title'>Skills</h1>

          {/*Text container  */}
          {/* highlighted-text - represents the bold red text */}

          <p className='skills-text'>
            Web development for me, is passion.I like{' '}
            <span className='highlighted-text'>creating</span> sites, user environments, and overall{' '}
            <span className='highlighted-text'>designing</span> the page, however i'm not a
            webdesigner. My future plans are, learning Python , and assign somewhere to be a{' '}
            <span className='highlighted-text'>Webdesigner</span> also. Little{' '}
            <span className='highlighted-text'>Photoshopping ,MS Office</span> knowledge , Fast
            typing.I'm improving myself, and doing projects every day!
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
            <h3 className='lang-skills-title'>Language Skills</h3>
            <p>English</p>
            <ul className='skills-bar-container'>
              {/* Writing progress bar*/}

              <li>
                <div className='progressbar-title'>
                  <h3>Writing</h3>
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
                  <h3>Understanding</h3>
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
                  <h3>Speaking</h3>
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
