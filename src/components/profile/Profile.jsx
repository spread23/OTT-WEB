import React from 'react'

import './profile.css'
import ImageProfile from '../../assets/profile.png'

export const Profile = () => {
    return (
        <>
            <div className='container-profile'>
                <div className='card-profile'>
                    <div className='title-profile'>
                        <div className='profile-image-container'>
                            <img className='image-profile-content' src={ ImageProfile } alt="image-profile" />
                        </div>
                        <div className='info-title-profile'>
                            <h2 className='name-profile'>Nombre y Apellido</h2>
                            <p className='place-profile'>Colombia, Medellin</p>
                        </div>
                    </div>
                    <div className='talents'>
                        <h4 className='title-talents'>Talentos</h4>
                        <div className='container-talents'>
                            <h6 className='talent-box'>Copywriting</h6>
                            <h6 className='talent-box'>Edisión de video</h6>
                            <h6 className='talent-box'>Manejo de redes</h6>
                        </div>
                    </div>
                    <div className='info-profile'>
                        <div className='experience'>
                            <h4 className='years'>Años de experiencia</h4>
                            <p>5 años</p>
                        </div>
                        <div className='time-job'>
                            <h4 className='time-job-title'>Disponibilidad</h4>
                            <p className='time-job-description'>Trabajo presencial</p>
                            <p className='time-job-description'>Trabajo full-time</p>
                            <p className='time-job-description'>Trabajo remoto</p>
                        </div>
                    </div>
                </div>
                <div className='my-vacants'>
                    <h3 className='vacants-title'>Vacantes a las que estás postulado</h3>
                    <div className='my-vacants-container'>
                        <div className='my-vacant'>
                            <h4 className='name-of-vacant'>Nombre de la vacante <strong>empresa</strong></h4>
                            <p className='state-of-vacant'>convocatoria abierta</p>
                        </div>
                    </div>

                    <div className='my-vacants-container'>
                        <div className='my-vacant'>
                            <h4 className='name-of-vacant'>Nombre de la vacante <strong>empresa</strong></h4>
                            <p className='state-of-vacant'>convocatoria abierta</p>
                        </div>
                    </div>

                    <div className='my-vacants-container'>
                        <div className='my-vacant'>
                            <h4 className='name-of-vacant'>Nombre de la vacante <strong>empresa</strong></h4>
                            <p className='state-of-vacant'>convocatoria abierta</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}