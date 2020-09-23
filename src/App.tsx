import React from 'react';
import styled from 'styled-components';
import Colors from './example/Colors';
import { components } from './example/components';
import Editor from './example/Editor';
import './example/GlobalStyle.css';
import VlabIcons from './example/Icons';
import { PageHeader } from './lib';
import { FilterIcon } from './lib/icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        text-align: center;
        margin: 20px 0px;
        border-bottom: 1px solid #CCC;
    }

    .dark{
        background-color: #CCC;
    }
`;

const App = () => {

    return (
        <Container id="Home">
            
            <PageHeader main title="Style Guid and Components" subTitle="Playground" />

            <Colors />

            {components.map((component) => <Editor id={component.title} {...component} />)}

            <VlabIcons />

        </Container>
    )
};

export default App;