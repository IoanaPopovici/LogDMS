import React from  'react'
import './MainCard.css'


const MainCard = ({logo,title, paragraph, width,borderColor, color, backgroundColor}) =>{
    if(width ==='375px'){

    }
    return(
        <div className='main--card'>
            <div className='svg--card' style={{borderColor: borderColor, backgroundColor: backgroundColor}}>{logo}</div>
            <h2  className='poppins--semibold main--card--title' style={{color: color}}>{title}</h2>
            <p className='poppins--regular main--card-p' style={{width: width, color: color}}>{paragraph}</p>
            <p className='poppins--medium main--card-read' style={{cursor: 'pointer', color: color}}>Read more -></p>
        </div>
    )
}
export default MainCard;