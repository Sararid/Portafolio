import React from "react";
//styles
import "./Contact.scss";

function Contact() {
    return (
        <section className="contact">
            <h1 className="contact__title">Contact</h1>
            <p className="contact__description">
                Do you have a question or would you like to get in touch?
            </p>

            <form
                action="https://formspree.io/f/xqkwjgkn"
                method="POST"
                className="contact__form"
            >
                <label htmlFor="firstname" className="contact__form--title">
                    Name:
                </label>
                <input
                    className="contact__form--style"
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                />
                <label htmlFor="emailAddress" className="contact__form--title">
                    Email:
                </label>
                <input
                    className="contact__form--style"
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    required
                />
                <textarea
                    className="contact__form--text"
                    id="message"
                    name="message"
                ></textarea>
                <input className="contact__submit" type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;
