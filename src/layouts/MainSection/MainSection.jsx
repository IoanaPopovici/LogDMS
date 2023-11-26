import React from 'react';
import './MainSection.css'
import UpdatedCard from "../../components/UpdatedCard/UpdatedCard";
import MainCard from "../../components/MainCard/MainCard";
import RobotSally from "../../components/RobotSally/RobotSally";
import Frame171 from "../../components/Frame171/Frame171";

const logoMainCard = <svg xmlns="http://www.w3.org/2000/svg" width="31.333" height="18.774" viewBox="0 0 31.333 18.774">
    <g id="battery-charging" transform="translate(-0.333 -6.613)">
        <path id="Vector" d="M18.667,0h2.667A2.667,2.667,0,0,1,24,2.667V13.333A2.667,2.667,0,0,1,21.333,16H17.08" transform="translate(1.333 8)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-2" data-name="Vector" d="M5.333,16H2.667A2.667,2.667,0,0,1,0,13.333V2.667A2.667,2.667,0,0,1,2.667,0" transform="translate(1.333 8)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-3" data-name="Vector" d="M0,2.667V0" transform="translate(30.667 14.667)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-4" data-name="Vector" d="M5.333,0,0,8H8L2.667,16" transform="translate(9.333 8)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </g>
</svg>
const personalizedLogo = <svg id="Icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect id="Icon-2" data-name="Icon" width="64" height="64" rx="10" fill=""/>
    <g id="codesandbox" transform="translate(16 16)">
        <path id="Vector" d="M24,18.664V8a2.667,2.667,0,0,0-1.333-2.307L13.333.357a2.667,2.667,0,0,0-2.667,0L1.333,5.691A2.667,2.667,0,0,0,0,8V18.664a2.667,2.667,0,0,0,1.333,2.307L10.667,26.3a2.667,2.667,0,0,0,2.667,0l9.333-5.333A2.667,2.667,0,0,0,24,18.664Z" transform="translate(4 2.669)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-2" data-name="Vector" d="M0,0,6,3.467,12,0" transform="translate(10 5.613)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-3" data-name="Vector" d="M6,10.387V3.467L0,0" transform="translate(4 16)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-4" data-name="Vector" d="M6,0,0,3.467v6.92" transform="translate(22 16)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-5" data-name="Vector" d="M0,0,11.64,6.733,23.28,0" transform="translate(4.36 9.28)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path id="Vector-6" data-name="Vector" d="M0,13.44V0" transform="translate(16 16)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </g>
</svg>
const activityLogo = <svg xmlns="http://www.w3.org/2000/svg" width="29.167" height="26.5" viewBox="0 0 29.167 26.5">
    <g id="activity" transform="translate(-1.417 -2.75)">
        <path id="Vector" d="M26.667,12H21.333l-4,12-8-24-4,12H0" transform="translate(2.667 4)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
    </g>
</svg>

const MainSection = () =>{
    let icon = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">
        <path id="Icon" d="M39.917,20.868A1.336,1.336,0,0,0,38.666,20h-16.1L31.853,1.944A1.334,1.334,0,0,0,29.8.324L20,8.784.462,25.657A1.333,1.333,0,0,0,1.333,28h16.1L8.146,46.056a1.334,1.334,0,0,0,2.057,1.62l9.8-8.46L39.537,22.343A1.334,1.334,0,0,0,39.917,20.868Z" fill="#f57438"/>
    </svg>

    return(
        <div className='mainSection--container'>
            <div className='main--updated--container'>
                <h1 className='updated--title poppins--semibold'>Updated Main <span style={{color: '#1B088C'}}>Features</span></h1>
                <div className='updated--cards--container'>
                    <UpdatedCard
                        title='Quick Response'
                        paragraph='Can respond to something sensitive'
                        percent='80%'
                        borderColor='#1A0C71'
                    />

                    <UpdatedCard
                        title='Sight Sensor'
                        paragraph='Updated visibility up to 2 km'
                        percent='90%'
                        borderColor='#FF6F00'
                        width='75%'
                    />
                </div>
            </div>
            <div className='latest--updated'>
                <h1 className='poppins--semibold'>See The Latest <span className='updated--icon'>{icon}</span> Updated Version</h1>
                <p className='poppins--regular' style={{ color: '#121212'}}>Update your system to the latest <span className='poppins--medium' style={{color: '#1B088C'}}>Version 2.3</span> with a technology version using the new RTX-1134 processor for a <span className='poppins--medium' style={{color: '#1B088C'}}>much better experience</span></p>
            </div>
            <div className='main--cards--container'>
                <div className='human--card--container'>
                <MainCard
                    logo={logoMainCard}
                    title='Using 25,000 Mah Battery'
                    paragraph="Sally's robot can last up to a week and uses the BT 331 Gold series fast charging which can be charged for 30 minutes"
                    width='110%'
                />
                </div>
                <div className='human--card--container-personalized'>
                    <MainCard
                        logo={personalizedLogo}
                        title='Human Thinking Technology'
                        paragraph="Sally's modified robot can think like a human using IEA 223 technology with the Z364XT thinking system"
                    />
                </div>
                <div className='human--card--container'>
                <MainCard
                    logo={activityLogo}
                    title='Quick Response In All Orders'
                    paragraph="Technology connects listeners using a microphone IC 2469 KG with a response speed of 0.3 seconds"
                />
                </div>
            </div>
            <RobotSally />
            <Frame171 />
         </div>

    )
}

export default MainSection;