import React from "react";
import Hero from "./components/hero";
import Header from "./components/header";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Footer from "./components/footer";

document.title = "Hazard and Outrage Framework";

const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content =
  "A framework for understanding how people react to hazards.";
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement("meta");
metaKeywords.name = "keywords";
metaKeywords.content =
  "public health, hazard, outrage, framework, communication";
document.head.appendChild(metaKeywords);

const script = document.createElement("script");
script.defer = true;
script.dataset.domain = "showcase1.markpitblado.me";
script.src = "https://plausible.io/js/script.js";
document.head.appendChild(script);

const App = () => {
  return (
    <>
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
