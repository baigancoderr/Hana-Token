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
  { value: "1 / 2 / 3%", label: "Effective Reward", glow: true },
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
function Hex({ glow = false, children, className = "" }) {
  return (
    <div
      className={`h-full ${
        glow ? "drop-shadow-[0_0_10px_rgba(255,197,66,0.4)]" : ""
      } ${className}`}
    >
      <div className={`h-full p-px ${HEX} ${glow ? "bg-[#FFC542]" : "bg-[#FFC542]/25"}`}>
        <div
          className={`flex h-full min-h-[64px] items-center justify-center bg-[#111111] px-[12%] py-3 text-center ${HEX}`}
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

function EconomicsRow({ label, text }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] items-center gap-3 gap-4 px-4 py-4 px-6 py-5 bg-[#111111] rounded-lg sm:grid-cols-[7rem_1fr]">
      <dt className="break-words font-['Unbounded'] text-sm font-semibold leading-tight text-transparent bg-[linear-gradient(90deg,#E7AD38_0%,#FFD98C_100%)] bg-clip-text">
  {label}
</dt>
      <dd className="min-w-0 break-words text-sm leading-relaxed text-white">{text}</dd>
    </div>
  );
}

function IncentiveTile({ value, label, glow }) {
  return (
    <Hex glow={glow}>
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
  return (
    <section
      aria-label="DAO partner program, token economics and rank incentives"
      className="overflow-x-hidden py-12 w-full font-[ bg-black'Inter'] text-white sm:py-16 lg:py-20 lg:px-6"
    >
      <div className="flex flex-col gap-14 mx-auto w-full max-w-[1600px] sm:px-6 lg:gap-20">
        {/* A. DAO Partner Program */}
        <div className="grid items-start gap-10 gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <Heading>
             <span className="text-white">DAO Partner</span>{" "}
<span className="text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text">
  Program
</span>
            </Heading>

            <div className="relative mt-8 px-5 py-6 max-w-[520px] sm:px-6">
              <p className="break-words text-sm leading-relaxed text-[#A9A0B8] sm:text-base">
                5% of eligible deposits goes to the DAO Pool, distributed by qualified shares.
              </p>
              <span aria-hidden="true" className="block mt-5 h-px w-10 bg-[#FFC542]" />
              <Corners className="top-0 left-0" bottom="bottom-0 right-0" />
            </div>

            <ul className="grid grid-cols-1 gap-3 mt-8 min-[480px]:grid-cols-3">
              {BADGES.map(({ text, glow }) => (
                <li key={text} className="min-w-0">
                  <Hex glow={glow}>
                    <span
                      className={`break-words text-xs leading-snug text-white ${
                        glow ? "font-semibold" : "font-medium"
                      }`}
                    >
                      {text}
                    </span>
                  </Hex>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 gap-6 min-w-0 sm:grid-cols-2 lg:pt-4">
            <OptionCard title="Option 1">
              <p className="break-words text-xs text-[#A9A0B8] sm:text-sm">$5,000 ID × 300 members</p>
              <p className="mt-2 font-['Unbounded'] text-base font-semibold text-transparent bg-[linear-gradient(90deg,#8F5B12_0%,#DFA52E_25%,#FFF1A8_48%,#E7AD38_68%,#9D6415_100%)] bg-clip-text">
  $1.5M capacity
</p>
            </OptionCard>
            <OptionCard title="Option 2" glow className="sm:mt-10">
              <p className="break-words text-sm leading-relaxed text-white sm:text-base">
                Refer 5 DAO members and maintain a $1,000 ID.
              </p>
            </OptionCard>
          </div>
        </div>

        {/* B + C. Token Economics (left) and Rank Incentives (right) */}
        <div className="grid items-start gap-12 gap-10 lg:grid-cols-2">
          <section aria-labelledby="economics-heading" className="min-w-0 lg:pt-6">
            <Heading className="">
              <span className="text-white">Token</span>{" "}
<span className="text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text">
  Economics
</span>
<br />
<span className="text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text">
  &amp; Stabilization
</span>
            </Heading>

            <dl className="mt-8 space-y-4 space-y-5 sm:mt-10">
              {ECONOMICS.map((row) => (
                <EconomicsRow key={row.label} {...row} />
              ))}
            </dl>

            <div className="grid grid-cols-[5.5rem_1fr] items-center gap-3 gap-4 mt-5 px-4 py-4 px-6 bg-black rounded-lg border-[#FFC542]/60 border sm:grid-cols-[7rem_1fr]">
              <p className="font-['Unbounded'] text-sm font-semibold text-transparent bg-[linear-gradient(90deg,#E7AD38_0%,#FFD98C_100%)] bg-clip-text">
  Note
</p>
              <p className="min-w-0 break-words text-sm leading-relaxed text-white">
                Direct PancakeSwap purchases are not intended under the proposed package model.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="rank-heading"
            className="p-5 min-w-0 bg-gradient-to-b from-[#191919] to-black rounded-[1.75rem] border-[#FFC542]/70 rounded-[2.25rem] border sm:p-8"
          >
            <Heading>
              <span id="rank-heading">
  <span className="text-white">Rank</span>
  <br />
  <span className="text-transparent bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text">
    Incentives
  </span>
</span>
            </Heading>

            <div className="grid grid-cols-1 gap-3 mt-8 min-[360px]:grid-cols-2 sm:gap-4">
              {TILES.map((tile) => (
                <IncentiveTile key={tile.label} {...tile} />
              ))}
            </div>

            <dl className="mt-8 text-sm space-y-4 sm:mt-10">
              {RANK_NOTES.map(({ label, text }) => (
                <div key={label} className="grid gap-1 gap-4 sm:grid-cols-[9rem_1fr]">
                 <dt className="font-['Unbounded'] text-xs font-semibold text-transparent bg-[linear-gradient(90deg,#E7AD38_0%,#FFD98C_100%)] bg-clip-text sm:pt-0.5">
  {label}
</dt>
                  <dd className="min-w-0 break-words leading-relaxed text-white/90">{text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </section>
  );
}