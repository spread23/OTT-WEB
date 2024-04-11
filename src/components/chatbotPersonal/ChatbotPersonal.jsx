import React from 'react'
import Iframe from 'react-iframe'

import './chatbotPersonal.css'

export const ChatbotPersonal = () => {
    return (
        <>
            <div className='chatbot-container-personal'>
                <Iframe 
                    url='https://chatbot-for-ott.netlify.app/'
                    width='100%'
                    height='600px'
                />
            </div>
        </>
    )
}