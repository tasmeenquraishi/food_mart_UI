import React from 'react'
import './App.css'

import {Routes,Route, Link} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Products from './Products'
import AddSeller from './AddSeller'
import Login from './Login'

function App() {
 return (
    <>
<Navbar />
     <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/products'element={<Products/>}/>
        <Route path='/addseller'element={<AddSeller/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/navbar'element={<Navbar/>}/>
     </Routes>
    </>
  )
}

export default App;