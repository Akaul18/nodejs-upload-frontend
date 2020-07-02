import React, { useState, useContext } from 'react'
import './Header.scss'
import { AuthContext } from '../../context/authContext'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const pathname = window.location.pathname
    const path = pathname === '/' ? 'home' : pathname.substring(1)
    const [activeItem, setActiveItem] = useState(path)

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const menuBar = user ? (
        <Menu pointing secondary size="massive" color="teal">
            <Menu.Item name={user} active as={Link} to="/" />
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
                    name="logout"
                    onClick={logout}
                    // as={Link}
                    // to="/login"
                />
            </Menu.Menu>
        </Menu>
    ) : (
        <Menu pointing secondary size="massive" color="teal">
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
    )

    return <div className="menu-container">{menuBar}</div>
}

export default Header
