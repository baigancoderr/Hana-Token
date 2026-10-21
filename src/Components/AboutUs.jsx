
import React from "react";
import { StaggerGroup, StaggerItem } from "./Motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="font-chakra-petch relative w-full overflow-hidden bg-black px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-[30px]"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Top Section */}
        <StaggerGroup className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-8 lg:grid-cols-[55%_45%] lg:gap-0">

          {/* Left Content */}
          <StaggerItem className="flex flex-col items-start">

            {/* About Us Button */}
               <div className="mb-5">
            <span className="inline-flex items-center bg-gradient-to-r from-[#F8E096] to-[#FFB01B] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black [clip-path:polygon(0_0,100%_0,100%_75%,88%_100%,0_100%)]">
              About Us
            </span>
          </div>

            {/* Heading */}
            <h2 className="unbounded max-w-[610px] text-[25px] md:text-[40px] lg:text-[55px] font-bold leading-[1.16] tracking-[0.032em] text-[#E8F0FF]">
              More Than a
              Token An Entire
              Ecosystem
            </h2>

            {/* Subtitle */}
            <p className="gold-gradient-text mt-4 text-[14px] font-chakra-petch">
              About Project Hana
            </p>
          </StaggerItem>

          {/* Right Ecosystem Card */}
          <StaggerItem className="relative flex min-h-[165px] items-center md:mt-8 lg:ml-5 lg:mt-0 lg:min-h-[165px] lg:pl-10">

            {/* Corner Borders */}
            <div className="gold-gradient-border absolute left-0 top-0 h-[26px] w-[26px] rounded-tl-[3px] border-l-2 border-t-2 border-transparent" />
            <div className="gold-gradient-border absolute bottom-0 right-0 h-[26px] w-[26px] rounded-br-[3px] border-b-2 border-r-2 border-transparent" />

            <div className="px-3 py-5 sm:px-2">
              <p className="gold-gradient-text mb-3 text-[14px] font-medium uppercase">
                THE ECOSYSTEM
              </p>

              <p className="max-w-[500px] text-[18px] font-normal leading-[1.65] text-[#B8B1C8]">
                The ecosystem brings together Hana Token, staking, DAO
                participation, reserve mechanisms, token stabilization and
                governance-oriented infrastructure.
              </p>

              <div className="gold-gradient-background mt-6 h-[2px] w-[80px]" />
              </div>
            </StaggerItem>
          </StaggerGroup>

       
      </div>
    </section>
  );
};

export default AboutUs;
