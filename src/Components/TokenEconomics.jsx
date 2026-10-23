
import React from "react";
import buyImage from "../assets/rankIncentive/buy.png";
import sellImage from "../assets/rankIncentive/sell.png";
import priceImage from "../assets/rankIncentive/price.png";
import noteImage from "../assets/rankIncentive/note.png";
import incentiveImage from "../assets/rankIncentive/incentive.png";
import rewardImage from "../assets/rankIncentive/reward.png";
import poolImage from "../assets/rankIncentive/pool.png";
import totalPoolImage from "../assets/rankIncentive/totalpool.png";
import rankVideo from "../assets/rankIncentive/rankvideo.mp4";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const GOLD =
  "linear-gradient(90deg, #8F5B12 0%, #DFA52E 25%, #FFF1A8 48%, #E7AD38 68%, #9D6415 100%)";

const economicsData = [
  {
    title: "BUY",
    description: "80% Minting / Liquidity\n20% Price Gap",
    image: buyImage,
  },
  {
    title: "SELL",
    description:
      "100% Of Applicable Tokens Burned.\n5% / 10% Liquidity Allocation Pending Validation.",
    image: sellImage,
  },
  {
    title: "PRICE RESERVE",
    description: "1 HANA Staked → 2 HANA Proposed Minting.",
    image: priceImage,
  },
  {
    title: "NOTE",
    description:
      "Direct PancakeSwap purchases are not intended under the proposed package model.",
    image: noteImage,
  },
];

const incentivesData = [
  {
    title: "10%",
    description: "Rank Reward Of Pool",
    image: incentiveImage,
  },
  {
    title: "1 / 2 / 3%",
    description: "Effective Reward",
    image: rewardImage,
  },
  {
    title: "50%",
    description: "Maximum Incentive",
    image: poolImage,
  },
  {
    title: "$3,218,500",
    description: "Total Pool",
    image: totalPoolImage,
  },
];

const bottomData = [
  {
    title: "Pool",
    description: "Matching Business × Incentive %.",
  },
  {
    title: "Rank Reward",
    description: "10% Of Pool [1% / 2% / 3% Effective Reward].",
  },
  {
    title: "Qualification",
    description:
      "Minimum 2 Active Legs. The Strongest Leg Is The Main Leg And Weaker Legs Count.",
  },
];

function GoldIcon({ image, alt }) {
  return (
    <img
      src={image}
      alt={alt}
      className="h-12 w-12 shrink-0 object-contain transition-transform duration-500 ease-out group-hover:scale-110 sm:h-16 sm:w-16"
    />
  );
}

function GoldDivider() {
  return (
    <div className="h-px w-full" style={{ background: GOLD }} />
  );
}

function EconomicsItem({ item }) {
  return (
    <div className="group">
      <div className="flex items-stretch gap-2.5 py-3 sm:gap-3">
        <div className="flex items-center">
          <GoldIcon image={item.image} alt={`${item.title} icon`} />
        </div>

        {/* Gradient vertical divider */}
        <div className="w-px shrink-0" style={{ background: GOLD }} />

        <div className="min-w-0 flex-1 self-center">
          <h3 className="mb-1 text-[16px] chakra-petch font-bold tracking-wide text-[#F5BE46] md:text-[20px]">
            {item.title}
          </h3>

          <p className="whitespace-pre-line text-[14px] leading-[1.6] text-white/90 md:text-[15px]">
            {item.description}
          </p>
        </div>
      </div>

      {/* Gradient bottom border */}
      <GoldDivider />
    </div>
  );
}

function IncentiveCard({ item }) {
  return (
    <div
      className="group flex min-h-[57px] mb-1 items-center gap-2.5 rounded-lg p-2 sm:min-h-[61px] sm:gap-3 sm:px-2.5"
      style={{
        border: "1px solid #8F5B12",
      }}
    >
      <GoldIcon image={item.image} alt={`${item.title} icon`} />

      <div className="min-w-0 flex-1">
        <h3 className="text-[16px] chakra-petch font-bold leading-tight text-[#F5BE46] md:text-[20px]">
          {item.title}
        </h3>

        <p className="mt-1 text-[14px] leading-[1.4] text-white/90 md:text-[15px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function BottomCard({ item }) {
  return (
    <div
      className="relative h-full p-[1px]"
      style={{
        clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
      }}
    >
      {/* Gold gradient border */}
      <div
        className="absolute inset-0"
        style={{ background: GOLD }}
      />

      <div
        className="relative flex h-full min-h-[74px] items-center bg-[#080704]/95 px-[12%] py-3"
        style={{
          clipPath:
            "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
        }}
      >
        <div>
          <h3 className="mb-1 text-[16px] font-bold text-[#F5BE46] md:text-[20px]">
            {item.title}
          </h3>

          <p className="text-[14px] leading-[1.55] text-white/80 md:text-[15px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TokenEconomics() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-6 text-white md:px-6 sm:py-12 xl:px-10 lg:py-8 xl:py-14">
      {/* One background video for the entire section */}
      <video
        className="pointer-events-none absolute inset-0 -z-20 hidden h-full w-full object-cover lg:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={rankVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readable text */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-black/65 lg:block" />

      {/* Subtle atmospheric lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[100px] lg:block" />

      <div className="mx-auto max-w-[1600px]">
        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_0.95fr_0.78fr] lg:gap-6">
          {/* LEFT: TOKEN ECONOMICS */}
          <div className="relative z-10 min-w-0">
            <Reveal as="h2" className="unbounded mb-5 text-[25px] md:text-[40px] font-normal leading-[1.25] md:leading-[1.05] tracking-tight sm:mb-6">
              <span className="text-white">Token</span>{" "}
              <span className="bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-transparent">
                Economics
              </span>
              <br />
              <span className="bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-transparent">
                &amp; Stabilization
              </span>
            </Reveal>

            <StaggerGroup>
              {economicsData.map((item) => (
                <StaggerItem
                  key={item.title}
                  whileHover={{ y: -3, x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <EconomicsItem item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* CENTER: SAME BACKGROUND VIDEO, NO SEPARATE LOGO */}
          <div className="relative hidden min-h-[350px] items-center justify-center lg:flex">
            {/* Transparent center area: the main video remains visible */}
            <div className="pointer-events-none absolute inset-0 bg-transparent" />
          </div>

          {/* RIGHT: RANK INCENTIVES */}
          <div className="relative z-10 min-w-0">
            <Reveal as="h2" className="mb-5 text-[25px] unbounded leading-[1.02] tracking-tight md:text-[32px] lg:text-[40px]">
              <span className="text-white">Rank</span>
              <br />
              <span className="bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-transparent">
                Incentives
              </span>
            </Reveal>

            <StaggerGroup className="flex flex-col gap-2">
              {incentivesData.map((item) => (
                <StaggerItem
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <IncentiveCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>

        {/* BOTTOM INFORMATION CARDS */}
        <StaggerGroup className="mt-8 hidden grid-cols-1 gap-3 sm:mt-15 sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-10">
          {bottomData.map((item) => (
            <StaggerItem
              key={item.title}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <BottomCard item={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
