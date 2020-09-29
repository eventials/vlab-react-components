import React from 'react';
import styled from 'styled-components';
import { colors, PageHeader, Tooltip } from '../lib';
import * as Icons from '../lib/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { message } from 'antd';


const StyledIcons = styled.div`
    width: 90%;
    padding: 10px;
    box-shadow: 1px 2px 3px gray;
    margin-top: 50px;
    background-color: #FFF;

    .list{
        display: flex;
        flex-direction: row;
    }
`;

const Iconsquad = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.lightBlue};
    width: 80px;
    height: 80px;
    margin: 5px;
`;


const VlabIcons = () => {

    const renderIcons = () => {
        const render: any = [];
        console.log(Icons);

        for (const key in Icons) {
            const TypedIcons: any = Icons;
            console.log({ key: TypedIcons[key] });
            const Icon = TypedIcons[key];

            render.push(
                <CopyToClipboard key={key} text={`<${key} />`} onCopy={(text) => message.info(`"${text}" copied to clipboard!`)}>
                    <Tooltip title={key}>
                        <Iconsquad>
                            <Icon />
                        </Iconsquad>
                    </Tooltip>
                </CopyToClipboard>
            )
        }

        return render;
    }

    return (
        <StyledIcons id="Icons">
            <PageHeader title="Icones" />
            <div className="list">
                {renderIcons()}
            </div>
        </StyledIcons>

    )
};

export default VlabIcons;