import React from 'react';
//import './card.css';

const Card = ({ title, speed }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{speed} Mbps</p>
            <button>Subscribe</button>
        </div>
    );
};

export default Card;
