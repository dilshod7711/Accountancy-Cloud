import React from "react";
import logo from "../../assets/logo.svg";
import hero from "../../assets/hero.png";

const Header = () => {
  return (
    <div>
      <header className="max-w-[1200px] mx-auto py-[20px] pt-[100px]">
        <nav className=" fixed z-100 top-0 left-0 right-0  bg-[#ffffffdc]   ">
          <div className="flex justify-between items-center py-[20px] max-w-[1200px] mx-auto">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="flex gap-[30px] items-center">
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                {" "}
                Home
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                {" "}
                How it works
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                {" "}
                What we do
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                {" "}
                Who we help
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                {" "}
                Resources
              </a>
              <button className="font-bold text-[18px] text-[#000000] w-[96px] h-[50px] border-1 border-[#000000] rounded-[50px] cursor-pointer">
                Login
              </button>
              <button className="font-bold text-[18px] text-[#FFFFFF] bg-[#000000] w-[189px] h-[50px] rounded-[50px] cursor-pointer">
                Talk to an Expert
              </button>
            </div>
          </div>
        </nav>
        <div className="flex justify-between mt-[100px] items-center">
          <div>
            <h1 className="text-[#000000] text-[77px] max-w-[491px] font-Roboto font-bold leading-[82.8px]">
              Get your finances right
            </h1>
            <p className="text-[20px] text-[#000000] font-Roboto max-w-[476px] mt-[20px]">
              Get your finances right with Accountancy Cloud. We offer the best
              accounting, R&D credits and CFO services for ambitious businesses
              who want to grow.
            </p>
            <p className="text-[18px] text-[#000000] font-Roboto mt-[100px]">
              Switching to us is simple
            </p>
            <button className="font-bold text-[18px] text-[#FFFFFF] bg-[#000000] w-[159px] h-[50px] rounded-[50px] mt-[87px]">
              Talk to an Expert
            </button>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </header>
      <hr className="mt-[-40px] text-gray-200" />
    </div>
  );
};

export default Header;
