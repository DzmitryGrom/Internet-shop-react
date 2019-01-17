import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const MenuComponents = () => (

    <Menu>
        <Menu.Item name='browse' >
            Shop books
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup' >
                Summ: &nbsp;<b>0</b> Rub.
            </Menu.Item>

            <Menu.Item name='help'>
                Basket (&nbsp;<b>0</b>)
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default MenuComponents;