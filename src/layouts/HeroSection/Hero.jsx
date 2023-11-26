import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Hero.css";
import MainHero from "../../components/MainHero/MainHero";

const imageHero = (
  <svg
    className="svgHero"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 724 782"
  >
    <path
      id="Image"
      d="M498.589,636.052c19.321,39.205,44.009,123.2-11.807,145.543-18.248,2.864-53.562-8.163-48.839-75.188-17,9.667-58.178,20.838-86.944-11.815l-38.642,71.966c-22.9,12.889-68.911,23.845-69.77-35.446L302.159,629.07c-8.766-21.84-26.835-68.206-28.981-78.948-14.133,14.143-45.512,43.394-57.963,47.261l35.422,12.352c-12.7,34.909-47.122,108.808-83.188,125.135C120.4,729.142,21.038,714.14,0,699.962c7.335-28.106,32.309-90.87,73.527-117.079H129.88c15.922-26.853,68.589-86.9,151.884-112.245,5.367-7.519,19.75-22.986,34.348-24.7-30.413-29.717-92.419-108.486-97.142-185.822l4.294-26.853c-4.83-45.113-9.124-147.047,12.344-193.878,7.156-29.717,29.3-71.321,60.646,0l25.761,63.373c59.215-20.408,194.5-44.9,261.907,20.408,16.459-21.482,51.2-57.68,58.5-30.612,7.693,21.661,19.428,75.833,4.83,119.227,1.61,43.681-1.288,138.561-25.761,168.636s-38.821,47.261-42.935,52.095c-14.312,9.13-45.082,28.464-53.669,32.761,16.1.716,52.059,5.693,67.087,19.871,37.39-2.327,112.92-3.437,115.926,10.741s2.326,4.834,1.61-1.611L724,499.639l-4.294,25.779h-10.2l-4.83-4.834v8.593l-10.2,4.3c-1.968,15.038-15.564,47.261-54.206,55.854-28.266,17.186-82.007,37.057-70.844-20.945-12.523-8.951-37.569-28.464-37.569-34.909C527.391,561.938,514.475,622.3,498.589,636.052Z"
      fill="#6a59ce"
    />
  </svg>
);
let bag = (
  <svg
    className="shop--bag"
    xmlns="http://www.w3.org/2000/svg"
    width="19.586"
    height="20.722"
    viewBox="0 0 19.586 20.722"
  >
    <g
      id="Iconly_Light-Outline_Bag"
      data-name="Iconly/Light-Outline/Bag"
      transform="translate(-2 -1)"
    >
      <g id="Bag">
        <path
          id="Combined-Shape"
          d="M9.781,0A5.076,5.076,0,0,1,14.82,4.539h.074c1.45,0,3.213.963,3.808,3.664l.789,6.107A5.651,5.651,0,0,1,18.438,19a5.7,5.7,0,0,1-4.477,1.725H5.613c-2.143,0-3.636-.525-4.565-1.6S-.2,16.413.121,14.295L.9,8.269C1.407,5.506,3.272,4.54,4.716,4.54A5.07,5.07,0,0,1,9.76,0Zm5.114,6.04H4.716c-.441,0-1.915.178-2.338,2.462l-.772,6c-.251,1.683-.057,2.9.578,3.638s1.749,1.082,3.429,1.082h8.348A4.389,4.389,0,0,0,17.3,18.015a4.256,4.256,0,0,0,.7-3.5l-.779-6.052C16.895,6.97,16.019,6.04,14.895,6.04ZM12.7,8.824a.77.77,0,0,1,.773.75.731.731,0,0,1-.727.75H12.7a.75.75,0,0,1,0-1.5Zm-5.83,0a.77.77,0,0,1,.773.75.732.732,0,0,1-.728.75H6.867a.75.75,0,1,1,0-1.5ZM9.778,1.5H9.763A3.568,3.568,0,0,0,6.229,4.539h7.079A3.576,3.576,0,0,0,9.778,1.5Z"
          transform="translate(2 1)"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
);

const Hero = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="hero--container">
      <Navbar funcMenu={showMenu} />
      {show && (
        <div className="dropdown--menu">
          <div className="navbar--dropdown poppins--regular">
            <p>Home</p>
            <p className="custom-p-dropdown">
              Product
              <span style={{ marginLeft: "10px" }}>
                <svg
                  width="8"
                  height="13"
                  fill="none"
                  className="_9vd8 _agnt _afol _afok"
                  transform="rotate(270)"
                >
                  <path
                    d="M7.41 1.91L2.83 6.5l4.58 4.59L6 12.5l-6-6 6-6 1.41 1.41z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </p>
            <p className="custom-p-dropdown">
              Resource
              <span style={{ marginLeft: "10px" }}>
                <svg
                  width="8"
                  height="13"
                  fill="none"
                  className="_9vd8 _agnt _afol _afok"
                  transform="rotate(270)"
                >
                  <path
                    d="M7.41 1.91L2.83 6.5l4.58 4.59L6 12.5l-6-6 6-6 1.41 1.41z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </p>
            <p>Community</p>
            <p>Contact</p>
            <p>About</p>
          </div>
          <button className="dropdown--shop--btn poppins--medium">
            {bag} Shop
          </button>
          <p className="dropdown--p poppins--regular">
            © 2021-2022, All Rights Reserved
          </p>
        </div>
      )}
      <MainHero />
      <div className="img--hero">{imageHero}</div>
      <div className="c1"></div>
      <div className="c2"></div>
      <div className="c3"></div>
      <div className="c4"></div>
      <div className="c5"></div>
    </div>
  );
};

export default Hero;
