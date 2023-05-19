import '../../styles/Contact/Contact.scss'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

//import library
const i18n = require('../../utils/i18n')
export const Contact = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className='contact-wrapper' id='contact'>
      {/*  Main container */}

      <div className='contact-container'>
        {/* Main title */}

        <h1 className='contact-title'>{i18n.text(language, i18n.MAP.contact_title)}</h1>

        {/*Contact Outro text */}

        <p className='contact-text'>{i18n.text(language, i18n.MAP.contact_info)} </p>

        {/* Main form container */}

        <div className='contact-form-container'>
          {/* Actual form */}
          {/* Validation is done by pure html :valid,:invalid,:required,and :focus pseudo classes via css/html*/}

          <form className='contact-form' action='#' method='#'>
            {/* Each div is a form field */}

            <div className='contact-form-field'>
              {/* Label for Name */}
              <label className='contact-form-label' htmlFor='name'>
                {i18n.text(language, i18n.MAP.contact_input_name)}
              </label>

              {/* Input - Name */}

              <input
                className='contact-form-input'
                type='text'
                name='name'
                placeholder={i18n.text(language, i18n.MAP.contact_input_name_placeholder)}
                pattern='^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$'
                required
              />
              {language === 'hu' ? <span className='hu'></span> : <span className='en'></span>}
            </div>

            <div className='contact-form-field'>
              {/* Label for Email */}

              <label className='contact-form-label' htmlFor='email'>
                {i18n.text(language, i18n.MAP.contact_input_email)}
              </label>

              {/* Input - Email */}

              <input
                className='contact-form-email'
                type='email'
                name='email'
                placeholder={i18n.text(language, i18n.MAP.contact_input_email_placeholder)}
                required
                minLength='1'
              />
              {language === 'hu' ? <span className='hu'></span> : <span className='en'></span>}
            </div>

            <div className='contact-form-field'>
              {/* Label for Message */}

              <label className='contact-form-label' htmlFor='message'>
                {i18n.text(language, i18n.MAP.contact_input_textarea)}
              </label>

              {/* Textarea */}

              <textarea
                className='contact-form-textarea'
                cols='30'
                rows='10'
                type='text'
                name='message'
                placeholder={i18n.text(language, i18n.MAP.contact_input_textarea_placeholder)}
                required
                autoComplete='none'
                minLength='10'
              />
              {language === 'hu' ? <span className='hu'></span> : <span className='en'></span>}
            </div>

            {/* Submit button - no action,no method , just snaps at top of the page */}

            <div className='submit-btn-container'>
              <button className='btn-submit' type='submit'>
                {i18n.text(language, i18n.MAP.contact_submit)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
