import React from "react";

const Footer: React.FC = (props) => {
  return (
    <div className="" id="footer">
      <div className="text-center bg-[#e5e5e5]">
        <div className="container mx-auto py-20px">
          <p>
            DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your
            journey.
          </p>
          <p>Built on Forem — the open source software that powers DEV and other inclusive communities.</p>
          <p>Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2022.</p>
          <p className="font-bold m-0 text-[#157ed4] cursor-pointer">NEWS</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
