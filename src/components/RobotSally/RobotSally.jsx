import React from "react";
import './RobotSally.css'
import RobotOptim from "../RobotOptimization/RobotOptim";

const RobotSally = () =>{
    return(
        <div className='robot--section'>
            <div className='robot--container'>
                <div>
                    <svg className='robot-sally' xmlns="http://www.w3.org/2000/svg" width="604" height="771" viewBox="0 0 604 771">
                        <path id="Image" d="M517.362,752.934c5.373-17.318,13.6-59.748,3.526-90.92-6.549-15.32-24.28-51.155-42.818-71.937V551.111c28.21,18.151,91.782,51.355,120.394,38.966,6.885-5.828,12.9-26.577-18.135-62.945C561.188,503.486,509.6,450.9,456.41,429.717c-.672-9.492-12.8-29.474-55.915-33.471,26.195-23.979,77.677-87.423,74.05-149.369C513.5,207.745,588.289,119.689,575.8,80.523,575.629,65.037,547.889,48.052,438.275,104,417.79,83.521,360.9,41.258,297.227,36.062c18.471-21.481,28.713-55.851-78.08-21.481C193.289,26.237,140.06,51.848,134.015,61.04,97.074,82.854,23.494,150.062,24.7,244.38c1.679,30.473,10.78,99.113,33.751,129.886-30.56-2-82.513,4.6-45.84,46.959,28.042,33.97,100.95,101.911,168.25,101.911,5.877,24.312,30.93,81.828,84.125,117.4-24.851,42.3-58.233,127.588,7.052,130.386,23.508,1.332,69.013-13.089,62.968-81.429,19.814,11.49,66.292,27.576,93.7,0-.336,25.811,7.657,77.232,42.314,76.433S516.355,756.93,517.362,752.934Z" transform="translate(0 0)" fill="#6a59ce"/>
                    </svg>
                </div>
                <div className='about--robot'>
                    <h1 className='poppins--semibold' style={{color: '#353535'}}>See how Sally's robot system works</h1>
                    <p className='poppins--medium' style={{color: '#737373'}}>Sally's robot works through voices that have been previously recorded to be input into the technological thinking system</p>
                    <p className='poppins--medium about--read' style={{color: '#1B088C'}}>Read More -></p>
                </div>
            </div>
            <RobotOptim />
        </div>
    )
}
export default RobotSally;