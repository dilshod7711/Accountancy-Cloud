import React from "react";
import logatip from "../../assets/Frame (11).png";
import remy from "../../assets/remy.tif.png";
import pdf from "../../assets/pdf.png";
const The = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-[100px]">
      <div className="flex gap-[150px]">
        <div>
          <p className="text-[27px] text-[#000000] max-w-[236px]">
            Join 200+ amazing companies
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] items-center place-items-center  ">
          <img src={logatip} alt="" />
          <img src={remy} alt="" />
          <img src={logatip} alt="" />
          <img src={logatip} alt="" />
          <img src={logatip} alt="" />
          <img src={logatip} alt="" />
          <img src={logatip} alt="" />
          <img src={logatip} alt="" />
          <img src={logatip} alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-[150px] items-center">
        <div className="">
          <h1 className="text-[58px] text-[#000000] ">The AC Hub</h1>
          <p className="max-w-[547px] text-[20px] text-[#000000] mt-[20px]">
            Explore our dedicated online resources. We've got the tips, tricks
            and online accounting know-how for business success.
          </p>
          <button className="w-[140px] h-[50px] bg-[#F7B2B7] text-[18px] text-[#000000] rounded-[50px] mt-[80px] cursor-pointer">
            View Hub
          </button>
        </div>
        <div>
          <img src={pdf} alt="" />
        </div>
      </div>
      <div
        className="w-[1200px] h-[283px] bg-[#8BD4D6] mt-[200px] flex justify-between
      items-center px-[90px] rounded-[10px]"
      >
        <div>
          <h1 className="text-[46px] text-[#000000] mt-[20px]">
            Ready to Switch? It's simple.
          </h1>
          <p className="text-[20px] text-[#000000] mt-[20px]">
            Speak to an expert today
          </p>
        </div>
        <div>
          <button className="w-[160px] h-[50px] bg-[#000000] text-[18px] text-white rounded-[50px]  cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default The;
