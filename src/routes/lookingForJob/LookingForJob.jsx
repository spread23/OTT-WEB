import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import './lookingForJob.css'
import { FaAddressCard } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa'

export const LookingForJob = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className='nav-job'>
                <div className='container-job'>
                    <button className='log-out'>Cerrar Sesion</button>
                        <div className={`nav-toggle-job ${isOpen && 'open'}`}  onClick={() => setIsOpen(!isOpen)}>
                            <span></span><span></span><span></span>
                        </div>
                    <ul className={`job-buttons ${isOpen && 'open'}`}>
                        <li className='job-items-button'>
                            <NavLink
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-job' to='vacants'>Mis vacantes <FaAddressCard className='job-items'/>
                            </NavLink>
                        </li>
                        <li className='job-items-button'>
                            <NavLink 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-job' to='chatbot'>Chatbot <FaRobot className='job-items'/>
                            </NavLink>
                        </li>
                        <li className='job-items-button'>
                            <NavLink 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-job' to='profile'>Mi perfil <FaAddressBook className='job-items'/>
                            </NavLink>
                        </li>
                        <li className='job-items-button'>
                            <NavLink 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='button-job' to='home'>Inicio <FaHouseUser className='job-items'/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container-oulet'>
                <Outlet />
            </div>
        </>
    )
}