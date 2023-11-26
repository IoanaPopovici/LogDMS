import React from "react";
import './RobotCard.css'

const RobotCard = ({paragraph, title, number}) =>{
    return(
        <div className='robotcard--container'>
            <p className='robotcard--number poppins--semibold'>{number}</p>
            <p className='robotcard--title poppins--medium'>{title}</p>
            <p className='robotcard--p poppins--regular'>{paragraph}</p>
        </div>
    )
}

export default RobotCard;