import React from "react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home"
import Project from "./Component/Project/Project";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer"


import "./App.css"

export default function App() {
    return (
        <>
        <Header/>
        <Home/>
        <Project/>
        <About/>
        <Contact/>
        <Footer/>
        </>
    )
}