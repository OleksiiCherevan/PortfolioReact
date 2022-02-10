import "./style.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    setName,
    setEmail,
    setPhone,
    setMessage,
    setIsSendedMessage,
} from "../../store/contactSlice";

import TextBox from "../../Atoms/TextBox";
import TextArea from "../../Atoms/TextArea";

import emailjs from "emailjs-com";

const userKey = process.env.REACT_APP_EMAIL_USER_KEY;
emailjs.init(userKey);

const serviceKey = process.env.REACT_APP_EMAIL_SERVICE_KEY;
const templateKey = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;

const ContactForm = () => {
    const contactForm = useSelector((state) => state.contact);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(contactForm);
    }, [contactForm]);

    const sendMessage = async () => {
        await emailjs.send(serviceKey, templateKey, contactForm).then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                console.log("FAILED...", error);
            }
        );
    };

    const onChangeName = (value) => {
        dispatch(setName({ name: value }));
    };

    const onChangeEmail = (value) => {
        dispatch(setEmail({ email: value }));
    };

    const onChangePhone = (value) => {
        dispatch(setPhone({ phone: value }));
    };

    const onChangeMessage = (value) => {
        dispatch(setMessage({ message: value }));
    };

    const onHadleSubmit = async (event) => {
        if (
            contactForm.name !== "" &&
            (contactForm.email !== "" || contactForm.phone !== "") &&
            contactForm.message !== ""
        ) {
            await sendMessage();

            window.location.replace("/success");
        }
    };

    return (
        <div className="contact-form">
            <div className="contact-form-fields">
                <TextBox
                    pattern={"Your name: *"}
                    inputHelp={"Place for your name =)"}
                    onChange={onChangeName}
                ></TextBox>
                <TextBox
                    pattern={"Your email: *"}
                    regex={/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/}
                    inputHelp={"Invalid email"}
                    onChange={onChangeEmail}
                ></TextBox>
                <TextBox
                    pattern={"Your phone number: *"}
                    regex={
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                    }
                    inputHelp={"Invalid phone number"}
                    onChange={onChangePhone}
                ></TextBox>
                <TextArea
                    pattern={"Your message: *"}
                    inputHelp={"I`m waiting for 0/1 letters"}
                    onChange={onChangeMessage}
                ></TextArea>
            </div>

            <button
                className="contact-form__submit"
                type="button"
                onClick={() => {
                    onHadleSubmit();
                }}
            >
                Submit
            </button>
        </div>
    );
};

export default ContactForm;
