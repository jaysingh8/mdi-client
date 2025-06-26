import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayout = () => {
  
 
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
