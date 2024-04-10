import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import './lookingForPersonal.css'
import { FaAddressCard } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa'

export const LookingForPersonal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className='nav-personal'>
                <div className='container-personal'>
                    <button className='log-out-personal'>Cerrar Sesion</button>
                        <div className={`nav-toggle-personal ${isOpen && 'open'}`}  onClick={() => setIsOpen(!isOpen)}>
                            <span></span><span></span><span></span>
                        </div>
                    <ul className={`personal-buttons ${isOpen && 'open'}`}>
                        <li className='personal-items-button'>
                            <NavLink
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-personal' to='candidates'>Mis candidatos <FaAddressCard className='personal-items'/>
                            </NavLink>
                        </li>
                        <li className='personal-items-button'>
                            <NavLink 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-personal' to='chatbot'>Chatbot <FaRobot className='personal-items'/>
                            </NavLink>
                        </li>
                        <li className='personal-items-button'>
                            <NavLink 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-personal' to='profile'>Mi perfil <FaAddressBook className='personal-items'/>
                            </NavLink>
                        </li>
                        <li className='personal-items-button'>
                            <NavLink 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-personal' to='home'>Inicio <FaHouseUser className='personal-items'/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container-oulet-personal'>
                <Outlet />
            </div>
        </>
    )
}