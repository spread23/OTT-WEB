import React from 'react'
import { Outlet, NavLink } from 'react-router-dom' 

import './profilePersonal.css'

export const ProfilePersonal = () => {
    return (
        <>
            <div className='profile-personal-container'>
                <NavLink to='create-vacant' className={({isActive}) => (isActive ? 'over-profile' : '')}>Crear vacante</NavLink>
                <NavLink to='my-vacants' className={({isActive}) => (isActive ? 'over-profile' : '')}>Mis vacantes</NavLink>
            </div>
            <div className='container-profile-vacants'>
                <Outlet/>
            </div>
        </>
    )
}