import React from 'react';

const Jumbotron = ({ title, description }) => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    );
}

export default Jumbotron;