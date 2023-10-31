import React from 'react';

const Card = ({ title, description, image }) => {
    return (
        <div className="card h-100">  {/* <-- Added h-100 for 100% height with Flexbox */}
            <img src={image || "path/to/placeholder.jpg"} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}   

export default Card;