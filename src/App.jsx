import { useState } from "react";

import "./App.css";
import Home from "./Layout/Home";
import Header from "./components/Header";
import Trendingcard from "./components/CoinDetail/TrendingCard/Trendingcard";
import {  Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <Header />
     <Routes>
     <Route path="/" element={<Home/>}/>  
      <Route path="/:id" element={<Home/>}/>  
     </Routes>
      <Trendingcard />
    </div>
  );
}

export default App;
