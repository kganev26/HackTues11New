import logo from '../Patenca.png';
import '../App.css';
import { useState } from 'react';
import Logintp from '../Login_templ';

const Login = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
console.log("login");

  return (
    <div>
    <Logintp/>
        </div>
  );
}

export default Login;