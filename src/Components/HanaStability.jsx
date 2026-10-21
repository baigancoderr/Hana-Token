
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
    <section className="font-chakra-petch w-full overflow-hidden bg-black px-4 py-2 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">

        {/* TOP HEADING */}
        <div className="mb-8 flex items-center gap-5 sm:gap-8">
          <h2 className="unbounded shrink-0 text-xl font-bold leading-tight sm:text-2xl lg:text-[28px]">
            <span className="text-white">The </span>
            <span className="bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-transparent">
              HANA Stability Architecture
            </span>
          </h2>

          <div className="relative hidden h-[2px] flex-1 sm:block">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(to right, #F8E096 0px, #F8E096 3px, transparent 3px, transparent 6px)",
              }}
            />
            <span className="absolute -right-1 -top-[3px] h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="mb-8 -mx-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 lg:mb-9">
          <div className="flex snap-x snap-mandatory gap-6 sm:gap-4 lg:grid lg:grid-cols-5">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex w-[155px] shrink-0 snap-start flex-col items-center rounded-[10px] border border-[#D9D9D933] bg-gradient-to-b from-[#303030] to-[#242424] px-3 py-4 text-center transition duration-300 hover:border-[#E7AD38]/40 sm:w-[170px] sm:px-4 sm:py-5 lg:w-auto"
              >
                <div className="mb-2 flex h-[86px] w-full items-center justify-center sm:h-[96px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="h-full max-w-[90px] object-contain drop-shadow-[0_0_10px_rgba(231,173,56,0.12)]"
                  />
                </div>

                <h3 className="unbounded mb-2 min-h-[22px] bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-[16px] font-bold leading-5 text-transparent sm:text-[20px]">
                  {feature.title}
                </h3>

                <p className="chakra-petch text-[13px] leading-[1.6] text-[#AAA7B8] md:text-[15px]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* DESCRIPTION + GOVERNANCE HEADING */}
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-14">

          {/* LEFT DESCRIPTION */}
          <div className="relative max-w-[440px] px-4 py-4 sm:px-5">
            <span className="absolute left-0 top-0 h-5 w-[2px] bg-gradient-to-b from-[#F8E096] to-[#FFB01B]" />
            <span className="absolute left-0 top-0 h-[2px] w-12 bg-gradient-to-r from-[#F8E096] to-[#FFB01B]" />
            <span className="absolute bottom-0 right-0 h-5 w-[2px] bg-gradient-to-b from-[#F8E096] to-[#FFB01B]" />
            <span className="absolute bottom-0 right-0 h-[2px] w-12 bg-gradient-to-l from-[#F8E096] to-[#FFB01B]" />

            <p className="chakra-petch text-justify text-[12px] leading-[1.8] text-[#B0ACBC] sm:text-[13px]">
              The HANA DAO is a highly scalable governance framework through
              which eligible members can participate in the development of
              Project HANA.
            </p>

            <div className="mt-4 h-[2px] w-[27px] bg-gradient-to-r from-[#F8E096] to-[#FFB01B]" />

            <p className="chakra-petch mt-4 text-center text-[10px] font-bold tracking-[3px] text-[#E7AD38] sm:text-[11px] sm:tracking-[4px]">
              Participate || Qualify || Grow
            </p>
          </div>

          {/* RIGHT HEADING */}
          <div className="text-center md:text-right">
            <h2 className="unbounded text-[30px] font-extrabold leading-[1.05] tracking-[-1.2px] sm:text-4xl lg:text-[46px] xl:text-[52px]">
              <span className="text-[#F1F4FA]">
                Governance and
                <br />
                Rewards That Grow
                <br />
                with{" "}
              </span>
              <span className="bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-transparent">
                the Ecosystem
              </span>
            </h2>
          </div>
        </div>

        {/* STATISTICS CARDS */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="min-h-[78px] rounded-[11px] border border-[#E7AD38]/20 bg-[#101111] px-3 py-3 transition duration-300 hover:border-[#E7AD38]/60 sm:px-4 sm:py-4"
            >
              <h3 className="unbounded mb-1 bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl">
                {stat.value}
              </h3>
              <p className="chakra-petch text-[10px] leading-relaxed text-[#B5B5B5] sm:text-[11px]">
                {stat.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
