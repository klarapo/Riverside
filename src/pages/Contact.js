import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import Location from '../components/Location';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <React.Fragment>
            <Hero hero="contactHero">
                <Banner title="Contact us" subtitle="Want to book a room or have any questions about them? Write us."></Banner>
            </Hero>
            <ContactForm />
            <Location />
            <Footer />
        </React.Fragment>
            
        
    )
    
}

export default Contact