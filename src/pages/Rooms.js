import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Room from '../components/Room';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return (
        <React.Fragment>
            <Hero hero="roomsHero">
                <Banner title="Our rooms"></Banner>
            </Hero>
            <Room />
            <Footer />
        </React.Fragment>
        
    )
    
    
    
}

export default Rooms