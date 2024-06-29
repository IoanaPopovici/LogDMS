import React from 'react';
import './MainHero.css'
import HeroCard from "../HeroCard/HeroCard";

const chip = <svg className='svgChip' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47">
    <g id="Icon" transform="translate(-0.5 -0.5)">
        <path id="Vector" d="M4,0H28a4,4,0,0,1,4,4V28a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z" transform="translate(8 8)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-2" data-name="Vector" d="M0,0H12V12H0Z" transform="translate(18 18)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-3" data-name="Vector" d="M0,0V6" transform="translate(18 2)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-4" data-name="Vector" d="M0,0V6" transform="translate(30 2)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-5" data-name="Vector" d="M0,0V6" transform="translate(18 40)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-6" data-name="Vector" d="M0,0V6" transform="translate(30 40)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-7" data-name="Vector" d="M0,0H6" transform="translate(40 18)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-8" data-name="Vector" d="M0,0H6" transform="translate(40 28)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-9" data-name="Vector" d="M0,0H6" transform="translate(2 18)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-10" data-name="Vector" d="M0,0H6" transform="translate(2 28)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </g>
</svg>
const hdd = <svg className='svgHdd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 35">
    <g id="Ic_on" data-name="Ic on" transform="translate(-2.5 -6.5)">
        <path id="Vector" d="M40,0H0" transform="translate(4 24)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-2" data-name="Vector" d="M6.9,2.22,0,16V28a4,4,0,0,0,4,4H36a4,4,0,0,0,4-4V16L33.1,2.22A4,4,0,0,0,29.52,0H10.48A4,4,0,0,0,6.9,2.22Z" transform="translate(4 8)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-3" data-name="Vector" d="M0,0H.02" transform="translate(12 32)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path id="Vector-4" data-name="Vector" d="M0,0H.02" transform="translate(20 32)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </g>
</svg>


const MainHero = () => {
    return (
        <div className='mainHero--container'>
            <p className='hero--title montserrat--bold'>Proiect Climinte Ioana-Gabriela </p>
            <p className='hero--title montserrat--bold'>Practica anul II, Informatica </p>
            <p className='hero--p poppins--regular'>Robot technology is faster with the latest systems that make it possible your partner and ready to serve your needs. Enter email to get product launch information</p>
            <div className='hero--form'>
                <input className='hero--input' type="text" placeholder='Enter your email address' />
                <button className='hero--submit'>Submit</button>
            </div>
            <div className='hero--cards'>
                <HeroCard svg={chip} paragraph={
                    <span>
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>Using the </span>
                        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>RTX-1134</span>
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}> processor</span>
                    </span>
                } />
                <HeroCard svg={hdd} paragraph='Use infrared Platinum 2.14' />
            </div>


        </div>
    )
}


export default MainHero;