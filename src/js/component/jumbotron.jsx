import React from 'react';

const Jumbotron = ({ title, description }) => {
    return (
        <div className="jumbotron jumbotron-custom">
            <div>
                <h1 className="display-4">{title}</h1>
                <p className="lead">{description}</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more now!</a>
            </div>
        </div>
    );
}

export default Jumbotron;