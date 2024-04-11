import React from 'react'
import Iframe from 'react-iframe'

import './chatbot.css'

export const Chatbot = () => {
    return (
        <>
            <div className='chatbot-container'>
                <Iframe 
                    url='https://chatbot-for-ott.netlify.app/'
                    width='100%'
                    height='600px'
                />
            </div>
        </>
    )
}