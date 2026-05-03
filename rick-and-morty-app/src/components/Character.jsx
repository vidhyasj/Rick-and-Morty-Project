import React from 'react';

const Character = ({ name, image, status }) => {
    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Status: {status}</p>
        </div>
    );
};

export default Character;