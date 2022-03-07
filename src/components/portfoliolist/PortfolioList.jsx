import "./portfoliolist.scss";

function PortfolioList({ id ,title , active ,setSelected}) {
  return (
    <li className= {active ? "portfoliolist active" : "portfolio"} 
    onClick={() =>setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList