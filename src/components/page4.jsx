import React from "react";

const NoHazardNoOutrage = () => {
  return (
    <div
      id="page4"
      className="flex overflow-x-hidden w-full h-100 lg:h-screen bg-violet-100"
    >
      <div className="flex flex-col lg:pl-20 pt-20">
        <h1 className="text-7xl font-bold px-5 lg:px-0 lg:underline-offset-2 border-b-2 border-slate-700 text-slate-800">
          No Hazard, No Outrage
        </h1>
        <p className="text-slate-800 px-5 lg:px-0 text-left mt-10 text-2xl">
          This is where you want to be. People are accurately evaluating a
          limited hazard and are not outraged by it. As tensions are not high,
          decisions between stakeholders can be made effectively.
        </p>
        <h2 className="text-4xl font-bold px-5 lg:px-0 underline-offset-2 border-b-2 border-slate-700 text-slate-800 mt-10">
          Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 lg:px-0 mb-5 lg:mb-0 pt-10">
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Montreal Protocol
              </h5>
              <p class="mb-4 text-base text-slate-300">
                Chloroflurocarbons (CFCs) were a huge problem for the ozone
                layer leading up to the establishment of the Montreal Protocol.{" "}
                <a
                  href="https://www.canada.ca/en/environment-climate-change/corporate/international-affairs/partnerships-organizations/ozone-layer-depletion-montreal-convention.html"
                  className="underline"
                >
                  The Montreal Protocol
                </a>{" "}
                was an international agreement that required countries to begin
                to phase out chloroflurocarbons from manufacturing processes,
                and this protocol has resulted in levels of ozone depletion
                decreasing.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Side Effects of Breast Implants
              </h5>
              <p class="mb-4 text-base text-slate-300">
                Since the 1960's, possible adverse effects of breast implants
                have been investigated by the FDA. There have been links{" "}
                <a
                  href="https://journals.lww.com/plasreconsurg/Abstract/2019/03001/Breast_Implant_Illness__A_Way_Forward.12.aspx"
                  className="underline text-bold"
                >
                  studied
                </a>{" "}
                between certain types of implants and systematic disease (such
                as autoimmune diseases). Now,{" "}
                <a
                  href="https://www.ctvnews.ca/health/additional-types-of-cancer-reported-in-people-with-breast-implants-u-s-fda-says-1.6061506"
                  className="underline"
                >
                  communication around the issue betwen provider and patient has
                  increased
                </a>
                , and there are additional warnings and guidelines where
                appropriate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoHazardNoOutrage;
