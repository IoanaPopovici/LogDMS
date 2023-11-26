import React from "react";
import './FooterSection.css'



const FooterSection = () =>{
    return(
        <div className='footerSection--container'>
            <div className='text--footer'>
                <div className='menu--footer poppins--regular'>
                    <p className='poppins--semibold'>Menu</p>
                    <p>Home</p>
                    <p>Product</p>
                    <p>Resources</p>
                    <p>Community</p>
                    <p>Contact</p>
                    <p>About</p>
                </div>
                <div className='product--footer poppins--regular'>
                    <p className='poppins--semibold'>Product</p>
                    <p>Robot</p>
                    <p>System AI</p>
                    <p>Stream</p>
                    <p>DNC</p>
                </div>
                <div className='solutions--footer poppins--regular'>
                    <p className='poppins--semibold'>Solutions</p>
                    <p>System Error</p>
                    <p>Video Delivery</p>
                    <p>Payment</p>
                    <p>Processing</p>
                </div>
                <div className='faq--footer poppins--regular'>
                    <p className='poppins--semibold'>Faq</p>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                    <p>Copyright</p>
                    <p>Language</p>
                </div>
                <div className='support--footer poppins--regular'>
                    <p className='poppins--semibold'>Support</p>
                    <p>Online Chat</p>
                    <p>Open Live Chat</p>
                    <p>Call Center</p>
                </div>
                <div className='helper-div'></div>
                <div className='developers--footer poppins--regular'>
                    <p className='poppins--semibold'>Developers</p>
                    <p>Developers Hub</p>
                    <p>Developers Call</p>
                    <p>API</p>
                </div>
                <div className='resources--footer poppins--regular'>
                    <p className='poppins--semibold'>Resources</p>
                    <p>System Network</p>
                    <p>Company Service</p>
                    <p>Assets AI</p>
                </div>
            </div>

        </div>
    )
}

export default FooterSection;