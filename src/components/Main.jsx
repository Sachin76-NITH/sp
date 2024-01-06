import React from 'react'
import image from "../images/port.JPG"
function Main() {
  return (
    <div className='main'>
      <div className='left'>
        <div className='left-para1'>"Tech Explorer: Navigating the Front-End and Back-End Galaxies as a Novice Full Stack Trailblazer"</div>
       <div className='left-para'>
Hey! I'm SACHIN, a tech enthusiast diving headfirst into the exciting world of coding, both on the front-end and back-end. Picture me as a digital architect – I sculpt the visual wonders you see on websites (front-end magic) and then venture into the backend realm to ensure everything runs seamlessly.

As a coding novice, I'm on a thrilling quest to crack the code, especially in creating user-friendly websites. In the backend arena, I'm teaming up with Node.js, my trusty coding sidekick. I'm not just about functionality; I'm all about crafting web experiences that bring a smile to users' faces.

Beyond the lines of code, I'm a dedicated gamer. From epic battles to solving in-game puzzles, I find joy in the virtual realms. Eager to take on new challenges, I'm on the lookout for opportunities to level up my skills and contribute to exciting projects. Let's team up and create some tech magic!

Feel free to connect with me at <a className='mail' href='https://mail.google.com/?login'>sachinkc440@gmail.com</a> or hit me up at +91-9817795536. Ready to embark on this coding adventure together! 🎮✨
      </div>
      </div>
      <div className='right'>
        <img className='right-image animate__backInDown' src={image} alt="Background" />
      </div>
    </div>
  )
}

export default Main
