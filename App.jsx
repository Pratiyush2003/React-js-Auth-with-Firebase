import React from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import {BrowserRouter as Router , 
        Routes,
        Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/register' element = {<Register/>}/>
            <Route path='/home' element = {<Home/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
