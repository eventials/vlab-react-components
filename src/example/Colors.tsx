import React from 'react';
import styled from 'styled-components';
import { Typography } from '../lib';
import colors from '../lib/theme/colors';
import CopyToClipboard from 'react-copy-to-clipboard';
import { message } from 'antd';

const StyledColors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ColorSquad = styled.div`
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 5px;

    p{
        text-shadow: 2px 2px 2px black;
        color: white;
    }
`;

const Colors = () => {

    const renderColors = () => {
        const render = [];

        for (const key in colors) {
            render.push(
                <CopyToClipboard text={key} onCopy={(text) => message.info(`"${text}" copied to clipboard!`)}>
                    <ColorSquad style={{ backgroundColor: colors[key] }}>
                        <Typography type="caption">{key}</Typography>
                    </ColorSquad>
                </CopyToClipboard>
            )
        }

        return render;
    }

    return (
        <StyledColors id="Colors">
            {renderColors()}
        </StyledColors>
    )
};

export default Colors;