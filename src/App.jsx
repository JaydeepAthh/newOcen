import "./assets/styles/globals.css";
import "./assets/styles/page-css.css";
import "./assets/styles/responsive.css";
import Home from "./Home";
import { useState, useEffect, useRef } from "react";
import MintBuy from "./Components/MintBuy";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Header /> */}
      {/* <Home /> */}
      <Route index path="/" element={<Home />} />
      <Route index path="mint-buy" element={<MintBuy />} />
      {/* <Swiper /> */}
      {/* <MintBuy /> */}
      {/* <Crousal /> */}
    </Routes>
  );
}

export default App;
