/// <reference types="react" />
import { PageHeaderProps } from 'antd/lib/page-header';
interface IPageHeader extends PageHeaderProps {
    children?: any;
    main?: boolean;
}
declare const PageHeader: (props: IPageHeader) => JSX.Element;
export default PageHeader;
