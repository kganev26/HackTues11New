import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage"; 
import Page2 from './pages/p2';
export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/p2" element={<Page2 />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
