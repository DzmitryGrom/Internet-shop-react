import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const MenuComponents = () => (

    <Menu>
        <Menu.Item name='browse' >
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup' >
                Сумма: &nbsp;<b>0</b> Руб.
            </Menu.Item>

            <Menu.Item name='help'>
                Корзина &nbsp;(<b>0</b>)
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default MenuComponents;