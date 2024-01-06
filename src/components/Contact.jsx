import React from 'react';
import image from "../icons/email-icon.svg"
import image2 from "../icons/l.svg"
import image3 from "../icons/ge.svg"
import image4 from "../icons/i.svg"
import image5 from "../icons/le.svg"
import image6 from "../icons/g.svg"
function Contact() {
  return (
    <div className='contact-page'>
      <header>
        <h1 className='con'>Contact Me</h1>
      </header>

      <section className="contact-info">
      <div className="contact-item"><p className='link'>
         <a className='link' href="mailto:sachinkc440@gmail.com">
        <img className="co"src={image} alt="Background" /><br/>sachinkc440@gmail.com</a> 
        </p></div>
        <div className="contact-item">
        <p><a className='link' href="https://www.linkedin.com/in/sachin-bb4936272/">
        <img className="co"src={image2} alt="Background" /><br/>   linkedin.com</a>
        </p></div>
        <div className="contact-item">
        <p><a className='link' href="https://github.com/Sachin76-NITH">
        <img className="co"src={image6} alt="Background" />  <br/> Sachin76-NITH</a>
        </p></div>
        <div className="contact-item">
        <p><a className='link' href="https://www.instagram.com/sachin_choudhary22_/">
        <img className="co"src={image4} alt="Background" /> <br/>  sachin_choudhary22_</a>
        </p></div>
        <div className="contact-item">
        <p><a className='link' href="https://auth.geeksforgeeks.org/user/sachinkc440/practice">
        <img className="co"src={image3} alt="Background" /> <br/> sachinkc440</a>
        </p></div>
        <div className="contact-item">
        <p><a className='link' href="https://leetcode.com/SACHIN_76/">
        <img className="co"src={image5} alt="Background" /> <br/>  SACHIN_76</a>
        </p></div>
      </section>
    </div>
  );
}

export default Contact;
