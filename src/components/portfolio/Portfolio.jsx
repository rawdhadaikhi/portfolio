import { useEffect, useState } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import './portfolio.scss';

import {featuredapp , webapp ,uidesign ,tools} from '../../data';

function Portfolio() {
 
  const [selected , setSelected] = useState('featured');
  const [data , setData] = useState([]);

  const list = [
    {
      id:'featured',
      title:'Front-End'
    },
    {
      id:'web',
      title:'Back-End'
    },
    {
      id:'design',
      title:'UI Design'
    }, 
    {
      id:'tools',
      title:'Tools'
    }, 
  ];


  useEffect(() => {
    switch (selected) {
      case "featured" : setData(featuredapp);
       break;
       case "web" : setData(webapp);
       break;
       case "design" : setData(uidesign);
       break;
       case "tools" : setData(tools);
       break;
    }
  },[selected])


  return (
    <div className="portfolio" id="portfolio">
       <h1>Skills</h1>
          <ul>
              {list.map(item =>(
                <PortfolioList title = {item.title}
                 active ={selected === item.id}
                 setSelected= {setSelected}
                 id = {item.id}
                 />
              ))}
          </ul>

          <div className="container">
            {data.map(item =>(
                 <div className="item">
                   <img src={item.img} style ={{width:130 ,height:130}} />
                   <h3>{item.title}</h3>
                </div>  
            ))}
          

          </div>
    </div>
  )
}

export default Portfolio