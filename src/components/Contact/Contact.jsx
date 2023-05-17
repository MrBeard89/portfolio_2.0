import '../../styles/Contact/Contact.scss'

export const Contact = () => {
  return (
    <div className='contact-wrapper' id='contact'>
      {/*  Main container */}

      <div className='contact-container'>
        {/* Main title */}

        <h1 className='contact-title'>Contact</h1>

        {/*Contact Outro text */}

        <p className='contact-text'>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as
          possible{' '}
        </p>

        {/* Main form container */}

        <div className='contact-form-container'>
          {/* Actual form */}
          {/* Validation is done by pure html :valid,:invalid,:required,and :focus pseudo classes via css/html*/}

          <form className='contact-form' action='#' method='#'>
            {/* Each div is a form field */}

            <div className='contact-form-field'>
              {/* Label for Name */}
              <label className='contact-form-label' htmlFor='name'>
                Name
              </label>

              {/* Input - Name */}

              <input
                className='contact-form-input'
                type='text'
                name='name'
                placeholder='Enter Your Name'
                pattern='[a-zA-Z]+'
                required
              />
              <span></span>
            </div>

            <div className='contact-form-field'>
              {/* Label for Email */}

              <label className='contact-form-label' htmlFor='email'>
                Email
              </label>

              {/* Input - Email */}

              <input
                className='contact-form-email'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
                minLength='1'
              />
              <span></span>
            </div>

            <div className='contact-form-field'>
              {/* Label for Message */}

              <label className='contact-form-label' htmlFor='message'>
                Message
              </label>

              {/* Textarea */}

              <textarea
                className='contact-form-textarea'
                cols='30'
                rows='10'
                type='text'
                name='message'
                placeholder='Enter Your Message'
                required
                autoComplete='none'
                minLength='10'
              />
              <span></span>
            </div>

            {/* Submit button - no action,no method , just snaps at top of the page */}

            <button className='btn-submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
