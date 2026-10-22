
import React from "react";
import { ArrowUpRight } from "lucide-react";
import tokenImg from "../assets/token.png";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const utilities = [
  "Staking",
  "Ecosystem Participation",
  "DAO Participation",
  "Liquidity Infrastructure",
  "Burn Mechanisms",
];

export default function Token() {
  return (
    <section id="token" className="relative  overflow-hidden bg-black px-5 py-4 font-chakra-petch text-white sm:px-8 sm:py-4 lg:px-12 lg:py-4">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[20%] h-64 w-64 rounded-full bg-amber-500/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1600px]">

        {/* Logo label */}
       <div className="mb-5">
            <Reveal as="span" className="inline-flex items-center bg-gradient-to-r from-[#F8E096] to-[#FFB01B] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black [clip-path:polygon(0_0,100%_0,100%_75%,88%_100%,0_100%)]">
             HANA Token
            </Reveal>
          </div>

        <div className="grid items-center gap-6 md:grid-cols-[50fr_50fr] lg:gap-6 xl:gap-8">

          {/* LEFT: TOKEN ORBIT */}
          <Reveal className="flex min-w-0 items-center justify-center">
            <div className="relative aspect-square w-full">

              {/* Outer ambient glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[22%] rounded-full bg-amber-400/20 blur-[65px] sm:blur-[85px]"
              />

              {/* Orbit rings */}
              <svg
                viewBox="0 0 440 440"
                className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
                fill="none"
                aria-hidden="true"
              >
                {/* Orbit 1: clockwise */}
                <g className="origin-center animate-[spin_24s_linear_infinite]">
                  <ellipse
                    cx="220"
                    cy="220"
                    rx="195"
                    ry="105"
                    stroke="#D99A00"
                    strokeWidth="1"
                    opacity="0.85"
                  />

                  <circle cx="65" cy="155" r="4" fill="#FFC42F" />
                  <circle cx="390" cy="120" r="3" fill="#FFC42F" />
                  <circle cx="335" cy="340" r="3.5" fill="#D5FF19" />

                  <circle
                    cx="220"
                    cy="115"
                    r="5"
                    fill="#FFC42F"
                    opacity="0.9"
                  />
                </g>

                {/* Orbit 2: opposite direction */}
                <g className="origin-center animate-[spin_30s_linear_infinite_reverse]">
                  <ellipse
                    cx="220"
                    cy="220"
                    rx="155"
                    ry="195"
                    stroke="#D99A00"
                    strokeWidth="1"
                    strokeDasharray="2 7"
                    opacity="0.65"
                    transform="rotate(55 220 220)"
                  />

                  <circle
                    cx="375"
                    cy="220"
                    r="4"
                    fill="#F8E096"
                  />

                  <circle
                    cx="105"
                    cy="320"
                    r="3"
                    fill="#FFC42F"
                  />
                </g>

                {/* Inner orbit: opposite to outer orbit */}
                <g className="origin-center animate-[spin_18s_linear_infinite_reverse]">
                  <circle
                    cx="220"
                    cy="220"
                    r="133"
                    stroke="#FFC42F"
                    strokeWidth="0.7"
                    strokeDasharray="1 9"
                    opacity="0.4"
                  />

                  <circle
                    cx="220"
                    cy="87"
                    r="2.5"
                    fill="#F8E096"
                  />
                </g>
              </svg>

              {/* Static center token image */}
              <div className="absolute inset-[17%] flex items-center justify-center">
                <div className="relative flex h-full w-full items-center justify-center">

                  {/* Token halo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[8%] rounded-full bg-amber-400/10 blur-2xl"
                  />

                  {/* Inner border */}
                  <div className="absolute inset-[3%] rounded-full border border-amber-300/20 shadow-[0_0_35px_rgba(255,180,20,0.15),inset_0_0_25px_rgba(255,180,20,0.08)]" />

                  <img
                    src={tokenImg}
                    alt="Hana Token golden emblem"
                    className="relative z-10 h-[90%] w-[90%] rounded-full object-cover drop-shadow-[0_0_20px_rgba(255,180,20,0.18)]"
                    style={{ objectPosition: "22% 55%" }}
                  />
                </div>
              </div>

            </div>
          </Reveal>

          {/* RIGHT: CONTENT */}
          <StaggerGroup className="min-w-0">

            {/* Heading */}
            <StaggerItem className="mb-8 sm:mb-10">
             
              <h1 className="unbounded  text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold leading-[1.3] md:leading-[1.12] tracking-[-0.0005em] text-[#E8F0FF]">
               A Growing Protocol Built as a Timeless Ecosystem
              </h1>

          
            </StaggerItem>

            {/* Utilities list */}
            <StaggerGroup className="border-b border-amber-500/30">
              {utilities.map((item, index) => (
                <StaggerItem
                  as="a"
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="group flex min-h-[55px] items-center gap-4 border-t py-4 transition-all duration-300 [border-image:linear-gradient(90deg,#8F5B12_0%,#DFA52E_25%,#FFF1A8_48%,#E7AD38_68%,#9D6415_100%)_1] sm:min-h-[64px] sm:gap-5"
                >
                  <span className="font-chakra-petch text-[11px] font-semibold tracking-wider text-amber-400/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="unbounded flex-1 text-[16px] lg:text-[22px] font-semibold leading-tight tracking-tight text-slate-100 transition-colors duration-300 group-hover:translate-x-1 group-hover:text-amber-300">
                    {item}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center text-amber-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-300">
                    <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2} />
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>

          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
