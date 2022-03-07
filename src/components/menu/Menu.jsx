import "./menu.scss";

function Menu({openMenu ,setOpenMenu}) {
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
          <li onClick={()=>setOpenMenu(!openMenu)}>
              <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setOpenMenu(!openMenu)}>
              <a href="#portfolio">Skills</a>
          </li>
          <li onClick={()=>setOpenMenu(!openMenu)}>
              <a href="#works">Works</a>
          </li>
          <li onClick={()=>setOpenMenu(!openMenu)}>
              <a href="#testimonials">Testimonials</a>
          </li>
          <li onClick={()=>setOpenMenu(!openMenu)}>
              <a href="#contact">Contact</a>
          </li>
      </ul>
    </div>
  )
}

export default Menu