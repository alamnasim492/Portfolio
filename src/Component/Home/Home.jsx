import React from "react";
import { Typewriter} from 'react-simple-typewriter'
// import home from"../Image/home.png"
import "./Home.css"

export default function Home() {
    return (
    <>
        
      <section className="home" id="home">
        <div className="container1">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m a <span>Nasim Alam </span>
            </h1>
            <h2>
            
              <span>
                <Typewriter words={[ "Front End Developer."]} loop cursor cursorStyle='|' typeSpeed={60} deleteSpeed={40} delaySpeed={1000} />
                {/* <h2> a Front End Developer</h2> */}
              </span>
            </h2>
            <p className="p"> Organised and motivated employee eager to apply time management and organization skills in various enviroments. Seeking  entry-level opportunities to expand skills while faclliting company growthI use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
         </div>          
          <div className="button">
            <button><a href="Mailto:alamnasim492@gmail.com">Hire Me</a></button>
             <button><a href="Nasim_updated.pdf"download="Nasim_updated.pdf">Resume</a></button>
          </div>
      </section>
    </>
  )
}