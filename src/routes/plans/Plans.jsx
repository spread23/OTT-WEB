import React from 'react'

import './plans.css'

export const Plans = () => {
    return (
        <>
            <div className='plans-container'>
                <h1 className='title-plans'>¡Elige el plan ideal para cualquier presupuesto!</h1>
                <p className='description-plans'>
                    Ya sea que quieras canjear talentos para crecer 
                    tu idea de negocio o trabajar con empresas y emprendedores 
                    en sus proyectos. Tenemos un plan que se ajusta a tu visión.
                </p>
                <div className='buttons-plans'>
                    <button className='button-plans'>Mensual</button>
                    <button className='button-plans'>Trimestral</button>
                    <button className='button-plans'>Anual</button>
                </div>
            </div>
        </>
    )
}