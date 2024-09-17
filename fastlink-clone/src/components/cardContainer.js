import React from 'react';
import Card from './card';
import './cardContainer.css';

const CardContainer = () => {
    const plans = [
        { title: 'Fast Link Bronze', speed: 5 },
        { title: 'Fast Link Silver', speed: 10 },
        { title: 'Fast Link Gold', speed: 20 },
        { title: 'Fast Link Emerald', speed: 30 },
        { title: 'Fast Link Diamond', speed: 40 },
        { title: 'Fast Link GemStone', speed: 50 },
    ];

    return (
        <div className="card-container">
            {plans.map((plan, index) => (
                <Card key={index} title={plan.title} speed={plan.speed} />
            ))}
        </div>
    );
};

export default CardContainer;
