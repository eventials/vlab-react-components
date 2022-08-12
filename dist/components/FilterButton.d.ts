import { IButtonProps } from './Button';
import { DrawerProps } from 'antd/lib/drawer';
interface IFilterButton {
    title?: string;
    buttonProps?: IButtonProps;
    drawerProps?: DrawerProps;
    onClick?: any;
    children?: any;
}
declare const FilterButton: ({ title, onClick, children, buttonProps, drawerProps }: IFilterButton) => JSX.Element;
export default FilterButton;
