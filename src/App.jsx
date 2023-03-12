import React from "react";
import Hero from "./components/hero";
import Header from "./components/header";
import Info from "./components/hazard_outrage";
import HazardNoOutrage from "./components/hazard_no_outrage";
import NoHazardOutrage from "./components/no_hazard_outrage";
import NoHazardNoOutrage from "./components/no_hazard_no_outrage";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <HazardNoOutrage />
      <NoHazardOutrage />
      <NoHazardNoOutrage />
      <Footer />
    </div>
  );
}

export default App;
