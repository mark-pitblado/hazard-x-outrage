import React from "react";

const HazardNoOutrage = () => {
  return (
    <div
      id="page2"
      className="flex overflow-x-hidden w-full h-100 lg:h-screen bg-gray-800"
    >
      <div className="flex flex-col lg:pl-20 pt-20 lg:pr-5">
        <h1 className="text-7xl font-bold px-5 lg:px-0 lg:underline-offset-2 border-b-2 border-slate-200 text-slate-100">
          Hazard, No Outrage
        </h1>
        <p className="text-slate-300 px-5 lg:px-0 text-left mt-10 text-2xl">
          If only people knew the facts, they would be up in arms. But they
          aren't, so what's wrong? In this situation, it falls on you to
          generate the momentum to get people to care about an issue. This can
          involve conveying evidence in a different way, or using a different
          medium to reach people.
        </p>
        <h2 className="text-4xl font-bold px-5 lg:px-0 underline-offset-2 border-b-2 border-slate-200 text-slate-100 mt-10">
          Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 px-5 lg:px-0 mb-5 lg:mb-0">
          <div class="group relative bg-slate-300 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-800">Radon Gas</h5>
              <p class="mb-4 text-base text-slate-600">
                Radon gas is the{" "}
                <a
                  href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/radiation/radon-your-home-health-canada-2009.html"
                  className="text-bold underline"
                >
                  number one cause of lung cancer in non-smokers
                </a>
                , and yet it is rarely discussed. As testing for radon is fairly
                easy, and the government cannot force homeowners to test, the
                best way to improve health is to generate a sense of urgency.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-300 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-800">
                Antibiotic Resistance
              </h5>
              <p class="mb-4 text-base text-slate-600">
                The World Health Organization ranks antibiotic resistance as one
                of the{" "}
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/antibiotic-resistance"
                  className="underline text-bold"
                >
                  biggest threats to global health.
                </a>{" "}
                However, animal agriculture and over prescribing of antibiotics
                are still ongoing issues. As there is no incentive for drug
                companies to develop new antibiotics, there is a need to get
                people to realise how drastically health will change if
                antibiotics cease to be effective.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-300 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-800">
                Plastic Waste
              </h5>
              <p class="mb-4 text-base text-slate-600">
                Plastic waste is{" "}
                <a
                  href="https://news.un.org/en/story/2021/10/1103692"
                  className="underline text-bold"
                >
                  set to double by 2030,
                </a>{" "}
                and yet there have not been any major breakthroughs to curb
                consumption patterns. Recycling is not sufficient, there must be
                a coordinated and sustained effort to change behaviour to
                prevent waterways from becoming contaminated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HazardNoOutrage;
