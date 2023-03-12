import React from "react";
import Hero from "./components/hero";
import Header from "./components/header";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
};

export default App;
