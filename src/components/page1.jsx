import React from "react";

const HazardOutrage = () => {
  return (
    <div className="flex overflow-x-hidden w-full h-100 lg:h-screen bg-red-100">
      <div className="flex flex-col lg:pl-20 pt-20">
        <h1 className="text-7xl font-bold px-5 lg:px-0 lg:underline-offset-2 border-b-2 border-slate-700 text-slate-800">
          Hazard and Outrage
        </h1>
        <p className="text-slate-800 px-5 lg:px-0 text-left mt-10 text-2xl">
          In situations where there is a clear and present danger that people
          recognize, you are likely dealing with an emergency. During crisis,
          people want messaging that is consistent and authoritative.
        </p>
        <h2 className="text-4xl font-bold px-5 lg:px-0 underline-offset-2 border-b-2 border-slate-700 text-slate-800 mt-10">
          Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 px-5 lg:px-0 mb-5 lg:mb-0">
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl lg:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Covid-19 Pandemic
              </h5>
              <p class="mb-4 text-base text-neutral-300">
                As the coronavirus spread around the world, people became scared
                in the face of uncertainty. Governments, international agencies
                and health organizations held daily news conferences to update
                the public on the latest information, and what the guidelines
                were for staying safe.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl lg:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Hospital IT Outage
              </h5>
              <p class="mb-4 text-base text-slate-300">
                Suddenly the computer isn't turning on, and lives are at stake.
                Patients, doctors and nurses are all clammering for answers, and
                the IT department is still in the early stages of diagnosing the
                problem. Now is the time to setup a communication pathway to
                shield those who can solve the problem from the chaos, and work
                out an action plan until things are back online.
              </p>
            </div>
          </div>
          <div class="group relative bg-slate-800 shadow-lg md:max-w-xl lg:flex-row hover:scale-105 transform transition duration-300 ease-in-out">
            <div class="flex flex-col justify-start p-6">
              <h5 class="mb-2 text-xl font-medium text-slate-100">
                Hurricane Katrina
              </h5>
              <p class="mb-4 text-base text-slate-300">
                When natural diaster strikes, conditions change rapidly and
                communication lines can be cut off. Any message that goes out
                may need to happen through word of mouth, so better make it
                straight forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HazardOutrage;
