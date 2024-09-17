import React from 'react';
import Header from './components/header';
import Main from './components/main';
import CardContainer from './components/cardContainer';
import Footer from './components/footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <CardContainer />
            <Footer />
        </div>
    );
}

export default App;
