import React from 'react'

import './login.css'

export const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='card-login'>
                <div className='form-input'>
                    <h3>Iniciar sesión</h3>
                    <form className='form-login' onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor="email">Correo electrónico</label>
                            <input 
                                className='input-type'
                                type="text" 
                                placeholder='Ingresa tu correo...'
                                name='email' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                className='input-type'
                                type="password" 
                                placeholder='Ingresa tu contraseña...'
                                name='password' />
                        </div>
                        <button className='button' type='submit'>Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </>
    )
}