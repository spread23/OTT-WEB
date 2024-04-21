import React from 'react'

import './home.css'

export const Home = () => {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='home-container'>
                <div className='form-home'>
                    <h2 className='home-title'>
                        Encuentra la compañia que este solicitando tus talentos
                    </h2>
                    <form onSubmit={onSubmit} className='form-container'>
                        <div className='input-container'>
                            <label className='title-form' htmlFor="name">Nombre<strong>*</strong></label>
                            <input type="text" name='name' placeholder='Introduce tu nombre...' />
                        </div>

                        <div className='input-container'>
                            <label className='title-form' htmlFor="lastname">Apellido<strong>*</strong></label>
                            <input type="text" name='lastname' placeholder='Introduce tu apellido...' />
                        </div>

                        <div className='input-container'>
                            <label className='title-form' htmlFor="country">Pais<strong>*</strong></label>
                            <input type="text" name='country' placeholder='Introduce tu pais...' />
                        </div>

                        <div className='input-container'>
                            <label className='title-form' htmlFor="talents">Talentos<strong>*</strong></label>
                            <textarea type="text" name='talents' placeholder='introduce tus talentos...' />
                        </div>
                        
                        <label className='label-check title-form' htmlFor="type">Tipo de trabajo</label>
                        <div className='input-container-check'>
                            <input type="checkbox" name='remote' />Remoto
                            <input type="checkbox" name='presencial' />Presencial
                            <input type="checkbox" name='hibrido' />Hibrido
                        </div>

                        <div className='input-container'>
                            <label className='title-form' htmlFor="experience">Años de experiencia<strong>*</strong></label>
                            <input type="number" name='experience' />
                        </div>

                        <button className='submit-form' type='submit'>Crear mi perfil</button>
                    </form>
                </div>
            </div>
        </>
    )
}