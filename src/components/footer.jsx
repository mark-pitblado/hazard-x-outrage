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
    <footer class="bg-slate-100 text-center text-sm lg:text-left">
      <div class="container p-6 text-slate-800">
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="mb-6 md:mb-0">
            <h5 class="mb-2 font-medium uppercase">Image Licensing</h5>

            <p class="mb-4">
              All images used on this site are from Unsplash and are licensed
              for use.
            </p>
          </div>

          <div class="mb-6 md:mb-0">
            <h5 class="mb-2 font-medium uppercase">Source Code</h5>

            <p class="mb-4">
              The code for this site is open-source and available on Github{" "}
              <a
                className="underline"
                href="https://github.com/mark-pitblado/hazard-x-outrage"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
