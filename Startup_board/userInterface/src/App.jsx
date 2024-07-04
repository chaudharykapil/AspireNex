import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './screens/Homepage'
import Header from './screens/components/Header'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import CreateBlog from './screens/createBlog'
import BlogPage from './screens/BlogPage'

function App() {
  const curruser = localStorage.getItem("curr_user")
  return (
    <BrowserRouter>
      <Routes >
        
        <Route path='/' Component={Homepage} />
        <Route path='/user/register' Component={SignupScreen} />
        <Route path='/user/login' Component={LoginScreen} />
        <Route path='/user/write' Component={CreateBlog} />
        <Route path='/blog/:id' Component={BlogPage} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
