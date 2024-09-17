import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main>
            <div className="main-image"></div>
            <div className="main-text">
                <h1><span className="fast">Fast</span><span className="link">Link</span>.<span className="net">Net</span></h1>
                <p>Leased line service offering an advanced & rich ethernet platform for wide area network...</p>
                <button className="subscribe-button">View Packages</button>
            </div>
        </main>
    );
};

export default Main;
