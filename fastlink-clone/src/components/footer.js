import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="section">
                    <h3>About us</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                {/* Repeat similar sections */}
            </div>
            <div className="contact-info">
                <p>Mobile numbers: +123456789, +987654321</p>
                <p>Email: support@example.com</p>
            </div>
        </footer>
    );
};

export default footer;
