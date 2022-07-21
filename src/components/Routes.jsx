import React from 'react'
import {Routes,Route, Link} from "react-router-dom"
import FooterForAll from './FooterForAll'
import GetTips from './getTips'
import Home from './Home'
import Login from './Login'
import SignUp from './Signup'
import Story from "./Story"

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/gettips" element={<GetTips />} />
            <Route path="/footerforall" element={<FooterForAll />} />
            <Route path="/story" element={<Story />} />

             
        </Routes>
    </div>
  )
}

export default Routing