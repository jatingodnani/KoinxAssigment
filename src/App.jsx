import { useState } from "react";

import "./App.css";
import Home from "./Layout/Home";
import Header from "./components/Header";
import Trendingcard from "./components/CoinDetail/TrendingCard/Trendingcard";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Home />
      <Trendingcard />
    </div>
  );
}

export default App;
