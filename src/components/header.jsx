import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="flex pt-6 flex-col h-24 mx-auto pl-10 bg-slate-100">
      <h1 className="text-3xl font-bold text-slate-800">Hazard x Outrage</h1>

      <p className="text-lg font-semibold text-slate-700">
        A guide to the risk communication framework
      </p>
    </div>
  );
};

export default Header;
