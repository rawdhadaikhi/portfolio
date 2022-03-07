
import React from 'react'
import './topbar.scss';
import {Person , Mail} from "@material-ui/icons"

function Topbar({openMenu , setOpenMenu}) {
  return (
      <div className={"topbar " + (openMenu && "active")}>
          <div className="wrapper">
            <div className="left">
              <a href="#intro" className="logo" >Portfolio</a>
              <div className="itemcontainer">
                 <Person  className="icon"/>
                 <span> +216 26 050 332</span>
              </div>

              <div className="itemcontainer">
                 <Mail className="icon"/>
                 <span>raoudhadayki@gmail.com</span>
              </div>

              <div className="itemcontainer">
                 <i class="fa fa-linkedin-square icon"></i>
                 <a href="https://www.linkedin.com/in/rawdha-daikhi/"
                  style= {{textDecoration:"none" ,color:"#172774" }}>
                   <span>Rawdha Daikhi</span></a>
              </div>

            </div>
           

            <div className="right">
            <div className="hamburger" onClick={()=>setOpenMenu(!openMenu)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>

             </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar