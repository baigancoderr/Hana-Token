import { useEffect, useState } from "react";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

/* Fonts: add once to index.html <head> or the top of index.css:
   @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Unbounded:wght@500;600;700&display=swap");
*/

const HEX = "[clip-path:polygon(8%_0,92%_0,100%_50%,92%_100%,8%_100%,0_50%)]";

const BADGES = [
  { text: "300 Members" },
  { text: "500 Days membership", glow: true },
  { text: "DAO staking activates membership." },
];

const ECONOMICS = [
  { label: "Buy", text: "80% Minting / Liquidity | 20% Price Gap" },
  {
    label: "Sell",
    text: "100% of applicable tokens burned; 5% / 10% liquidity allocation pending validation.",
  },
  { label: "Price Reserve", text: "1 HANA staked → 2 HANA proposed minting." },
];

const TILES = [
  { value: "10%", label: "Rank Reward Of Pool" },
  { value: "1 / 2 / 3%", label: "Effective Reward" },
  { value: "50%", label: "Maximum Incentive" },
  { value: "$3,218,500", label: "Total Pool" },
];

const RANK_NOTES = [
  { label: "Pool =", text: "Matching Business × Incentive %." },
  { label: "Rank Reward =", text: "10% Of Pool (1% / 2% / 3% Effective Reward)." },
  {
    label: "Qualification =",
    text: "Minimum 2 Active Legs; The Strongest Leg Is The Main Leg And Weaker Legs Count.",
  },
];

/* ---------- Small reusable pieces ---------- */

function Heading({ children, className = "" }) {
  return (
    <h2
      className={`font-['Unbounded'] font-semibold leading-[1.15] tracking-tight text-[1.6rem] sm:text-4xl lg:text-[2.6rem] ${className}`}
    >
      {children}
    </h2>
  );
}

/* Small gold L-shaped accents (decorative only) */
function Corners({ className = "top-3 left-3", bottom = "bottom-3 right-3" }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute h-3 w-3 border-l-2 border-t-2 border-[#FFC542] ${className}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute h-3 w-3 border-b-2 border-r-2 border-[#FFC542] ${bottom}`}
      />
    </>
  );
}

