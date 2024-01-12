import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../components/Pages/Home'

import Link1 from '../components/Pages/Link1'


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='link1' element={<Link1/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
