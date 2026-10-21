
import React from "react";
import dseImage from "../assets/DSE/DSE.png";

const steps = [
  {
    number: "01",
    title: "Monitor",
    description:
      "Treasury strength, liquidity, revenue, withdrawals, market volatility and token supply.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Compare conditions against predefined thresholds and risk limits.",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "Determine eligible incentive, liquidity, or supply-management actions.",
  },
  {
    number: "04",
    title: "Verify",
    description:
      "Record supported operations through on-chain transactions.",
  },
];

function ProcessCard({ number, title, description }) {
  return (
    <article className="group min-w-0">
      {/* Number and dotted line */}
      <div className="mb-3 flex items-center gap-3">
        <span className="w-2/5 shrink-0 unbounded text-lg font-bold tracking-tight text-[#686868] sm:text-[25px]">
          {number}
        </span>

        <div className="flex flex-1 items-center">
          <div
            className="h-px w-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F8E096 0%, #FFB01B 100%)",
              maskImage:
                "repeating-linear-gradient(90deg, #000 0 5px, transparent 5px 9px)",
            }}
          />
          <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#FFD36A] shadow-[0_0_8px_#E7AD38]" />
        </div>
      </div>

      {/* Title */}
      <h3 className="unbounded mb-3 bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-lg font-bold text-transparent sm:text-xl">
        {title}
      </h3>

      {/* Description with corner accents */}
      <div className="relative min-h-[94px] px-3 py-3 sm:min-h-[100px] sm:px-3">
        <span
          className="absolute left-0 top-0 h-2.5 w-2.5 rounded-tl border-l-2 border-t-2 border-transparent"
          style={{
            borderImage:
              "linear-gradient(90deg, #F8E096 0%, #FFB01B 100%) 1",
          }}
        />
        <span
          className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-br border-b-2 border-r-2 border-transparent"
          style={{
            borderImage:
              "linear-gradient(90deg, #F8E096 0%, #FFB01B 100%) 1",
          }}
        />

        <p className="chakra-petch text-[14px] leading-[1.6] text-[#B7AFC8] sm:text-[15px]">
          {description}
        </p>

        <span className="absolute bottom-0 left-3 h-px w-6 bg-[#8F5B12]" />
      </div>
    </article>
  );
}

export default function DSESection() {
  return (
    <section className="font-chakra-petch  overflow-hidden bg-black px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-[1600px]">
        {/* Hero section */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-14">
          {/* Left: heading and description */}
          <div className="min-w-0">
            <h1 className="unbounded text-[25px] font-bold leading-[1.08] tracking-tight md:text-[40px] xl:text-[55px]">
              <span className="block text-[#F3F3F3]">
                Dynamic Stability
              </span>

              <span className="mt-1 block bg-[linear-gradient(90deg,#8F5B12_0%,#DFA52E_25%,#FFF1A8_48%,#E7AD38_68%,#9D6415_100%)] bg-clip-text text-transparent">
                Engine (DSE)
              </span>
            </h1>

            <div className="relative mt-8 max-w-[650px] px-4 py-4 sm:px-5 sm:py-5">
              {/* Top-left corner */}
              <span className="absolute left-0 top-0 h-5 w-5 rounded-tl border-l-2 border-t-2 border-[#DFA52E]" />

              <p className="chakra-petch text-[15px] leading-[1.5] text-[#B7AFC8] sm:text-[17px]">
                The Dynamic Stability Engine (DSE) is HANA's proposed Agentic
                AI-powered framework, designed to analyze economic signals,
                support adaptive protocol parameter management, and
                coordinate predefined smart contract actions. It aims to
                enhance liquidity intelligence, support economic adaptability,
                and strengthen protocol stability mechanisms.
              </p>

              {/* Bottom-right corner */}
              <span className="absolute bottom-0 right-0 h-5 w-5 rounded-br border-b-2 border-r-2 border-[#DFA52E]" />

              <span className="absolute bottom-0 left-5 h-px w-10 bg-[#DFA52E]" />
            </div>
          </div>

          {/* Right: DSE illustration */}
          <div className="flex min-w-0 items-center justify-center">
            <img
              src={dseImage}
              alt="Dynamic Stability Engine illustration"
              className="h-auto w-full max-w-[540px] object-contain drop-shadow-[0_0_25px_rgba(231,173,56,0.12)]"
            />
          </div>
        </div>

        {/* Process section */}
        <div className="mt-9 sm:mt-12 lg:mt-10">
          <h2 className="unbounded text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-white">How </span>
            <span className="bg-[linear-gradient(90deg,#8F5B12_0%,#DFA52E_25%,#FFF1A8_48%,#E7AD38_68%,#9D6415_100%)] bg-clip-text text-transparent">
              DSE Works
            </span>
          </h2>

          <div className="mt-5  grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-10 xl:gap-18">
            {steps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
