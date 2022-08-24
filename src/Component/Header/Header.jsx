import React,{useState} from "react";
import "./Header.css"
// import logo from "../Image/logo.jpg"
import{FaBars}from "react-icons/fa"
import {ImCross}from "react-icons/im"


export default function Header() {
    const[Mobile,setMobile]=useState(false)
    return (
        <>
            <section className="header">
          
                <div className="container">
                  <ul className= {Mobile ?"nav-links-mobile":"nav-links"}onClick={()=>setMobile(false)}>
                     <li><a href="#home">Home</a></li>
                     <li><a href="#project">project</a></li>
                     <li><a href="#about">about</a></li>
                     <li><a href="#contact">contact</a></li>
                   </ul>
                    <button className="mobile-menu-icon"onClick={()=>setMobile(!Mobile)}>{Mobile?<ImCross/>: <FaBars/>}
           
                   </button>
                </div>
            </section>
            
            
           
        </>
    )
}