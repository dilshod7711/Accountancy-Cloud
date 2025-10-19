import React from "react";
import herologo from "../../assets/70-75-legenda😂.png";
import whyPhoto1 from "../../assets/Rectangle (8).png";
import whyPhoto2 from "../../assets/Rectangle (9).png";
import whyPhoto3 from "../../assets/Rectangle (10).png";

const Why = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-[200px]">
      <div className="flex justify-between items-center ">
        <div>
          <img src={herologo} alt="" />
        </div>
        <div>
          <h1 className="max-w-[443px] text-[#000000] text-[57px]  leading-[57.6px] font-Roboto font-bold">
            The best finance stack for entrepreneurs
          </h1>
          <p className="mt-[20px] text-[#000000] text-[20px] max-w-[515px] leading-[30.6px]">
            70% of companies switch to us from their DIY or legacy system. Now,
            get your bookkeeping, tax prep and CFO problems, solved. Complete
            our.
            <a className="text-[#8BD4D6]" href="">
              contact form
            </a>
            , and find out why 9 out of 10 customers recommend us.
          </p>
        </div>
      </div>
      <div className="mt-[200px] ">
        <h1 className="text-[58px] text-[#000000] leading-[57.6px] font-bold ">
          Why Switch?
        </h1>
      </div>
      <div className="mt-[50px] grid grid-cols-3 ">
        <div>
          <img src={whyPhoto1} alt="" />
          <h3 className="text-[28px] text-[#000000] font-bold">
            Powerful software
          </h3>
          <p className="text-[18px] text-[#000000] max-w-[295px] leading-[24px]">
            Included in our service, each customer gets in-house software to
            access live{" "}
            <a className=" text-[#8BD4D6]" href="">
              financial dashboards
            </a>{" "}
            and real-time management reports.
          </p>
        </div>
        <div>
          <img src={whyPhoto2} alt="" />
          <h3 className="text-[28px] text-[#000000] font-bold">
            Track cashflow
          </h3>
          <p className="text-[18px] text-[#000000] max-w-[295px] leading-[24px]">
            Stay on top of your working capital,{" "}
            <a className="text-[#8BD4D6]" href="">
              taxes
            </a>
            , and cashflow, to ensure your business is performing at its best.
          </p>
        </div>
        <div>
          <img src={whyPhoto3} alt="" />
          <h3 className="text-[28px] text-[#000000] font-bold">
            Award winning support
          </h3>
          <p className="text-[18px] text-[#000000] max-w-[295px] leading-[24px]">
            Expect the best from us. Get a dedicated finance team that will
            handle all your accounting, R&D credits and CFO needs.
          </p>
        </div>
      </div>
      <button className="w-[235px] h-[50px] bg-[#F7B2B7] mt-[50px] text-[#000000] font-bold text-[18px] rounded-[50px]">
        Discover what we do
      </button>
    </section>
  );
};

export default Why;
