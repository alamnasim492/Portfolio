import React from "react";
import "./Project.css"
import skill1 from"../Image/skill1.jpg"

export default function Project() {
  return(
    <>
      <div className="project"id="project">
         <h3>Project</h3>
    </div>
      <div className="main">
        <div className="box"><img src={skill1 }className="img2"/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora.<a href="http://www google.com" id="a">Read me!!!</a></div>
        <div className="box"><img src={skill1 }className="img2"/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora.<a href="http://www google.com" id="a">Read me!!!</a></div>
        <div className="box"><img src={skill1 }className="img2"/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora.<a href="http://www google.com" id="a">Read me!!!</a></div>
        <div className="box"><img src={skill1 }className="img2"/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora.<a href="http://www google.com" id="a">Read me!!!</a></div>
        <div className="box"><img src={skill1 }className="img2"/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora.<a href="http://www google.com" id="a">Read me!!!</a></div>
        <div className="box"><img src={skill1 }className="img2"/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora.<a href="http://www google.com" id="a">Read me!!!</a></div>
    </div>
    </>
  )
}