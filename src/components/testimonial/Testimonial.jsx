import './testimonial.scss';

function Testimonial() {
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
        <div className="container">
          <div className="card">
              <div className="top">
                 <img src="/assets/man.png" alt="" className="left"/>
                 <img src="/assets/optima.png" alt=""  className="user" />
              </div>
              <div className="center">
                 "Curieuse ,responsable, très impliquée et naturellement doté d'un esprit critique et de synthèse."
              </div>
              <div className="bottom">
                 <h3>Haithem barhoumi</h3>
                 <h4> Directeur technique de Optima Tech</h4>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial