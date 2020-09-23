import React from 'react';
import Logo from '../Logo';

const LogoSVG = require('./logo.svg');

interface IVlabLogo {
    size: 'small' | 'medium' | 'large';
}

const VlabLogo = ({ size }: IVlabLogo) => {

    return <Logo size={size} url={LogoSVG} alt="V-Lab logo" />
}

export default VlabLogo;