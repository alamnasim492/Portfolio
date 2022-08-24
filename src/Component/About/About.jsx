import React from "react";
import skill1 from "../Image/skill1.jpg"
import skill2 from "../Image/skill2.jpg"
import skill3 from "../Image/skill3.jpg"
import pic from "../Image/pic.jpg"
import "./About.css"


export default function SKill(){
    return (
        <>
            <section className="About" id="about">
                    <div className="head">
                       <h3>MY SKILLS</h3>
                     </div>
                       <div className="main">   
                       <img src={skill1} alt="" />
                       <img src={skill2} alt="" />
                       <img src={skill3} alt="" />
                       <img src={skill2} alt="" />
                    </div>   
                   <div className="main">
                    <h3>ABOUT ME</h3>
                    </div>
                    <div className="ab">   
                       <p className="left">Hello! My name is Nasim Alam and I enjoy
                         creating things that live on the internet. My interest in web
                         development and coding  Now i am a 4th year student of Bechelor of Engineering in Electronics and communication Engineering from SARVEPALLI RADHAKRISHANA University and my passing year is 2023.looking internship/Job on my skill, also my diploma in engineering (EC) is completed from JAMIA MILLIA ISLAMIA  University in 2020. I also recently launched a News app with React Js. </p> 
                       <div className="right">
                       <img src={pic} alt="" srcset=""className="img1"/></div> 
                    </div>
               
                        
            </section>
            </>
    )
}