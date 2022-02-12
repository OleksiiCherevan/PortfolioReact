import "./style.scss";

import ContactForm from "../../Molecules/ContactForm/index";

import { getContact } from "../../assets/js/data";

const Contact = (props) => {
    const { userPhoto, description } = getContact();

    return (
        <div className="contact">
            <div className="contact__label">Contact me</div>

            <div className="contact__info">
                <img className="contact__image" src={userPhoto} />

                <div className="contact__form">
                    <div className="contact__description">{description}</div>

                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
