import React from 'react'

import './about.css'
import about_image from '../../assets/quienes-somos.jpg'
import { FaBell } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa'

export const About = () => {
    return (
        <>
            <section className='about-us'>
                <article className='about-us-item'>
                    <div className='info-article'>
                        <h1 className='title-article'>Nuestros servicios</h1>
                        <p className='description-article'>
                            Ofrece Tu Talento es una plataforma diseñada 
                            para promover el networking de profesionales a 
                            través del intercambio y desarrollo de talento a 
                            nivel mundial.
                            <br /><br />
                            Nuestro objetivo es ayudarte a crecer tu mercado, 
                            llegar a nuevos clientes, ampliar tu alcance y exponer 
                            tus habilidades a nuevos retos. Ya sea que seas un talento 
                            experto o novato, tengas un trabajo actualmente o trabajes
                            de forma independiente.
                        </p>
                    </div>
                    <div className='elements'>
                        <img className='about-image' src={ about_image } alt="about-image" />
                    </div>
                </article>

                <article className='about-us-item'>
                    <div className='info-article'>
                        <h1 className='title-article'>
                            Los principales servicios que ofrecemos en nuestra
                            plataforma son: 
                        </h1>
                        <div className='icons'>
                            <div className='items-fa'>
                                <FaBell className='bell' />
                                <h3 className='title-bell'>Publica tu talento</h3>
                                <p className='description-bell'>
                                    Un directorio en línea que te permite exponer 
                                    el valor real que aportas a tus clientes 
                                    mediante fotos, videos, PDF’s y testimonios.</p>
                            </div>
                            <div className='items-fa'>
                                <FaSearch className='bell' />
                                <h3 className='title-bell'>Busca talento</h3>
                                <p className='description-bell'>
                                    Una opción para investigar y reclutar el mejor 
                                    talento en el mercado de manera anónima y eficiente.
                                </p>
                            </div>
                            <div className='items-fa'>
                                <FaRetweet className='bell' />
                                <h3 className='title-bell'>Canjea tu talento</h3>
                                <p className='description-bell'>
                                    Disponible para nuestros miembros Talento Pro y 
                                    Talento Oro, un directorio exclusivo que te permite 
                                    acceso a las mejores ofertas de servicios y productos 
                                    a través de canjes e intercambios.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className='about-us-item'>
                    <div className='info-article'>
                        <h1 className='title-article'>¿Qué es un talento? </h1>
                        <p className='description-article'>
                        Al registrarte es muy importante listar tus talentos.
                        <br /><br />
                        Qué es un talento? En OTT definimos un talento como una habilidad, 
                        destreza o capacidad para realizar un trabajo o servicio  que beneficie
                        a otras personas, organizaciones o comunidades.
                        <br /><br />
                        OJO : Tu carrera o tu trabajo actual NO necesariamente es tu único talento. 
                        Ejemplo: Manuel estudió finanzas. Trabaja en un banco. Pero tiene un talento
                        con la cocina italiana. También le encanta escribir y editar poesía. 
                        Finalmente sus jefes y compañeros dicen que es un “crack” con hojas de Excel.
                        <br /><br />
                        Manuel tiene 3 talentos: Cocinar, Escribir/Editar Literatura y Trabajar 
                        Hojas de Excel. En Ofrece Tu Talento, Manuel puede decidir listar todos o 
                        algunos de estos 3 talentos. Al llenar su perfil, Manuel tiene la habilidad 
                        de subir fotos, videos, documentos o testimonios que validen su destreza en 
                        estos talentos.
                        </p>
                    </div>
                </article>

                <article className='about-us-item'>
                    <div className='info-article'>
                        <h1 className='title-article'>¿Para qué creamos Ofrece Tu Talento? </h1>
                        <p className='description-article'>
                        Estamos seguros que nuestros principales servicios te 
                        benefician de la siguiente manera:
                        <br /><br />
                        1. Tendrás una comunidad tanto en persona como en línea que te 
                        permite exponerte a grupos profesionales y clientes más allá de 
                        tu círculo actual. Esta comunidad te permitirá crecer y
                        desarrollar tus habilidades.
                        <br /><br />
                        2. Estarás expuesto a nuevas oportunidades de negocio,
                        ya sea en persona o virtualmente, a través del servicio
                        Canjea Tu Talento que abre la posibilidad de canjear e 
                        intercambiar tus servicios sin comisión o porcentaje de 
                        intermediación.
                        <br /><br />
                        3. Accederás a nuevos mercados, será más conveniente que
                        nunca a través de nuestra extensa base de datos de contactos.
                        Adicionalmente, nuestros eventos en sitio promoverán el 
                        libre intercambio de servicios sin importar las fronteras.
                        Es importante mencionar que Ofrece Tu Talento te ofrece
                            ampliar tu mercado, sin embargo promovemos que cada 
                            usuario se acate a la leyes laborales y fiscales de 
                            cada país. Ya sea el país donde labore, donde reside 
                            o donde fue entregado el servicio; el manejo fiscal y
                            legal es responsabilidad de cada usuario .
                        <br /><br />
                        ¿Por qué creemos en los canjes?
                        <br /><br />
                        Muchos piensan que el canje o intercambio es un sistema 
                        arcaico y obsoleto. Nosotros creemos que cada profesional 
                        es una fábrica de ideas y creatividad dándole cabida a ser 
                        remunerado por sus servicios sin necesidad del dinero. Pudiendo 
                        intercambiar sus servicios con otro profesional que utilice 
                        Ofrece Tu Talento.
                        <br /><br />
                        El mundo está evolucionando hacia una economía tanto circular 
                        como colaborativa. El canje te permite navegar seguro en este
                        mundo dándole valor a tus creaciones más allá del dinero .
                        <br /><br />
                        Sin embargo, es importante destacar que en Ofrece Tu Talento 
                        el canje es opcional. En casos donde el talento desee un pago en
                        su moneda local, exhortamos a que la transacción suceda entre 
                        los usuarios de manera independiente. Al canjear tu talento estás
                        abriendo la puerta a recibir infinidad de beneficios con el único 
                        costo de tu tiempo y esfuerzo. Tu talento es único y el mundo lo necesita .
                        </p>
                    </div>
                </article>
            </section>
        </>
    )
}