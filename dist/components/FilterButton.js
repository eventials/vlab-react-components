import React, { useState } from 'react';
import { Drawer } from 'antd';
import Button from './Button';
import FilterIcon from '../icons/filter.svg';
const FilterButton = ({ title, onClick, children, buttonProps, drawerProps }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
        onClick && onClick();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, Object.assign({ type: "terciary", variant: "outlined" }, buttonProps, { onClick: handleOpen, rightIcon: React.createElement("img", { src: FilterIcon }) }), title || `Filtrar por`),
        !!children && React.createElement(Drawer, Object.assign({}, drawerProps, { title: drawerProps?.title || window.innerWidth > 768 ? "Voltar para o menu" : "Voltar", visible: open, onClose: handleClose, placement: drawerProps?.placement || "left", width: window.innerWidth > 768 ? drawerProps?.width : window.innerWidth, key: "drawer-1" }), children)));
};
export default FilterButton;
