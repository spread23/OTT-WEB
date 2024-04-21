import React from 'react'

import './candidates.css'
import profileImage from '../../assets/profile.png'

export const Candidates = () => {
    return (
        <>
            <div className='candidates-container'>
                <section className='candidates'>
                    <article className='candidate'>
                        <div className='title-candidate'>
                            <img className='profile-image' src={ profileImage } alt="avatar-candidate" />
                            <h6 className='name-candidate'>Nombre y apellido</h6>
                            <p className='company'>Empresa</p>
                        </div>
                        <div className='talents-candidate'>
                            <h6 className='title-talents'>Talentos</h6>
                            <p className='talent-candidate'>Copywriting</p>
                            <p className='talent-candidate'>Edicion de video</p>
                            <p className='talent-candidate'>Manejo de redes</p>
                        </div>
                        <div className='info-candidate'>
                            <div className='experience-candidate'>
                                <h6 className='years-experience'>Años de experincia</h6>
                                <p>5 Años</p>
                            </div>
                            <div className='type-job'>
                                <h6 className='title-type-job'>Disponibilidad</h6>
                                <p>Trabajo presencial</p>
                                <p>Trabajo full time</p>
                                <p>Trabajo remoto</p>
                            </div>
                            <button className='interview'>Entrevistar</button>
                            <button className='curriculum'>Ver curriculum</button>
                        </div>
                    </article>

                    <article className='candidate'>
                        <div className='title-candidate'>
                            <img className='profile-image' src={ profileImage } alt="avatar-candidate" />
                            <h6 className='name-candidate'>Nombre y apellido</h6>
                            <p className='company'>Empresa</p>
                        </div>
                        <div className='talents-candidate'>
                            <h6 className='title-talents'>Talentos</h6>
                            <p className='talent-candidate'>Copywriting</p>
                            <p className='talent-candidate'>Edicion de video</p>
                            <p className='talent-candidate'>Manejo de redes</p>
                        </div>
                        <div className='info-candidate'>
                            <div className='experience-candidate'>
                                <h6 className='years-experience'>Años de experincia</h6>
                                <p>5 Años</p>
                            </div>
                            <div className='type-job'>
                                <h6 className='title-type-job'>Disponibilidad</h6>
                                <p>Trabajo presencial</p>
                                <p>Trabajo full time</p>
                                <p>Trabajo remoto</p>
                            </div>
                            <button className='interview'>Entrevistar</button>
                            <button className='curriculum'>Ver curriculum</button>
                        </div>
                    </article>

                    <article className='candidate'>
                        <div className='title-candidate'>
                            <img className='profile-image' src={ profileImage } alt="avatar-candidate" />
                            <h6 className='name-candidate'>Nombre y apellido</h6>
                            <p className='company'>Empresa</p>
                        </div>
                        <div className='talents-candidate'>
                            <h6 className='title-talents'>Talentos</h6>
                            <p className='talent-candidate'>Copywriting</p>
                            <p className='talent-candidate'>Edicion de video</p>
                            <p className='talent-candidate'>Manejo de redes</p>
                        </div>
                        <div className='info-candidate'>
                            <div className='experience-candidate'>
                                <h6 className='years-experience'>Años de experincia</h6>
                                <p>5 Años</p>
                            </div>
                            <div className='type-job'>
                                <h6 className='title-type-job'>Disponibilidad</h6>
                                <p>Trabajo presencial</p>
                                <p>Trabajo full time</p>
                                <p>Trabajo remoto</p>
                            </div>
                            <button className='interview'>Entrevistar</button>
                            <button className='curriculum'>Ver curriculum</button>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}