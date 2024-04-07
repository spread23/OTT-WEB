import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'
import logo from '../../assets/logo_azul.png'

import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaStripe } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'

export const Footer = () => {
    return (
        <>
            <footer className='foot'>
                <div className='logos'>
                    <div className='logo'>
                        <Link to='/'><img className='logo-image' src={ logo } alt="logo" /></Link>
                        <p className='copy'>&copy; Todos los derechos reservados 2024</p>
                    </div>
                    <div className='social'>
                        <p>Síguenos</p>
                        <div className='social-logos'>
                            <Link to='/'><FaInstagram className='insta-item item' /></Link>
                            <Link to='/'><FaFacebook className='face-item item' /></Link>
                            <Link to='/'><FaLinkedin className='link-item item' /></Link>
                            <Link to='/'><FaYoutube className='youtube-item item' /></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='info'>
                    <div className='info-item'>
                        <p>Como funciona</p>
                        <p>¿Qué es OTT?</p>
                        <p>Planes</p>
                    </div>
                    <div className='info-item'>
                        <p>Busco trabajo</p>
                        <p>Busco personal</p>
                        <p>blog</p>
                    </div>
                    <div className='info-item'>
                        <p>Iniciar sesion</p>
                        <p>Regístrate</p>
                        <p>Términos & condiciones</p>
                    </div>
                    <div className='info-item'>
                        <p>¿Desea reportar un talento?</p>
                        <p>
                            Nos gustaria conocer cualquier
                            situación en donde un miembro
                            de nuestra comunidad no cumplió
                            con los estándares de comportamiento
                            y orden de la comunidad.

                        </p>
                    </div>
                </div>
                <div className='methods'>
                    <div className='company-info'>
                        <p>
                            Ciudad de Panamá, calle 56 este,
                            República de panamá.

                        </p>
                        <p>atención@ofrecetutalento.com</p>
                    </div>
                    <div className='payments'>
                        <FaStripe />
                        <FaCcVisa />
                        <FaCcMastercard />
                    </div>
                </div>
            </footer>
        </>
    )
}