import React from 'react';
import styled from 'styled-components';

const Image = styled.img`

`;

export interface ILogo {
    url: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
}

const defaultProps: any = {
    alt: "Logo",
    size: "medium"
}

const getSize = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small':
            return ({ height: 25 });
        case 'medium':
            return ({ height: 65 });
        case 'large':
            return ({ height: 80 });
        default:
            console.error(`VlabLogo: Unknow size ${size}`);
    }
}

const Logo = ({ url, alt, size }: ILogo) => <Image className="vlab-logo" style={getSize(size || defaultProps.size)} src={url} alt={alt || defaultProps.alt} />;

export default Logo;