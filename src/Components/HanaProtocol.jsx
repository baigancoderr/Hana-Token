
import burnImage from "../assets/protocol/burn.png";
import buyImage from "../assets/protocol/buy.png";
import decentralizedImage from "../assets/protocol/decentrilzed.png";
import dynamicImage from "../assets/protocol/dyanamic.png";
import gamingImage from "../assets/protocol/gaming.png";
import protocolImage from "../assets/protocol/protocol.png";
import rewardImage from "../assets/protocol/reward.png";
import sellImage from "../assets/protocol/sell.png";
import zeroImage from "../assets/protocol/zero.png";

const features = [
  { title: "Zero Initial Supply", image: zeroImage },
  { title: "Dynamic Stability Engine", image: dynamicImage },
  { title: "100% Decentralised System", image: decentralizedImage },
  { title: "100% Proof of Burn Consensus", image: burnImage },
  { title: "You Sell, HANA Rises", image: sellImage },
  { title: "You Buy, HANA Rises", image: buyImage },
  { title: "HANA DAO Protocol", image: protocolImage },
  { title: "Huge Rewards & Royalties", image: rewardImage },
  { title: "HANA Gaming Community", image: gamingImage },
];

export default function HanaProtocol() {
 
return (
  <section id="how-it-works" className="relative overflow-hidden bg-black px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
    {/* Background glow */}
 

    <div className="relative mx-auto max-w-[1600px]">
      {/* Heading */}
      <h2
        className="mb-10 unbounded text-center text-[25px] font-bold tracking-[-0.6px] md:text-[40px]"
        style={{
          background: "linear-gradient(90deg, #F8E096 0%, #FFB01B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Meet the HANA Protocol
      </h2>

      {/* Two-card swipe slides on small screens; grid on tablet and desktop */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
        {Array.from({ length: Math.ceil(features.length / 2) }, (_, slideIndex) => (
          <div
            key={slideIndex}
            className="grid w-full shrink-0 snap-start grid-cols-2 gap-3 md:contents"
          >
            {features.slice(slideIndex * 2, slideIndex * 2 + 2).map((feature) => (
              <div
                key={feature.title}
                className="group flex min-h-[64px] min-w-0 items-center gap-2 rounded-lg border border-white/15 bg-[#D9D9D933] px-2 py-2.5 shadow-[inset_0_1px_8px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.19] sm:gap-3.5 sm:px-3.5"
              >
                <div className="flex h-[55px] w-[42px] shrink-0 items-center justify-center md:h-[75px] md:w-[118px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3
                  className="chakra-petch min-w-0 text-xs font-black leading-5 sm:text-sm md:max-w-[230px] md:text-[20px]  lg:text-[25px] md:leading-8"
                  style={{
                    background: "linear-gradient(90deg, #E7AD38 0%, #FFD98C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: "0.35px #E7AD38",
                  }}
                >
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

}
