import React, { useEffect, useRef } from 'react'
import './intro.scss';
import { init } from 'ityped'


function Intro() {
   
  const textRef =useRef()

   useEffect(() => {
    init(textRef.current, { showCursor: false,
      backDelay:  1500,
      backSpeed :60,
      showCursor: true,
       strings: ['FULLSTACK JS Developer', 'MERN Developer' ] })
   },[])

  return (
    <div className="intro" id="intro">
       <div className="left">
           <div className="imgContainer">
               <img src="assets/rawda.png" alt="" />
             </div>
       </div>
       <div className="right">
             <div className="wrapper">
               <h2>Hi There, I'm</h2>
               <h1> Raoudha DAIKHI</h1>
               <h3> Junior <span ref={textRef}></span></h3>
             </div>
             <a href="#portfolio">
               <img src="assets/down.png" alt="" />
              </a>
       </div>
    </div>
  )
}

export default Intro
