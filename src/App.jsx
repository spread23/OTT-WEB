//Importing React-Components
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom' 

//Importing components
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { About } from './routes/about/About'
import { Plans } from './routes/plans/Plans'
import { LookingForJob } from './routes/lookingForJob/LookingForJob'
import { LookingForPersonal } from './routes/lookingForPersonal/LookingForPersonal'
import { Login } from './routes/login/Login'

//Importing sub-routes-components
import { Vacants } from './components/vacants/Vacants'
import { Chatbot } from './components/chatbot/Chatbot'
import { Profile } from './components/profile/Profile'
import { Home } from './components/home/Home'

export const App = () => {
    return (
        <>
            <Navbar />

            <Routes>

                <Route path='/' element={<About />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/plans' element={<Plans />}></Route>
                <Route path='/lookingForJob/*' element={<LookingForJob />}>
                    <Route path='vacants' element={<Vacants />}></Route>
                    <Route path='chatbot' element={<Chatbot />}></Route>
                    <Route path='profile' element={<Profile />}></Route>
                    <Route path='home' element={<Home />}></Route>
                </Route>
                <Route path='/lookingForPersonal' element={<LookingForPersonal />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>

            </Routes>

            <Footer />

        </>
    )
}