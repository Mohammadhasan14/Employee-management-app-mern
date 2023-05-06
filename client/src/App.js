import React from "react"
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
