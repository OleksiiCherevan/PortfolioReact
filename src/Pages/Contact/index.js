import './style.scss'

import ContactForm from '../../Molecules/ContactForm'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__label'>
                Contact me
            </div>
            <div className='contact-body'>
                <div className='contact-body__description'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>

                <div className='contact-body_form'>
                        <ContactForm/>
                </div>

            </div>
        </div>
    )
}

export default Contact