import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './navbar.css'
import logo from '../../assets/logo.png'
import banner from '../../assets/banner.png'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header>
                <div className='navbar-menu'>
                    <div className='logo'>
                        <Link to='/'><img className='logoImg' src={logo} alt="logo" /></Link>
                    </div>
                    <div className={`nav-toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
                        <span>
                        </span>
                        <span>
                        </span>
                        <span>
                        </span>
                        <p className='menu-description'>Menu</p>
                    </div>
                    <nav className='navbar'>
                        <ul className={`menu ${isOpen && 'open'}`}>
                            <li>
                                <NavLink onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>¿Qué es OTT?</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsOpen(!isOpen)} to='/plans'>Planes</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsOpen(!isOpen)} to='/lookingForJob'>Busco trabajo</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsOpen(!isOpen)} to='/lookingForPersonal'>Busco personal</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsOpen(!isOpen)} to='/login'>Iniciar sesion</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='banner'>
                    <img className='banner-image' src={ banner } alt="banner" />
                </div>
            </header>
        </>
    )
}