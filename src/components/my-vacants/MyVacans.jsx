import React from 'react'

import './vacants.css'

export const MyVacants = () => {
    return (
        <>
            <div className='my-vacants-container-personal'>
                <section className='card-my-vacants'>
                    <article className='my-vacant-personal'>
                        <div className='title-my-vacant'>
                            <h6 className='name-vacant'>Nombre de la vacante</h6>
                            <p className='company-vacant'>Empresa</p>
                        </div>
                        <div className='status-vacant'>
                            <h6 className='title-status'>Status</h6>
                            <p className='status-color-red'>Convocatoria abierta</p>
                        </div>
                        <div className='info-vacant'>
                            <div className='info-aplicantes'>
                                <h6 className='title-info-vacant'>Aplicantes</h6>
                                <p>14 talentos</p>
                            </div>
                            <div className='info-date'>
                                <h6 className='date'>Fecha de publicacion</h6>
                                <p className='date-publication'>19/07/2022</p>
                            </div>
                        </div>
                        <div className='candidate-found'>
                            <button className='look-at-candidate'>Ver candidatos</button>
                        </div>
                    </article>

                    <article className='my-vacant-personal'>
                        <div className='title-my-vacant'>
                            <h6 className='name-vacant'>Nombre de la vacante</h6>
                            <p className='company-vacant'>Empresa</p>
                        </div>
                        <div className='status-vacant'>
                            <h6 className='title-status'>Status</h6>
                            <p className='status-color-red'>Convocatoria abierta</p>
                        </div>
                        <div className='info-vacant'>
                            <div className='info-aplicantes'>
                                <h6 className='title-info-vacant'>Aplicantes</h6>
                                <p>14 talentos</p>
                            </div>
                            <div className='info-date'>
                                <h6 className='date'>Fecha de publicacion</h6>
                                <p className='date-publication'>19/07/2022</p>
                            </div>
                        </div>
                        <div className='candidate-found'>
                            <button className='look-at-candidate'>Ver candidatos</button>
                        </div>
                    </article>

                    <article className='my-vacant-personal'>
                        <div className='title-my-vacant'>
                            <h6 className='name-vacant'>Nombre de la vacante</h6>
                            <p className='company-vacant'>Empresa</p>
                        </div>
                        <div className='status-vacant'>
                            <h6 className='title-status'>Status</h6>
                            <p className='status-color-green'>Convocatoria abierta</p>
                        </div>
                        <div className='info-vacant'>
                            <div className='info-aplicantes'>
                                <h6 className='title-info-vacant'>Aplicantes</h6>
                                <p>14 talentos</p>
                            </div>
                            <div className='info-date'>
                                <h6 className='date'>Fecha de publicacion</h6>
                                <p className='date-publication'>19/07/2022</p>
                            </div>
                        </div>
                        <div className='candidate-found'>
                            <button className='look-at-candidate'>Ver candidatos</button>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}