import React, { useState } from 'react';
import { Drawer } from 'antd';
import Button, { IButtonProps } from './Button';
import { DrawerProps } from 'antd/lib/drawer';
import { FilterIcon } from '../icons';

interface IFilterButton {
    title?: string;
    buttonProps?: IButtonProps;
    drawerProps?: DrawerProps;

    onClick?: any;

    children?: any;
}

const FilterButton = ({ title, onClick, children, buttonProps, drawerProps }: IFilterButton) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
        onClick && onClick();
    }

    return (
        <>
            <Button type="terciary" variant="outlined" {...buttonProps} onClick={handleOpen}>{title || `Filtrar por`} <img style={{marginLeft: 16}} src={FilterIcon} /></Button>

            {!!children && <Drawer
                {...drawerProps}
                title={drawerProps?.title || window.innerWidth > 768 ? "Voltar para o menu" : "Voltar"}
                visible={open}
                onClose={handleClose}
                placement={drawerProps?.placement || "left"}
                width={window.innerWidth > 768 ? drawerProps?.width : window.innerWidth}
                key="drawer-1"
            >
                {children}
            </Drawer>
            }
        </>
    )
}

export default FilterButton;