import React from 'react'

import './vacants.css'

export const Vacants = () => {
    return (
        <>
            <div className='table-container'>
                <table className='table-vacants'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estatus</th>
                            <th>Aplicantes</th>
                            <th>Fecha de publicacion</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre de la vacante <br/><strong>Empresa</strong></td>
                            <td className='vacant-status-red'>Convocatoria abierta</td>
                            <td>14 talentos</td>
                            <td>19/07/2022</td>
                            <button className='btn-vacant'>Aplicar a la vacante</button>
                            <button className='vacant-option'>...</button>
                        </tr>

                        <tr>
                            <td>Nombre de la vacante <br/><strong>Empresa</strong></td>
                            <td className='vacant-status-green'>Convocatoria abierta</td>
                            <td>14 talentos</td>
                            <td>19/07/2022</td>
                            <button className='btn-vacant'>Aplicar a la vacante</button>
                            <button className='vacant-option'>...</button>
                        </tr>

                        <tr>
                            <td>Nombre de la vacante <br/><strong>Empresa</strong></td>
                            <td className='vacant-status-red'>Convocatoria abierta</td>
                            <td>14 talentos</td>
                            <td>19/07/2022</td>
                            <button className='btn-vacant'>Aplicar a la vacante</button>
                            <button className='vacant-option'>...</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}