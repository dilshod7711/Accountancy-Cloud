import React from "react";
import whyPhoto1 from "../../assets/Rectangle (11).png";
import whyPhoto2 from "../../assets/Rectangle (12).png";
import whyPhoto3 from "../../assets/Rectangle (13).png";

const Plans = () => {
  return (
    <div className="bg-[#FDECED] mt-[100px]">
      <section className="max-w-[1200px] mx-auto py-[88px]">
        <h2 className="text-[58px] text-[#000000]">Plans built for growth</h2>

        <div className="mt-[100px] grid grid-cols-3 ">
          <div>
            <img src={whyPhoto1} alt="" />
            <h3 className="text-[28px] text-[#000000] font-bold">
              Early stage startup
            </h3>
            <p className="text-[18px] text-[#000000] max-w-[295px] leading-[24px] mt-[10px]">
              Need your accounting system set up? Learn financial best practice
              and prime your business for the next stage of growth. We get you
              moving quickly with an accounting solution that does what you
              need.
            </p>
          </div>
          <div>
            <img src={whyPhoto2} alt="" />
            <h3 className="text-[28px] text-[#000000] font-bold">Scale up</h3>
            <p className="text-[18px] text-[#000000] max-w-[295px] leading-[24px] mt-[10px]">
              Spend less time worrying about your finances and more time shaping
              your company’s future. Get your bookkeeping, R&D credits and CFO
              problems, solved.
            </p>
          </div>
          <div>
            <img src={whyPhoto3} alt="" />
            <h3 className="text-[28px] text-[#000000] font-bold">
              High growth
            </h3>
            <p className="text-[18px] text-[#000000] max-w-[295px] leading-[24px] mt-[10px]">
              Gain the financial accuracy, visibility, and real-time analysis
              you need to make smarter decisions, drive efficiency, and achieve
              total organizational alignment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
