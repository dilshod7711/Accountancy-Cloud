import React from "react";
import footer from "../../assets/footer.svg";
import ACCA from "../../assets/ACCA.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#302E3F] mt-[100px]">
        <footer className="max-w-[1200px] mx-auto py-[50px]">
          <img src={footer} alt="" />
          <div className="grid grid-cols-5 mt-[50px]">
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[18px] text-[#FFFFFF]">How it works</h1>
              <p className="text-[16px] text-[#C5E9EA]">Finance Teams</p>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[18px] text-[#FFFFFF]">What we do</h1>
              <p className="text-[16px] text-[#C5E9EA]">Finance Teams</p>
              <p className="text-[16px] text-[#C5E9EA]">Tax</p>
              <p className="text-[16px] text-[#C5E9EA]">R&D Tax Credits</p>
              <p className="text-[16px] text-[#C5E9EA]">
                A platform for success
              </p>
              <p className="text-[16px] text-[#C5E9EA]">
                Software Integrations
              </p>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[18px] text-[#FFFFFF]">Who we help</h1>
              <p className="text-[16px] text-[#C5E9EA]">Startups</p>
              <p className="text-[16px] text-[#C5E9EA]">Small Business</p>
              <p className="text-[16px] text-[#C5E9EA]">Medium Business</p>
              <p className="text-[16px] text-[#C5E9EA]">
                CFO & Head of Finance
              </p>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[18px] text-[#FFFFFF]">Resources</h1>
              <p className="text-[16px] text-[#C5E9EA]">Case Studies</p>
              <p className="text-[16px] text-[#C5E9EA]">Blogs</p>
              <p className="text-[16px] text-[#C5E9EA]">Guides</p>
              <p className="text-[16px] text-[#C5E9EA]">Podcasts</p>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[18px] text-[#FFFFFF]">Company</h1>
              <p className="text-[16px] text-[#C5E9EA]">About Us</p>
              <p className="text-[16px] text-[#C5E9EA]">Careers</p>
              <p className="text-[16px] text-[#C5E9EA]">Contact Us</p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] mt-[100px]">
            <h1 className="text-[18px] text-[#FFFFFF]">Speak to us</h1>
            <p className="text-[16px] text-[#C5E9EA]">Call 020 4530 8432</p>
            <p className="text-[16px] text-[#C5E9EA]">
              Refer a friend for £175
            </p>
            <p className="text-[16px] text-[#C5E9EA]">Partner with us</p>
          </div>
          <div className="flex justify-between items-center mt-[50px]">
            <div className="flex gap-[20px] ">
              <p className="text-[16px] text-[#C5E9EA]">
                © Accountancy Cloud 2021
              </p>
              <p className="text-[16px] text-[#C5E9EA]">
                Privacy Policy & Cookies
              </p>
              <p className="text-[16px] text-[#C5E9EA]">Terms of Service</p>
            </div>
            <div>
              <img src={ACCA} alt="" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
