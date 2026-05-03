import React from 'react';

interface CharacterProps {
    name: string;
    image: string;
    status: string;
}

const Character: React.FC<CharacterProps> = ({ name, image, status }) => {
    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Status: {status}</p>
        </div>
    );
};

export default Character;