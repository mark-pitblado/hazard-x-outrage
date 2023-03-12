import React, { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  mx-auto px-10 ">
      <h1 className="text-3xl font-bold text-[#2e3440]">Hazard x Outrage</h1>
      <p className="text-[#2e3440] pr-5 w-40 align-right">
        How concerned should we be?
      </p>
    </div>
  );
};

export default Header;
