/// <reference types="react" />
export interface ILogo {
    url: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
}
declare const Logo: ({ url, alt, size }: ILogo) => JSX.Element;
export default Logo;
