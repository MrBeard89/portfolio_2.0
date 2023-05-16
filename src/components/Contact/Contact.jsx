import '../../styles/Contact/Contact.scss'

export const Contact = () => {
  return (
    <div className='contact-wrapper' id='contact'>
      <div className='contact-container'>
        <h1 className='contact-title'>Contact</h1>
        <p className='contact-text'>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as
          possible{' '}
        </p>
        <div className='contact-form-container'>
          <form className='contact-form' action='#' method='#'>
            <div className='contact-form-field'>
              <label className='contact-form-label' htmlFor='name'>
                Name
              </label>
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
              <label className='contact-form-label' htmlFor='email'>
                Email
              </label>
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
              <label className='contact-form-label' htmlFor='message'>
                Message
              </label>
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

            <button className='btn-submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
