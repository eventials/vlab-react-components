import React, { Component } from 'react';
import { VlabLogo, Typography, PageHeader, Button, FilterButton, ConditionalRender } from '../lib';
import { Column } from './Doc';

export interface ComponentList {
    title: string;
    description: string | Component | any;
    githubUser: string;
    scope: Object;
    code: string;
    doc: string;
}

export const components: Array<ComponentList> = [
    {
        title: 'Typography',
        description: (
            <>
                <p>Componente de tipografia da Vlab baseado no Style Guide</p>
                <Column>
                    <Typography type="heading1">Heading 1</Typography>
                    <Typography type="heading2">Heading 2</Typography>
                    <Typography type="heading3">Heading 3</Typography>
                    <Typography type="body1">Body 1</Typography>
                </Column>
            </>
        ),
        githubUser: "pietrobs",
        scope: { Typography },
        code: `<Column>
    <Typography type="heading1">Heading 1</Typography>
    <Typography type="heading2">Heading 2</Typography>
    <Typography type="heading3">Heading 3</Typography>  
</Column>`,
        doc: `type TypographyTypes = "heading1" | "heading2" | "heading3" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline1" | "overline2"

type Colors = IBrandUI | ITheme | ISemantic;

type IBrandUI = "primary" | "secondary" | "terciary" | "darkBackground";
type ITheme = "darkGray" | "regentGray" | "lightGray" | "lightBlue";
type ISemantic = "error" | "success";

interface ITypography {
    type: TypographyTypes,
    color: Colors,
}`
    },
    {
        title: 'PageHeader',
        description: (
            <>
                <p>Componente de header, com backbutton e action buttons</p>
                <PageHeader main title="Header title" subTitle="Header subtitle" extra={[<Button type="secondary" key="1">Extra</Button>]} />
            </>
        ),
        githubUser: "pietrobs",
        scope: { PageHeader, Button },
        code: `<PageHeader main title="Teste" extra={[<Button key="1">Extra</Button>]} />`,
        doc: `
export interface PageHeaderProps {
    backIcon?: React.ReactNode;
    prefixCls?: string;
    title: React.ReactNode;
    subTitle?: React.ReactNode;
    style?: React.CSSProperties;
    breadcrumb?: BreadcrumbProps;
    tags?: React.ReactElement<TagType> | React.ReactElement<TagType>[];
    footer?: React.ReactNode;
    extra?: React.ReactNode;
    avatar?: AvatarProps;
    onBack?: (e: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    ghost?: boolean;
}
interface IPageHeader extends PageHeaderProps {
    children?: any
    main?: boolean;
}`
    },
    {
        title: 'VlabLogo',
        description: (
            <>
                <p>Componente de logo da Vlab, possui 3 tamanhos diferentes baseados na altura do logo: small (45px), medium (80px) e large(120px)</p>
                <Column className="dark">
                    <VlabLogo size="medium" />
                </Column>
            </>
        ),
        githubUser: "pietrobs",
        scope: { VlabLogo },
        code: `<Row>
    <VlabLogo size="medium" />
</Row>`,
        doc: `interface IVlabLogo {
            size: 'small' | 'medium' | 'large';
}`
    },
    {
        title: 'Button',
        description: (
            <>
                <p>Componente de botão da Vlab baseado no Style Guide</p>
                <Column>
                    <Button type="primary" variant="contained">Contained</Button>
                    <Button type="primary" variant="outlined">Outlined</Button>
                    <Button type="primary" variant="text">Text</Button>
                    <Button type="primary" loading variant="contained">Loading</Button>
                </Column>
            </>
        ),
        githubUser: "pietrobs",
        scope: { Button },
        code: `<Column>
        <Button type="primary" variant="contained" size="medium">Botão</Button>
        <Button type="primary" RightIcon={<VideoReportIcon />} variant="contained">Right Icon</Button>
</Column>`,
        doc: `
type ButtonType = 'primary' | 'secondary' | 'terciary' | 'error' | 'success';
type ButtonVariant = 'contained' | 'outlined' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

export interface IButtonProps {
    type?: ButtonType;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
  
    leftIcon?: any;
    rightIcon?: any;
  
    tooltipProps?: TooltipProps;
    onClick?: any;
  
    children?: any;
}     
`
    },
    {
        title: "FilterButton",
        description: (
            <Column>
                <FilterButton drawerProps={{ width: 350 }}>
                    <Column>
                        <p>Aqui entram os filtros</p>
                        <Button onClick={() => { }}>Aplicar</Button>
                    </Column>
                </FilterButton>
            </Column>
        ),
        githubUser: "pietrobs",
        scope: { FilterButton },
        code: ``,
        doc: `
interface IFilterButton {
    title?: string;
    buttonProps?: IButtonProps;
    drawerProps?: DrawerProps;

    onClick?: any;

    children?: any;
}        
`
    },
    {
        title: "ConditionalRender",
        description: (
            <>
                <Typography type="body1">Componente para renderização condicional.</Typography>
                <Typography type="body1">Aceita como propriedade o nome da permissão que deve existir no token ou uma expressão boleana para que o componente filho seja renderizado.</Typography>

                <ConditionalRender permission="manage_profile">
                    <Button>Botão</Button>
                </ConditionalRender>
            
            </>
        ),
        githubUser: "pietrobs",
        scope: { ConditionalRender, Button },
        code: `
<ConditionalRender permission="manage_profile">
    <Button>Botão</Button>
</ConditionalRender>
`,
        doc: `
type PermissionsType = 'access_control' | 'manage_profile'

interface IConditionalRender{
    permission?: PermissionsType | Array<PermissionsType>;
    condition?: boolean;
    children: any;
}   
`
    }
];