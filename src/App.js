import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import MainPage from './pages/MainPage'
import AllProjects from './pages/AllProjects'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={MainPage}></Route>
        <Route path='/projects' Component={AllProjects}></Route>
      </Routes>
    </div>
  )
}
