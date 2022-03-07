import { useState } from "react";
import "./contact.scss";


function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = e =>{
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
         <img src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt=""/>
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Email"/>
           <textarea placeholder="Message"></textarea>
           <button type="submit">Send</button>
           {message && <span>Thanks , I'll replay ASAP</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact