import "./style.scss";

import ContactForm from "../../Molecules/ContactForm";

import ContactPhoto from './../../assets/img/user/contact-photo.jpg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__label">Contact me</div>

            <div className="contact__info">

                <img className="contact__image" src={ContactPhoto} />

                <div className="contact__form">
                    <div className="contact__description">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit.
                    </div>

                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
