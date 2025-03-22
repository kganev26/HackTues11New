import '../App.css';
import Chat from '../Chat';
import { useState } from 'react';
import { Link } from 'react-router-dom';  
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      
    <div class="nav_background">
    <nav>
      <div class="logo">
        <a href="#">My bank consultant</a>
      </div>
      <div class="buttons"> 
        
        <a href="#" class="btn" onClick={() => navigate("/login")}>Register</a>
      </div>
    </nav>
  </div>
  <div class="containerp2"> 
    
    <div class="content">
      <h2>Say Hello to your personal AI finance consultant!</h2> 
      <p>Try out the AI consultant! Having access to your monthly incomes and expenses he can help you decide whether a certain purchase or investment is really
         worth it. Try it for free now! Please register before trying, so he can know your monthly finances.</p>
    </div>
    <div class="chat">
    <Chat />
  </div>
  </div>
  <div class="contact">
    <div class="content">
    <h1>Contact Us:</h1>
    <div class="contactlinks">
      <a href="https://mail.google.com/mail/?view=cm&to=rozovitepatenca@gmail.com&subject=Your%20Subject&body=Your%20Message" target="_blank">Email Us</a><br></br>
      <a href="https://x.com/Rozovitepatenca" target="_blank">Follow us on X</a><br></br>
      <a href="https://www.instagram.com/rozovitepatenca/" target="_blank">Follow us on Instagram</a>
      <br></br><h6>© 2025 All rights reserved.</h6>
    </div>
    </div>
  </div>
  
  </div>
  

  );
}

export default Page2;













