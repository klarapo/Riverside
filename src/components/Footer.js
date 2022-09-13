import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className='footer-container'>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/contact'>Contact</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <a href="https://www.instagram.com/river.sidecottage/" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/Riverside-Cottage-102327212637208" target="_blank" rel="noreferrer">
                            Facebook
                            </a>
                        </div>
                    </div>
                </div>
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='social-icons'>
                            <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                            >
                            <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <i class='fab fa-instagram' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    )
}

export default Footer
