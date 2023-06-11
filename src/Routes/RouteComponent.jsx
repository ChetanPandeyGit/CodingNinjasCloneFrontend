import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'
import Scholarship from '../Pages/Scholarship'
import Community from '../Pages/Community'
import Practice from '../Pages/Practice'
import Dashboard from '../Components/Dashboard'
import UserDetail from '../Components/UserDetail'

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/scholarship" element={<Scholarship/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/practice" element={<Practice/>} />
      <Route path="/dashboard/:userId" element={<Dashboard/>} />
        <Route path="/user/:userId" element={<UserDetail/>} />       
    </Routes>
  )
}

export default RouteComponent
