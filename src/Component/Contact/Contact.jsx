import React,{useState,useRef} from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser';
// import { BsFillTelephoneFill} from 'react-icons/';

export default function Contact() {

 const form = useRef();
  const [name,setname] =useState("");
  const [number,setnumber] =useState("");
  const [email,setemail] =useState("");
  const [subject,setsubject] =useState("");
  const [textarea,settextarea] =useState("");
  const ename=(event)=>{ setname(event.target.value); }
  const enumber=(event)=>{ setnumber(event.target.value); }
  const eemail=(event)=>{ setemail(event.target.value); }
  const esubject=(event)=>{ setsubject(event.target.value); }
  const etextarea=(event)=>{ settextarea(event.target.value); }
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm("service_g0ljg36","template_bbsfoii", form.current, "wm03_iaKbW0nr-302")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setnumber('');
        settextarea('');
        setname('');
        setemail("");
        setsubject("");
        alert("You data is submmited succesfully");

    };
    return (
    <>
        <section className="contact" id="contact">
          <div className="main">
            <h3>CONTACT US</h3>
            </div>
        <div className="Detail">
          <div className="left">
           <p>Nasim Alam</p>
           <p>React Js Devloper</p>
           <p>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
           <button className='btn_shadow'>
            <a href="tel:+917654182972"><i className="fa-solid fa-phone"></i></a> 
            </button>
            <button className='btn_shadow'>
                      <a href="http://www.linkedin.com/in/nasim-alam-a3a57220a"><i className="fab fa-linkedin-in"></i></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href="https://github.com/alamnasim492/alamnasim492.git">
                      <i className="fab fa-github"></i></a>
                    </button>
                     <button className='btn_shadow'>
                      <a href="https://goo.gl/maps/xHSVNiryNq7D6QUU7">
                      <i className="fa-solid fa-location-dot"></i></a>
             </button>
          </div>
           <div className="right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text"placeholder="Full Name" name='fullname'onChange={ename} value={name} className="name"/><br/>
              <input type="email"placeholder="Email" name='email'onChange={eemail}value={email} />
              <input type="number"placeholder="Phone Number"name='number'onChange={enumber} value={number}/><br/>
               <input type="textarea"name="textarea" onChange={etextarea}value={textarea} className="textarea"></input>
              <button type="sumbit" id="btn">Sumbit</button>
            </form>
          </div>
        </div>
          
    </section>
        
    </>
  )
}