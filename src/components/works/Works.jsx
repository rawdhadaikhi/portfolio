import { useState } from 'react';
import './works.scss';

function Works() {

  const [currentSlide ,setCurrentSlide] = useState(0);

  const data = [
    {
      id:'1',
      title :'sweet garden',
      icon :'/assets/code.png',
      desc :' e-commerce website to sell plants and flowers' ,
      img :'/assets/garden.png',
    },
    {
        id:'2t',
        title :'movie app',
        icon :'/assets/code.png',
        desc :'website to watch movies online' ,
        img :'/assets/movie.png',
      },
      {
        id:'5',
        title :'UI Design',
        icon :'/assets/des.png',
        desc :' design of a web application to make lives to sell products and clothes' ,
        img :'/assets/uidesign.png',
      },
      {
        id:'6',
        title :'shopping cart',
        icon :'/assets/code.png',
        desc :' shopping cart deelopped with css , html and javascript' ,
        img :'/assets/shopping.png',
      },

      {
        id:'4',
        title :'to do list',
        icon :'/assets/code.png',
        desc :' todo list to check your plan daily' ,
        img :'/assets/todo.png',
      },
      {
        id:'2',
        title :'CONNECT',
        icon :'/assets/code.png',
        desc :' website to exchange business cards and make appointments',
        img :'/assets/evisit.png',
      },
  ];

  const handleClick = way =>{
    way === "left" ? setCurrentSlide( currentSlide > 0 ? currentSlide-1 :2)  
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className="works" id="works">
        <div className="slider" style ={{ transform :`translateX(-${currentSlide * 100}vw)`}}>
          
          { data.map((d) =>(
          <div className="container">
             <div className="item">
                  <div className="left">
                      <div className="leftcontainer">
                         <div className="imgcontainer">
                           <img src={d.icon} alt=""  />
                           </div>
                           <h2>{d.title}</h2>
                           <p>
                             {d.desc}
                           </p>
                            <a href="https://github.com/rawdhadaikhi?tab=repositories"><span>Project</span></a>
                      </div>
                  </div>
                  <div className="right">
                       <img src={d.img} alt="" />
                  </div>
             </div>
          </div>))}
        </div>
        <img src="assets/arrowleft.png" alt="" className="arrow left"  onClick={() =>handleClick("left")}/>
        <img src="assets/arrowright.png" alt="" className ="arrow right" onClick={() =>handleClick()} />

    </div>
  )
}

export default Works