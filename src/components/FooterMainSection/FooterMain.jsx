import React from "react";
import './FooterMain.css'

let buyLogo = <svg id="Buy" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
    <rect id="Buy-2" data-name="Buy" width="28" height="28" fill="rgba(0,0,0,0)"/>
    <g id="Iconly_Light-Outline_Buy" data-name="Iconly/Light-Outline/Buy">
        <g id="Buy-3" data-name="Buy">
            <path id="Combined-Shape" d="M6.013,19.777a1.51,1.51,0,1,1-1.51,1.51A1.512,1.512,0,0,1,6.013,19.777Zm13.16,0a1.51,1.51,0,1,1-1.51,1.51A1.512,1.512,0,0,1,19.173,19.777ZM1.024.011l2.427.42a.879.879,0,0,1,.722.79l.274,3.268H21.237a2.441,2.441,0,0,1,2.071,2.765L22.2,14.929a2.989,2.989,0,0,1-2.943,2.554H6.516A2.988,2.988,0,0,1,3.554,14.75L2.485,2.04l-1.758-.3A.877.877,0,0,1,.013.724.886.886,0,0,1,1.024.011ZM5.233,6.239H4.594l.7,8.367a1.216,1.216,0,0,0,1.22,1.127H19.255a1.231,1.231,0,0,0,1.213-1.054l1.108-7.652a.684.684,0,0,0-.131-.511.677.677,0,0,0-.453-.27H5.233ZM17.381,8.8a.875.875,0,1,1,0,1.75H14.147a.875.875,0,1,1,0-1.75Z" transform="translate(2.788 3.5)" fill="#fff" fillRule="evenodd"/>
        </g>
    </g>
</svg>
const FooterMain = ()=>{
    return(
        <div className='footerMain--container'>
            <div className='preorder--container'>
                <div className='preoreder--left'>
                    <p className='preorder--title poppins--semibold'>Let's Get It Now Robot Sally</p>
                    <p className='preorder-p poppins--regular'>Make your video experience amazing and join thousands of satisfied customers already using robot sally</p>
                </div>
                <div className='preoreder--right'>
                    <button className='preorder--btn poppins--medium'>{buyLogo} Preorder Now</button>
                    <p className='preorder-p poppins--regular'>Sally's robot is only made limited, so who's quick he gets</p>
                </div>
            </div>
        </div>
    )
}

export default FooterMain;