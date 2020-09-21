const colors: any = {
    // Brand UI
    primary: '#1D5880',
    secondary: '#0F87C8',
    terciary: '#00AEEF',
    darkBackground: '#28323B',

    // Theme
    darkGray: '#43474E',
    regentGray: '#7C8490',
    lightGray: '#D6DCE7',
    lightBlue: '#EBF6FD',
    extraLightBackground: '#F6F9FB',


    // Semantic
    error: '#0F87C8',
    success: '#0F87C8',

    white: '#FFFFFF',
    transparent: 'rgba(0,0,0,0)'
}

export default colors;

export type Colors = IBrandUI | ITheme | ISemantic | IOthers;

export type IBrandUI = "primary" | "secondary" | "terciary" | "darkBackground";
export type ITheme = "darkGray" | "regentGray" | "lightGray" | "lightBlue" | "extraLightBackground";
export type ISemantic = "error" | "success";
export type IOthers = "white" | "transparent";