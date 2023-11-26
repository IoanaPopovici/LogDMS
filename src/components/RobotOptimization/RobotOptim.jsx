import React from "react";
import './RobotOptim.css'
import RobotCard from "../RobotCard/RobotCard";
import robotLogo from "../../assets/robotcard.png"

const RobotOptim = () =>{
    return(
        <div className='robot--optimization'>
            <div className='robot--optim--title'>
                <p className='poppins--semibold ' >How to use sally robot to be more optimal</p>
            </div>
            <div className='robot--cards--container'>
                <RobotCard
                    number='01.'
                    title='Keep Battery Power'
                    paragraph="Maintain a healthy battery where Sally's robot doesn't run out of power quickly. This can cause the system to not run optimally"/>
                <RobotCard
                    number='02.'
                    title='System Health'
                    paragraph="Maintaining cleanliness is very important to make the air circulation released by Sally's robot can be expelled smoothly. this can cause heat to the system or damage"/>
                <RobotCard
                    number='03.'
                    title='Redundant System'
                    paragraph="A Sally's robot has a command capacity that is served with a minimum of 5 commAands that use this excessive command causing an error in the system"/>
            </div>
            <img className='robotLogo' src={robotLogo} alt='robotLogo'/>
        </div>
    )
}

export default RobotOptim;