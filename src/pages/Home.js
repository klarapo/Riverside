import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Activities from '../components/Activities';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Welcome to Riverside Cottage" subtitle="A perfect place to calm the mind and explore the nature around.">
                <Link to="/rooms" className="btn-primary">
                    Rooms
                </Link>
            </Banner>
        </Hero>
        <Activities />
        <Hero hero="reviewHero">
            <Banner title="We value your experiences" subtitle="Hope you'll find it a pleasing stay as they did."></Banner>
        </Hero>
        <Reviews />
        <FeaturedRooms />
        <Footer />
        </>

    );
}
