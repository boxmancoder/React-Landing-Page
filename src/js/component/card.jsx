import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <img src="path/to/placeholder.jpg" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}

export default Card;
