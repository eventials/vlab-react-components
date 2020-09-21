import React from 'react';
import styled from 'styled-components';
import {
    LiveProvider,
    LiveEditor,
} from 'react-live'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 40px 20px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding: 40px 20px;
`;

const StyledContainer = styled.div`
    margin-bottom: 10px;
    .doc{
        flex-basis: 100%;
        padding: 10px;
        background-color: #42374a;
    }
    
`;


const Doc = ({...props }: any) => {

    return (
        <StyledContainer>
            <LiveProvider {...props} scope={{...props.scope, Row, Column}} code={`${props.children}`}>
                    <LiveEditor className="doc" disabled/>
            </LiveProvider>
        </StyledContainer>
    )
};

export default Doc;