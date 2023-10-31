import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';

const Home = () => {
    const featureCards = [
        { title: 'A Tree', description: 'Trees contribute to their environment by providing oxygen, improving air quality, climate amelioration, conserving water, preserving soil, and supporting wildlife.',  image: 'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg' },
        { title: 'A Flower', description: 'Flowers are important to the environment because they play a crucial role in ecosystems. They provide essential habitats and food for various animals, facilitate pollination which ensures plant reproduction and genetic diversity, and aid in nutrient cycling, enhancing soil health. Additionally, flowers improve air quality and contribute to the aesthetic and psychological well-being of humans.', image: 'https://www.southernliving.com/thmb/xFlQn020pc1NJAl4ksr7_o_B5u4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-598083938-1-22dab883ff2a43d8b2751d9f363f2d5d.jpg' },
        { title: 'The Leaves', description: 'Leaves are essential for photosynthesis, where they convert carbon dioxide into oxygen and glucose, fueling life on Earth. They also offer shelter and sustenance for various species, help manage water in ecosystems through transpiration, and decompose to nourish the soil with organic matter and nutrients.', image: 'https://cdn.mos.cms.futurecdn.net/vUH2L98BLbF4zce48txUNk.jpg' },
        { title: 'The Trail', description: 'Walking in a forest trail is beneficial because it offers physical exercise, reduces stress through nature\'s calming effects, enhances mood and mental well-being, improves air quality with higher oxygen levels from trees, and provides opportunities for connection with nature, promoting mindfulness and rejuvenation.', image: 'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/04/6c8fde99df2fc6352dbb4822ae05c872fca7283f.jpg' },
    ];

    return (
        <div className="container-fluid">
            <Navbar />
            <Jumbotron title="Connect with Nature!" description="Research shows that people who are more connected with nature are usually happier in life and more likely to report feeling their lives are worthwhile. Nature can generate many positive emotions, such as calmness, joy, and creativity and can facilitate concentration." />
            
            <div className="row">
                {featureCards.map((card, index) => (
                    <div className="col-md-3" key={index}>
                        <Card {...card} />
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Home;