import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import routes from '../../routes.js';
import '../../assets/css/Navbar.css';

export default function Navbar() {
    const [sidebar, setSideBar] = useState(false);
    const showSidebar = () => setSideBar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <MenuIcon onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <CloseIcon />
                    </Link>
                    </li>
                    {routes.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    );
                    })}
                </ul>
            </nav>
        </>
    )
}