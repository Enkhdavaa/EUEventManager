import React from "react";

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { Brand, Navbar } from "./components";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="white__header">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
