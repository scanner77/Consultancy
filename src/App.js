import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Signup from './components/SignUp/Signup';
import MyAccount from './components/Account/MyAccount';
import Project from './components/Projects/Project';
// import Contact from './components/Contact/Contact';
// import ProjectGrid from './components/Projects/ProjectGrid';
// import Post from './components/Posty/Post';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path = "/" exact element = {<Home/>} />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/signup" element = {<Signup/>} />
        <Route path = "/myaccount" element = {<MyAccount/>} />
        <Route path = "/project" element = {<Project/>}/>  
        <Route path = "/contact" element = {<Signup />}/>  
      </Routes>
     
     </Router>
    </>
  );
}



export default App;