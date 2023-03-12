import React from "react";

import { Link } from "react-router-dom";

const NoHazardOutrage = () => {
  return (
    <div className="flex overflow-x-hidden w-full h-screen bg-orange-300">
      <div className="flex flex-col pl-20 pt-20">
        <h1 className="text-7xl font-bold underline-offset-2 border-b-2 border-slate-700 text-slate-800">
          No Hazard, Outrage
        </h1>
        <p className="text-slate-800 text-left mt-10 text-2xl">
          What is all the fuss about? Suddenly there is a lot of noise about a
          particular issue that really isn't all that dangerous. Somewhere along
          the way, the message has become distorted, or there are concerns that
          you didn't realise people had. Now is the time to listen and address
          why a topic is causing so much outrage. Until you do, the issue will
          continue to grow.
        </p>
        <h2 className="text-4xl font-bold underline-offset-2 border-b-2 border-slate-700 text-slate-800 mt-10">
          Examples
        </h2>
        <div className="grid grid-cols-3 gap-4 pt-10">
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                5G Network Towers
              </h5>
              <p class="mb-4 text-base text-slate-200">
                Some people believe that the signal emitted from 5G towers is
                dangerous to human health, and that these towers should be
                removed. The evidence{" "}
                <a
                  href="https://www.canada.ca/en/health-canada/services/video/5g-technology-safety.html"
                  className="underline text-bold"
                >
                  overwhelmingly shows
                </a>{" "}
                that this is not the case, and so the issue is messaging.
                Perhaps instead of touting 5G as being something completely new,
                it should be reframed as a new form of a technology that has
                been around for decades.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Covid-19 Pandemic
              </h5>
              <p class="mb-4 text-base text-slate-200">
                As the coronavirus spread around the world, people became scared
                in the face of uncertainty. Governments, international agencies
                and health organizations held daily news conferences to update
                the public on the latest information, and what the guidelines
                were for staying safe.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Covid-19 Pandemic
              </h5>
              <p class="mb-4 text-base text-slate-200">
                As the coronavirus spread around the world, people became scared
                in the face of uncertainty. Governments, international agencies
                and health organizations held daily news conferences to update
                the public on the latest information, and what the guidelines
                were for staying safe.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl md:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Covid-19 Pandemic
              </h5>
              <p class="mb-4 text-base text-slate-200">
                As the coronavirus spread around the world, people became scared
                in the face of uncertainty. Governments, international agencies
                and health organizations held daily news conferences to update
                the public on the latest information, and what the guidelines
                were for staying safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoHazardOutrage;
