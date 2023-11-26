import React from "react";
import './UpdatedCard.css'

const UpdatedCard = ({title, paragraph, percent, borderColor, width}) =>{
    return(
        <div className='updated--card--container'>
            <div className='card--percent' style={{borderColor: borderColor}}><h2 className='poppins--semibold' style={{color: '#353535'}}>{percent}</h2></div>
            <div className='updated--details--card' >
                <h1 className='updated--card--title poppins--semibold'>{title}</h1>
                <p className='updated--card--p poppins--regular' style={{width: width}}>{paragraph}</p>
            </div>
        </div>
    )
}

export default UpdatedCard;

