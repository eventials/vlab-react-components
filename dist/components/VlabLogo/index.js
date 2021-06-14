import React from 'react';
import Logo from '../Logo';
const LogoSVG = require('./logo.svg');
const VlabLogo = ({ size }) => {
    return React.createElement(Logo, { size: size, url: LogoSVG, alt: "V-Lab logo" });
};
export default VlabLogo;
