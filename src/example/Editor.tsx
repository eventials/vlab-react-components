import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageHeader, Skeleton, Spin, Tabs, Tag, Typography } from 'antd';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import Doc from './Doc';

export const EditorRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 40px 20px;
`;

export const EditorColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding: 40px 20px;
`;

const StyledContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 90%;
    padding: 10px;
    box-shadow: 1px 2px 3px gray;
    margin-top: 50px;
    background-color: #FFF;

    .id{
        position: absolute;
        top: -80px;
    }

    h1{
        font-size: 16pt;
        font-weight: bold;
    }

    p{
        font-size: 12pt;
    }

    h1,p{
        color: #333;
    }

    span{
        font-weight: lighter;
    }

    .inline{
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .editor, .error, .preview{
        border: 1px solid #333;
        flex-basis: 100%;
        padding: 10px;
        max-height: 300px;
        min-height: 200px;
        overflow-y: auto;
    }

    .editor{
        background-color: #42374a;
    }

    .preview, .error{
        border: none;
        margin-top: 20px;
    }

    .error{
        background-color: rgb(255,85,85);
        color: white;
    }
    
`;

const { Paragraph } = Typography;
const { TabPane } = Tabs;

const Editor = ({ id, title, description, tag, githubUser, doc, ...props }: any) => {
    const [user, setUser] = useState<any>(null);

    // useEffect(() => {
        // if (githubUser) loadUser();
    // }, [githubUser])

    // const loadUser = async () => {
    //     const response = await fetch(`https://api.github.com/users/${githubUser}`);
    //     const responseJSON = await response.json();

    //     console.log({ responseJSON });
    //     setUser({
    //         avatarUrl: responseJSON.avatar_url,
    //         url: responseJSON.url,
    //         name: responseJSON.name,
    //     })
    // }

    // if (!user) {
    //     return (
    //         <StyledContainer>
    //             <Skeleton avatar paragraph={{ rows: 4 }} />
    //         </StyledContainer>
    //     )
    // }

    return (
        <StyledContainer>
            <div className="id" id={id} />
            <PageHeader
                title={title}
                className="site-page-header"
                subTitle={user?.name}
                tags={tag ? <Tag color="blue"></Tag> : <></>}
                avatar={{ src: user?.avatarUrl }}
            >
                <div style={{ flex: 1 }}>

                    <Paragraph style={{ margin: "50px 0px" }}>
                        {description}
                    </Paragraph>

                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Interface" key="1">
                            <Doc>{doc}</Doc>
                        </TabPane>
                        <TabPane tab="Playground" key="2">
                            <LiveProvider {...props} scope={{ ...props.scope, Row: EditorRow, Column: EditorColumn }}>

                                <LiveEditor className="editor" />
                                <LivePreview className="preview" />
                                <LiveError className="error" />
                            </LiveProvider>
                        </TabPane>
                    </Tabs>

                </div>
            </PageHeader>

        </StyledContainer>
    )
};

export default Editor;