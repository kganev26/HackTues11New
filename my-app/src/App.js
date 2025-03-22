import logo from './Patenca.png';
import './App.css';
import Chat from './Chat';
import { useState } from 'react';
import { Link } from 'react-router-dom';  
import { useNavigate } from "react-router-dom";

const App = () => {
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
            
            <a class="btn" onClick={() => navigate("/login")}>
              Register
            </a>
          </div>
        </nav>
      </div>
      <div class="container"> 
    
        <div class="content">
          <h2>Bring AI to your<br></br>daily financial decisions</h2> 
          <p>With your ai consultant having access to your monthly incomes and expenses, he can help you decide wether a certian purchase or investment is really worth it.</p>
        </div>
        <div class="link">
          {/* <a href="#" class="hire">Try It</a> */}
          <div class="link"> 
            <a class="hire" onClick={() => navigate("/p2")}>
            Try It
            </a>
          </div>
        </div>
      </div>
      
      <div class="contact">
    <div class="content">
    <h1>Contact Us:</h1>
    <div class="contactlinks">
      <a href="https://mail.google.com/mail/?view=cm&to=rozovitepatenca@gmail.com&subject=Your%20Subject&body=Your%20Message" target="_blank">Email Us</a><br></br>
      <a href="https://x.com/Rozovitepatenca" target="_blank">Follow us on X</a><br></br>
      <a href="https://www.instagram.com/rozovitepatenca/" target="_blank">Follow us on Instagram</a>
    <br></br><h6>© 2025 All rights reserved.</h6></div>
    </div>
  </div>
  </div>
  

  );
}

export default App;