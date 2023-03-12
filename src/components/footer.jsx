import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-w-screen mx-auto py-16 px-4 grid lg:grid-cols-5 gap-3 bg-slate-100">
      <div>
        <h1 className="w-full text-3xl font-bold text-slate-800">
          Hazard x Outrage
        </h1>
        <p className="py-4">A site designed for educational purposes only.</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
