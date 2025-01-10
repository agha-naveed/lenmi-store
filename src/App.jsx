import React from 'react'
import Navbar from './Main_Components/Navbar'
import Home from './Main_Components/Home'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}