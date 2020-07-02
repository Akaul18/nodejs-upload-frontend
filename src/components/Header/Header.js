import React, { useState } from 'react'
import './Header.scss'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [activeItem, setActiveItem] = useState('Hi Username')

    const handleItemClick = (e, { name }) => setActiveItem(name)

    // const { activeItem } = this.state

    return (
        <div className="menu-container">
            <Menu pointing secondary color="teal">
                <Menu.Item
                    name="home"
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/"
                />
                <Menu.Item
                    name="upload"
                    active={activeItem === 'upload'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/upload"
                />
                <Menu.Item
                    name="post"
                    active={activeItem === 'post'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/post"
                />
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Input icon="search" placeholder="Search..." />
                    </Menu.Item>
                    <Menu.Item
                        name="login"
                        active={activeItem === 'login'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/login"
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header
