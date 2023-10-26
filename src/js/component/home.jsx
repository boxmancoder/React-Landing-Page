import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';

const Home = () => {
    const featureCards = [
        { title: 'Card title', description: 'Lorem ipsum...' },
        { title: 'Card title', description: 'Lorem ipsum...' },
        { title: 'Card title', description: 'Lorem ipsum...' },
    ];

    return (
        <div className="container-fluid">
            <Navbar />
            <Jumbotron title="A Warm Welcome!" description="Lorem ipsum dolor sit amet..." />
            
            <div className="row">
                {featureCards.map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <Card {...card} />
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Home;