import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;