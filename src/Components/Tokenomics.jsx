
import React from "react";
import coin from "../assets/coin.png";

const CARDS = [
  { label: "Token Burning", l: "6.3%", t: "7.9%" },
  { label: "Buyback", l: "6.3%", t: "40.6%" },
  { label: "Treasury Controls", l: "6.3%", t: "73.4%" },
  { label: "Controlled Distribution", l: "71.7%", t: "9.6%" },
  { label: "Liquidity Management", l: "71.7%", t: "43.75%" },
  { label: "Reserve Allocation", l: "71.7%", t: "73.75%" },
];

const CONNECTORS = [
  "M462 100 H562 L610 153 H680",
  "M462 311 H543 L666 280",
  "M462 503 H618 L712 431",
  "M1222 107 H1122 L1060 168 H1000",
  "M1222 328 H1158 L1055 303",
  "M1222 503 H1115 L1025 432",
];

function FeatureCard({ label, l, t }) {
  return (
    <li
      style={{ "--l": l, "--t": t }}
      className="z-20 relative left-[var(--l)] top-[var(--t)] p-[1px] h-[17.5%] w-[21%] bg-gradient-to-r from-[#E7AD38] to-[#FFD98C] rounded-[14px] transition-shadow duration-300 hover:shadow-[0_0_14px_rgba(255,185,46,0.25)] lg:absolute"
    >
      <div
        className="flex items-center justify-center px-5 py-4 h-full min-h-[82px] w-full text-center font-['Unbounded',sans-serif] bg-[#292929] rounded-[13px]
          text-base font-semibold leading-tight
          transition-colors duration-300 hover:bg-[#303030]
          lg:min-h-0 lg:justify-end lg:px-[1.6%] lg:py-0
          lg:text-right lg:text-[clamp(0.85rem,1.5vw,1.5rem)]"
      >
        <span
          className="min-w-0 break-words lg:max-w-[85%]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #F8E096 0%, #FFB01B 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {label}
        </span>
      </div>
    </li>
  );
}

export default function TokenEconomics() {
  return (
    <section
      aria-labelledby="token-economics-heading"
      className="overflow-hidden px-4 py-12 py-16 py-20 w-full bg-black sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Heading */}
        <h2
          id="token-economics-heading"
          className="text-center font-['Unbounded',sans-serif] text-[1.75rem] font-bold leading-tight sm:text-4xl lg:text-5xl"
        >
          <span
            className="inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFE49A 0%, #FFB01B 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Token Economics
          </span>
        </h2>

        {/* Coin, cards and connector lines */}
        <div
          className="relative flex flex-col items-center gap-6 mx-auto mt-8 mt-10 mt-6 w-full aspect-[1704/600] sm:gap-8 lg:block"
        >
          {/* Desktop connectors */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1704 600"
            preserveAspectRatio="none"
            className="z-0 absolute inset-0 hidden h-full w-full pointer-events-none lg:block"
            fill="none"
          >
            {CONNECTORS.map((path) => (
              <path
                key={path}
                d={path}
                stroke="#FFC52E"
                strokeWidth="2"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Central coin */}
          <div
            className="z-10 relative left-[37.6%] top-[9.7%] flex items-center justify-center w-[55vw] max-w-[240px] h-[75%] w-[24.6%] max-w-none aspect-square shrink-0 aspect-auto sm:max-w-[280px] lg:absolute"
          >
            {/* Golden glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 w-[170%] bg-[radial-gradient(circle,rgba(255,176,27,0.32)_0%,rgba(255,176,27,0.1)_38%,transparent_66%)] pointer-events-none aspect-square -translate-x-1/2 -translate-y-1/2"
            />

            <img
              src={coin}
              alt="Token coin"
              className="z-10 object-contain relative block h-full w-full"
            />
          </div>

          {/* Feature cards */}
          <ul
            className="z-20 relative grid grid-cols-1 gap-4 w-full max-w-[720px] min-[480px]:grid-cols-2 lg:contents"
          >
            {CARDS.map((card) => (
              <FeatureCard key={card.label} {...card} />
            ))}
          </ul>
        </div>

        {/* Description */}
        <p
          className="mx-auto mt-8 max-w-[1050px] text-center text-sm leading-relaxed text-white/90 text-base text-lg sm:mt-10 lg:mt-8 xl:text-xl"
        >
          Built on IT and blockchain expertise. Detailed supply,
          allocation percentages and transaction rules will be defined
          in the official tokenomics documentation.
        </p>
      </div>
    </section>
  );
}
