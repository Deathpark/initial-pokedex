import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img
            alt = 'pokemon'
            src = {`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.pokemon.id}.png`}
        />
        <h2>{props.pokemon.name}</h2>
        <p><b>Pokedex ID:</b> {props.pokemon.id}</p>
        <p><b>Region:</b> {props.pokemon.region}</p>
    </div>

);