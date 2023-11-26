import React from "react";
import './FooterRights.css'

const lastImageRight = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.138 394">
    <path id="Image" d="M244.5,394c5.167-12.5,15.1-40,13.5-50,10.167,13.5,40.2,32.8,79,2,11.5,8.833,32.8,18.5,26-13.5,6.833-9,13.7-29.9-13.5-41.5-2.333,1-7.1,3.9-7.5,7.5-4.5,0-13.7-1.5-14.5-7.5,27.5-25.167,67.9-90.7,9.5-151.5C346.333,106,359.4,35.2,337,20c-9.5,3.333-31.9,17.9-45.5,49.5C264.167,41.833,183.3,1.2,78.5,60c-6.833-17.833-24-54.8-38-60-12.833,19.833-32.4,80.2-8,163,1.667,31.833,19.8,102,79,128-7.167,2.667-22.2,9.2-25,14-2-4.333-8.5-9.9-18.5,2.5L0,394H57.5c6.167-7.5,18.8-23.9,20-29.5l9,29.5Z" fill="#6a59ce"/>
</svg>

const lastImageLeft = <svg xmlns="http://www.w3.org/2000/svg" width="439" height="289" viewBox="0 0 439 289">
    <path id="Image" d="M439-178.7c-4.946-2.411-15.633-9.041-18.818-16.274-3.981-9.041,30.76,64.371,7.238,77.028-18.818,10.126-30.036-4.46-33.293-13.019-1.809,43.878-17.8,116.157-67.309,54.245l-15.923-30.739C302.934-70.693,277.385,2.261,238.881-.054s-23.04-112.589-10.494-167.437c-22.8,20.252-74.04,62.635-96.622,70.157-.121-21.457,2.461-69.8,13.751-91.494-33.413,15.189-108.564,36.453-141.856,0C-2.13-201-5.315-238.082,28.268-289H439Z" transform="translate(439) rotate(180)" fill="#6a59ce"/>
</svg>


const FooterRights = ()=>{
    return(
        <div className='rights--reserved'>
            <p className='poppins--regular'>© 2021-2022, All Rights Reserved</p>
            <div className='lastLogo'>
                {lastImageRight}
            </div>
            <div className='lastLogoLeft'>
                {lastImageLeft}
            </div>
        </div>
    )
}

export default FooterRights