import React, { useState } from "react";
import Styles from "./ContactForm.module.scss";
import { text } from "stream/consumers";
interface FormData {
  username: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    // Perform your submission logic here

    setLoading(false);
    setIsFormSubmitted(true);
  };

  return (
    <div className={Styles.contact__container}>
      <>
        <h2 className="head-text">Take a coffee & chat with me</h2>
        {!isFormSubmitted ? (
          <div className={Styles.contact_form}>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className={Styles.app__flex}>
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </>
    </div>
  );
};

export default ContactForm;
