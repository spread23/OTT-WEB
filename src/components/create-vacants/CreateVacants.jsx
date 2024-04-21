import React from 'react'

import './createVacants.css'

export const CreateVacants = () => {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='create-vacant-container'>
                <div className='form-create-vacant'>
                    <h2 className='title-create-vacant'>
                        Encuentra el talento que necesitas para tu proyecto
                    </h2>
                    <form onSubmit={onSubmit} className='form-create'>
                        <div className='form-input-create'>
                            <label htmlFor="name">Nombre de la vacante <strong>*</strong></label>
                            <input type="text" name='name' placeholder='de que trata la vacante...' />
                        </div>

                        <div className='form-input-create'>
                            <label htmlFor="place">Desde que lugar buscas el talento <strong>*</strong></label>
                            <input className='place-create' type="text" name='place' placeholder='pais...' />
                            <input className='place-create' type="text" name='place' placeholder='ciudad...' />
                        </div>

                        <div className='form-input-create'>
                            <label htmlFor="description">Description de la vacante <strong>*</strong></label>
                            <textarea type="text" name='description' placeholder='descripcion...' />
                        </div>

                        <div className='form-input-create'>
                            <label htmlFor="type-job-personal">Tipo de trabajo <strong>*</strong></label>
                            <input type="checkbox" />Remoto
                            <input type="checkbox" />Presencial
                            <input type="checkbox" />Hibrido
                        </div>
                        <button className='btn-form-create'>Crear vacante</button>
                    </form>
                </div>
            </div>
        </>
    )
}