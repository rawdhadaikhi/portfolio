import Testimonial from "./components/testimonial/Testimonial";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";

import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

import './app.scss';
import {useState} from 'react';
import Menu from "./components/menu/Menu";

function App() {

  const [openMenu , setOpenMenu] = useState(false);

  return (
    <div className="app">
     <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
     <Menu  openMenu={openMenu} setOpenMenu={setOpenMenu}/>
     <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
     </div>
    </div>
  );
}

export default App;
