import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's talk about your product"
        intro="Contract, full-time or a one-off build — tell me what you are making and what is getting in the way."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
