import React from "react";
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import AddLaptop from "./components/AddLaptop";
import Laptops from "./components/Laptop/Laptops";
import About from "./components/About";
import LaptopDetail from "./components/Laptop/LaptopDetail";

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddLaptop />} exact />
        <Route path="/laptops" element={<Laptops />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/laptops/:id" element={<LaptopDetail />} exact />
      </Routes>
    </main>

  </React.Fragment>
}

export default App;
