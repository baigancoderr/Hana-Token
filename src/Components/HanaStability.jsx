
import React from "react";
import burnImage from "../assets/stability/burn.png";
import buyImage from "../assets/stability/buy.png";
import dseImage from "../assets/stability/dse.png";
import liquidityImage from "../assets/stability/liquidity.png";
import proofImage from "../assets/stability/proof.png";

const features = [
  {
    title: "DSE",
    description: "Economic intelligence and decision-making.",
    image: dseImage,
  },
  {
    title: "Proof of Reserve",
    description: "Transparency around designated reserves.",
    image: proofImage,
  },
  {
    title: "Proof of Burn",
    description: "Verification of permanently burned tokens.",
    image: burnImage,
  },
  {
    title: "Buyback",
    description: "Acquisition of HANA using eligible protocol revenue.",
    image: buyImage,
  },
  {
    title: "Liquidity",
    description: "Infrastructure supporting token transactions.",
    image: liquidityImage,
  },
];

const stats = [
  { value: "5%", description: "Of eligible deposits to DAO Pool" },
  { value: "300", description: "DAO members" },
  { value: "500", description: "Days membership" },
  { value: "$1.5M", description: "Capacity (Option 1)" },
];

export default function HanaStability() {
  return (
    <section className="overflow-hidden px-4 py-2 w-full font-chakra-petch text-white bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">

        {/* TOP HEADING */}
<div className="flex items-center gap-5 mb-8 sm:gap-8">
  <h2 className="text-xl font-bold leading-tight unbounded shrink-0 sm:text-2xl lg:text-[28px]">
    <span className="text-white">The </span>
    <span className="text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text">
      HANA Stability Architecture
    </span>
  </h2>

  <div className="relative hidden h-[2px] w-full max-w-[550px] sm:block">
    <div
      className="absolute inset-0"
      style={{
        background:
          "repeating-linear-gradient(to right, #F8E096 0px, #F8E096 3px, transparent 3px, transparent 6px)",
      }}
    />
    <span className="absolute h-2.5 w-2.5 bg-[#FFD166] rounded-full -right-1 -top-[3px]" />
  </div>
</div>

        {/* FEATURE CARDS */}
        <div className="overflow-x-auto mb-8 px-4 pb-3 px-0 -mx-4 sm:mx-0 lg:mb-9">
          <div className="flex grid-cols-5 gap-6 snap-x snap-mandatory sm:gap-4 lg:grid">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col items-center px-2 py-8 w-[130px] text-center bg-gradient-to-b from-[#303030] to-[#242424] rounded-[10px] border-[#D9D9D933] duration-300 shrink-0 snap-start border transition hover:border-[#E7AD38]/40 sm:px-4 lg:w-[250px]"
              >
                <div className="flex items-center justify-center mb-2 h-[86px] w-full sm:h-[96px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="object-contain h-full max-w-[90px] drop-shadow-[0_0_10px_rgba(231,173,56,0.12)]"
                  />
                </div>

                <h3 className="mb-2 min-h-[22px] text-[16px] font-bold leading-5 text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text unbounded sm:text-[20px]">
                  {feature.title}
                </h3>

                <p className="text-[13px] leading-[1.6] text-[#AAA7B8] chakra-petch md:text-[15px]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* DESCRIPTION + GOVERNANCE HEADING */}
        <div className="grid grid-cols-1 items-center gap-7 gap-10 md:grid-cols-[0.8fr_1.2fr] lg:gap-14">

          {/* LEFT DESCRIPTION */}
          <div className="relative px-4 py-4 max-w-[440px] sm:px-5">
            <span className="absolute left-0 top-0 h-5 w-[2px] bg-gradient-to-b from-[#F8E096] to-[#FFB01B]" />
            <span className="absolute left-0 top-0 h-[2px] w-12 bg-gradient-to-r from-[#F8E096] to-[#FFB01B]" />
            <span className="absolute bottom-0 right-0 h-5 w-[2px] bg-gradient-to-b from-[#F8E096] to-[#FFB01B]" />
            <span className="absolute bottom-0 right-0 h-[2px] w-12 bg-gradient-to-l from-[#F8E096] to-[#FFB01B]" />

            <p className="text-justify text-[14px] leading-[1.8] text-[#B0ACBC] chakra-petch sm:text-[18px]">
              The HANA DAO is a highly scalable governance framework through
              which eligible members can participate in the development of
              Project HANA.
            </p>

            <div className="mt-4 h-[2px] w-[27px] bg-gradient-to-r from-[#F8E096] to-[#FFB01B]" />

            <p className="mt-4 text-center text-[10px] font-bold tracking-[3px] text-[#E7AD38] tracking-[4px] chakra-petch sm:text-[14px]">
              Participate || Qualify || Grow
            </p>
          </div>

          {/* RIGHT HEADING */}
          <div className="text-center md:text-right">
            <h2 className="text-[30px] font-extrabold leading-[1.05] tracking-[-1.2px] unbounded sm:text-4xl lg:text-[46px] xl:text-[52px]">
              <span className="text-[#F1F4FA]">
                Governance and
                <br />
                Rewards That Grow
                <br />
                with{" "}
              </span>
              <span className="text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text">
                the Ecosystem
              </span>
            </h2>
          </div>
        </div>

        {/* STATISTICS CARDS */}
        <div className="grid grid-cols-2 gap-3 mt-8 mt-10 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="px-3 py-3 py-4 min-h-[78px] bg-[#101111] rounded-[11px] border-[#E7AD38]/20 duration-300 border transition hover:border-[#E7AD38]/60 sm:px-4"
            >
              <h3 className="mb-1 text-xl font-extrabold text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text unbounded sm:text-2xl">
                {stat.value}
              </h3>
              <p className="text-[10px] leading-relaxed text-[#B5B5B5] chakra-petch sm:text-[11px]">
                {stat.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
