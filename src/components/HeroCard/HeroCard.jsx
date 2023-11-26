import React from 'react';
import './HeroCard.css'

const HeroCard = ({svg,paragraph}) =>{
    return(
        <div className='hero--card'>
            <p>{svg}</p>
            <p className='hero--card-p poppins--regular'>{paragraph}</p>
        </div>
    )
}

export default HeroCard;