// pages/contact.tsx
"use client";
import React from "react";
import Banner from "../components/banner/Banner";
import AnimatedText from "../components/animatedTexts/AnimatedText";
import ContactForm from "../components/contactform/ContactForm";
const ContactPage = () => {
  return (
    <div>
      <Banner backgroundImage="/pexels-tiana-2956376.jpg">
        <div style={{ marginTop: "15rem" }}>
          <AnimatedText text="CONTACT US" />
        </div>
      </Banner>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
