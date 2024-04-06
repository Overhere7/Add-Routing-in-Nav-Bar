import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from './component/About';
import SignIn from './component/Signin';
import Contact from './component/Contact';

export default function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Signin' element={<SignIn/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}