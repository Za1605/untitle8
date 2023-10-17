import React from 'react';

const Personage = (id, name, gender, species, image) => {


    return (
        <div>
            <p> {id} {name}</p>
            <h1> {gender} {species}</h1>
            <img src={image} alt={name} />
        </div>
    );
};

export default Personage;