import React from "react";
import Hero from "./components/hero";
import Header from "./components/header";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Helmet from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Hazard and Outrage Framework</title>
        <meta
          name="description"
          content="A framework for understanding how people react to hazards."
        />
        <meta
          name="keywords"
          content="public health, hazard, outrage, framework, communication"
        />
        <script
          defer
          data-domain="hazardxoutrage.info"
          src="https://analytics.markpitblado.me/js/script.js"
        ></script>
      </Helmet>
      <div>
        <Header />
        <Hero />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Footer />
      </div>
    </>
  );
};

export default App;
