import React from "react";

const Navbar = () => {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-5 bg-[#2f3640] py-1.5">
      <div className="left">
        <div className="flex gap-2.5 logo font-bold text-2xl text-white text-center">
          <img
            className="w-12 rounded-lg"
            src="https://www.coffeecup.com/images/html-editor/html-editor-app-logo.png"
            alt=""
          />
          <span className="mt-1.5 font-light">Editor</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
