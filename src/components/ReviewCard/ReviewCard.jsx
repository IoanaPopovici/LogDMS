import React from "react";
import './ReviewCard.css'

const ReviewCard =({review, name, occupation, width})=>{
    return(
        <div className='review--card'>
            <p className='poppins--regular review-p' style={{color: '#353535'}}>{review}</p>
            <div className='about--reviewer'>
                <p className='reviewer--photo'></p>
                <div className='reviewer--container'>
                    <p className='reviewer--name poppins--semibold' style={{color: '#232323'}}>{name}</p>
                    <p className='reviewer--occupation poppins--regular' style={{width: width}}>{occupation}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;