/* Hexagon with a 1px border. clip-path clips box-shadow, so the glow is a drop-shadow on the wrapper. */
function Hex({ glow = false, children, className = "", squareBelowMd = false }) {
  const shapeClass = squareBelowMd
    ? "[clip-path:none] md:[clip-path:polygon(8%_0,92%_0,100%_50%,92%_100%,8%_100%,0_50%)]"
    : HEX;
  const radiusClass = squareBelowMd ? "rounded-xl md:rounded-none" : "";
  const contentPaddingClass = squareBelowMd ? "px-4 md:px-[12%]" : "px-[12%]";

  return (
    <div
      className={`h-full ${
        glow ? "drop-shadow-[0_0_10px_rgba(255,197,66,0.4)]" : ""
      } transition-[filter] duration-700 ${className}`}
    >
      <div className={`h-full p-px ${shapeClass} ${radiusClass} transition-colors duration-700 ${glow ? "bg-[#FFC542]" : "bg-[#FFC542]/25"}`}>
        <div
          className={`flex h-full min-h-[64px] items-center justify-center py-3 text-center transition-colors duration-700 ${glow ? "bg-[#1C170C]" : "bg-[#111111]"} ${contentPaddingClass} ${shapeClass} ${radiusClass}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function OptionCard({ title, children, className = "", glow = false }) {
  return (
    <article
      className={`relative min-w-0 rounded-2xl border-transparent bg-[#141414] p-5 pb-8 sm:p-6 sm:pb-10 ${
        glow
          ? "shadow-[0px_4px_4px_0px_#E7AD38]"
          : "shadow-[0px_4px_4px_0px_#E7AD38]"
      } ${className}`}
      style={{
        borderImage:
          "linear-gradient(90deg, #E7AD38 0%, #FFD98C 100%) 1",
      }}
    >
      <h3 className="font-['Unbounded'] text-lg font-semibold text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text sm:text-xl">
  {title}
</h3>

      <div className="mt-4 pl-1">{children}</div>

      <Corners />
    </article>
  );
}

function EconomicsRow({ label, text, glow }) {
  return (
    <div className={`grid grid-cols-1 items-start gap-3 gap-4 rounded-lg border px-4 py-4 px-6 py-5 transition-all duration-700 md:grid-cols-[7rem_1fr] md:items-center ${
      glow
        ? "border-[#FFC542]/70 bg-[#1C170C] shadow-[0_0_16px_rgba(255,197,66,0.15)]"
        : "border-transparent bg-[#111111]"
    }`}>
      <dt className="break-words font-['Unbounded'] text-sm font-semibold leading-tight text-transparent bg-[linear-gradient(90deg,#E7AD38_0%,#FFD98C_100%)] bg-clip-text">
  {label}
</dt>
      <dd className="min-w-0 break-words text-sm leading-relaxed text-white">{text}</dd>
    </div>
  );
}

function IncentiveTile({ value, label, glow }) {
  return (
    <Hex glow={glow} squareBelowMd>
      <div className="min-w-0">
       <p className="break-words font-['Unbounded'] text-base font-semibold text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text sm:text-lg">
  {value}
</p>
        <p className="mt-1 break-words text-xs font-medium text-white sm:text-[13px]">{label}</p>
      </div>
    </Hex>
  );
}

/* ---------- Section ---------- */

export default function DaoEconomicsSection() {
  const [activeTile, setActiveTile] = useState(0);
  const [activeEconomicsRow, setActiveEconomicsRow] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = window.setInterval(() => {
      setActiveTile((currentTile) => (currentTile + 1) % TILES.length);
    }, 2400);
    const economicsIntervalId = window.setInterval(() => {
      setActiveEconomicsRow((currentRow) => (currentRow + 1) % (ECONOMICS.length + 1));
    }, 2400);

    return () => {
      window.clearInterval(intervalId);
      window.clearInterval(economicsIntervalId);
    };
  }, []);

  return (
    <section
      id="dao-protocol"
      aria-label="DAO partner program, token economics and rank incentives"
      className="overflow-x-hidden px-6 py-3 mt-6 w-full font-[ bg-black'Inter'] text-white sm:py-8 lg:py-10 lg:px-10"
    >
      <div className="flex flex-col gap-14 mx-auto w-full max-w-[1600px]  lg:gap-10">
        {/* A. DAO Partner Program */}
        <div className="grid items-start gap-7 md:gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <Reveal>
              <Heading>
             <span className="text-white">DAO Partner</span>{" "}
<span className="text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text">
  Program
</span>
              </Heading>
            </Reveal>

            <Reveal className="relative mt-8 px-5 py-6 max-w-[520px] sm:px-6">
              <p className="break-words text-sm leading-relaxed text-[#A9A0B8] sm:text-base">
                5% of eligible deposits goes to the DAO Pool, distributed by qualified shares.
              </p>
              <span aria-hidden="true" className="block mt-5 h-px w-10 bg-[#FFC542]" />
              <Corners className="top-0 left-0" bottom="bottom-0 right-0" />
            </Reveal>

            <StaggerGroup as="ul" className="grid grid-cols-1 gap-3 mt-8 min-[480px]:grid-cols-3">
              {BADGES.map(({ text, glow }) => (
                <StaggerItem
                  as="li"
                  key={text}
                  className="min-w-0"
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Hex glow={glow}>
                    <span
                      className={`break-words text-xs leading-snug text-white ${
                        glow ? "font-semibold" : "font-medium"
                      }`}
                    >
                      {text}
                    </span>
                  </Hex>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <StaggerGroup className="grid gap-5 gap-6 min-w-0 sm:grid-cols-2 lg:pt-4">
            <StaggerItem
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <OptionCard title="Option 1">
              <p className="break-words text-xs text-[#A9A0B8] sm:text-sm">$5,000 ID × 300 members</p>
              <p className="mt-2 font-['Unbounded'] text-base font-semibold text-transparent bg-[linear-gradient(90deg,#8F5B12_0%,#DFA52E_25%,#FFF1A8_48%,#E7AD38_68%,#9D6415_100%)] bg-clip-text">
  $1.5M capacity
</p>
              </OptionCard>
            </StaggerItem>
            <StaggerItem
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <OptionCard title="Option 2" glow className="sm:mt-10">
              <p className="break-words text-sm leading-relaxed text-white sm:text-base">
                Refer 5 DAO members and maintain a $1,000 ID.
              </p>
              </OptionCard>
            </StaggerItem>
          </StaggerGroup>
        </div>

        {/* B + C. Token Economics (left) and Rank Incentives (right) */}
     
     
      </div>
    </section>
  );
}