
import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImg from "../assets/heroImg.gif";
import heroBackground from "../assets/herobg.png";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const Hero = () => {
  return (
    <section className="font-chakra-petch relative min-h-screen overflow-hidden bg-[#020814] text-white">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-4 right-[14%] h-[350px] w-[350px] rounded-full bg-blue-600/30 blur-[50px]" />

      <div className="pointer-events-none absolute bottom-0 left-[25%] h-[220px] w-[320px] rounded-full bg-blue-900/20 blur-[110px]" />

      <div className="relative mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-1 md:gap-10 md:px-6 md:py-14 lg:grid-cols-[65%_35%] lg:gap-0 lg:px-10 lg:py-16">

        {/* Right Image - On top below 768px */}
        <div className="relative isolate order-1 flex items-center justify-center md:order-1 lg:order-2 xl:justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[10%] z-0 h-[70%] w-[80%] -translate-x-1/2 rounded-full opacity-80 blur-[252px]"
            style={{
              background:
                "linear-gradient(90deg, #00143D 0%, #005BFF 50%, #00D4FF 100%)",
            }}
          />
          <Reveal
            as="img"
            src={heroImg}
            alt="Hana decentralized ecosystem coin"
            className="relative z-10 h-auto w-[190px] translate-y-4 object-contain drop-shadow-[0_0_35px_rgba(0,105,255,0.18)] sm:w-[240px] md:w-[270px] lg:w-full lg:max-w-[340px] xl:-translate-x-14 xl:max-w-[500px]"
          />
        </div>

        {/* Left Content */}
        <StaggerGroup className="order-2 relative z-10 min-w-0 md:order-2 lg:order-1 lg:pr-6 xl:pr-10">

          {/* Subheading */}
          {/* <p className="mb-7 text-[14px] font-medium uppercase tracking-[0.06em] text-[#E9B52C] sm:text-[15px]">
            A NEW ERA OF DECENTRALIZED PARTICIPATION
          </p> */}

          {/* Heading */}
          <StaggerItem
            as="h1"
            className="unbounded w-full max-w-none whitespace-normal text-[25px] font-bold leading-[1.20] tracking-[-0.045em] md:max-w-[900px] md:text-[clamp(2.5rem,5.2vw,4.8rem)]"
          >
            <span
              className="inline bg-clip-text text-transparent md:block"
              style={{
                backgroundImage: "linear-gradient(90deg, #F8E096 0%, #FFB01B 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Where Even
            </span>
            {" "}

            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #9D6415 0%, #DFA52E 25%, #FFF1A8 48%, #E7AD38 68%, #8F5B12 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dreams
            </span>
            {" "}

            <span
              className="inline bg-clip-text text-transparent md:block"
              style={{
                backgroundImage: "linear-gradient(90deg, #F8E096 0%, #FFB01B 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Are Decentralized
            </span>
          </StaggerItem>

          <StaggerItem className="mt-6 max-w-[680px] rounded-[10px] bg-[linear-gradient(90deg,#8F5B12_0%,#DFA52E_25%,#FFF1A8_48%,#E7AD38_68%,#9D6415_100%)] p-px">
            <div className="rounded-[9px] bg-[#020814]/90 px-4 py-3">
              <p
                className="bg-clip-text text-[15px] font-semibold leading-[1.8] text-transparent sm:text-[18px]"
                style={{
                  backgroundImage: "linear-gradient(90deg, #E7AD38 0%, #FFD98C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Intelligence in Every Move. Stability in Every Cycle. HANA Only Rises.
              </p>

              <p className="mt-2 text-[15px] font-semibold leading-[1.8] text-white sm:text-[18px]">
                A next-generation decentralized ecosystem combining blockchain infrastructure, economic intelligence, token utility, liquidity management, DAO participation and gaming.
              </p>
            </div>
          </StaggerItem>

          {/* Buttons */}
          <StaggerGroup className="mt-10 flex flex-wrap items-center gap-4">
            <StaggerItem
              as="a"
              href="#join"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[4px] bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] px-[18px] py-2 text-[18px] font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(255,190,45,0.25)]"
            >
              Join Now
              <ArrowUpRight size={18} strokeWidth={2} />
            </StaggerItem>

            <StaggerItem
              as="a"
              href="#explore-ppt"
              className="inline-flex min-h-[50px] items-center justify-center rounded-[4px] border border-[#8F7130] px-[17px] py-2 text-[16px] font-medium text-[#E8EAF2] transition-all duration-300 hover:border-[#F4C34F] hover:bg-[#E9B52C]/10"
            >
              Explore PPT
            </StaggerItem>
          </StaggerGroup>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Hero;
