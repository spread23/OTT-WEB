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

//importing sub-routes-components for personal
import { Candidates } from './components/candidates/Candidates'
import { ChatbotPersonal } from './components/chatbotPersonal/ChatbotPersonal'
import { ProfilePersonal } from './components/profilePersonal/ProfilePersonal'
import { HomePersonal } from './components/homePersonal/HomePersonal'

//importing sub-routes-components for profilePersonal
import { MyVacants } from './components/my-vacants/MyVacans'
import { CreateVacants } from './components/create-vacants/CreateVacants'

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
                <Route path='/lookingForPersonal/*' element={<LookingForPersonal />}>
                    <Route path='candidates' element={<Candidates />}></Route>
                    <Route path='chatbot' element={<ChatbotPersonal />}></Route>
                    <Route path='profile/*' element={<ProfilePersonal />}>
                        <Route path='my-vacants' element={<MyVacants></MyVacants>}></Route>
                        <Route path='create-vacant' element={<CreateVacants></CreateVacants>}></Route>
                    </Route>
                    <Route path='home' element={<HomePersonal />}></Route>
                </Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>

            </Routes>

            <Footer />

        </>
    )
}