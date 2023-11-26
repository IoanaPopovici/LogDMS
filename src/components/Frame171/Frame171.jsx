import React from "react";
import './Frame171.css'
import ReviewCard from "../ReviewCard/ReviewCard";
import FooterMain from "../FooterMainSection/FooterMain";
import leftArrow from "../../assets/arrow-left-circle.png"
import rightArrow from "../../assets/arrow-right-circle.png"

const Frame171 = () =>{
    return(
        <div className='frame--container'>
            <div className='frame--container--cards'>
                <div className='frame--title' style={{color: '#353535'}}>
                    <p className='frame--p poppins--semibold' style={{width: '104%'}}>Trusted by over <span style={{color: '#1B088C'}}>3200K</span></p>
                    <p className='frame--p poppins--semibold' style={{textAlign: 'center'}}>Founder customers</p>
                </div>
                <div className='reviews--container'>
                    <ReviewCard name='Craig Press'
                                occupation='Founder Digital Apps'
                                review="“ I am very grateful to the developers who have created Sally's robot. Very helpful in my life. I hope you can develop in the future “"
                    />
                    <ReviewCard
                        name='Paityn Septimus'
                        review="“ I don't have much to say, except it is a really, really, really good and affordable Robot. Thanks, I hope we are going to hop a lot in the future :) “"
                        occupation='Software Devlop'
                    />
                    <ReviewCard
                        review="“ So amazing this is the robot I dreamed of. thank you sally and the developer team, we are really waiting for other amazing products that you make in the future “"
                        name='Alfonso Baptista'
                        occupation='Co Founder AI technology'
                        width='110%'
                    />
                </div>
                <div className='arrows--container'>
                    <img src={leftArrow} alt="leftArrow"/>
                    <img src={rightArrow} alt="rightArrow"/>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default  Frame171;