import React from "react";
import Hero from "./components/hero";
import Header from "./components/header";
import Info from "./components/hazard_outrage";
import HazardNoOutrage from "./components/hazard_no_outrage";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <HazardNoOutrage />
    </div>
  );
}

export default App;
