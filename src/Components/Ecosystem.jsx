
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "./Motion";

const ecosystemItems = [
  {
    title: "Liquidity\nReserve",
    description: "A foundation for organizing liquidity resources across the Hana ecosystem.",
  },
  {
    title: "Proof of\nReserve",
    description: "A proposed way to make reserve information easier to review and understand.",
  },
  {
    title: "DAO Partner\nProgram",
    description: "A framework for collaborating with community-led organizations and partners.",
  },
  {
    title: "Dynamic\nStability Engine",
    description: "A design concept focused on supporting stability as ecosystem conditions change.",
  },
  {
    title: "Proof of\nBur",
    description: "A mechanism concept for making token burns more visible to the community.",
  },
  {
    title: "Hana\nStaking",
    description: "A staking experience designed to connect participants with the Hana network.",
  },
  {
    title: "Locked\nGrowth",
    description: "A structured approach to long-term growth through time-based token commitments.",
  },
  {
    title: "Treasury &\nGovernance",
    description: "Tools for transparent treasury coordination and community participation.",
  },
];

export default function Ecosystem() {
  const [activeCard, setActiveCard] = useState(0);
  const sliderRef = useRef(null);

  const goToCard = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({
      left: index * slider.clientWidth,
      behavior: "smooth",
    });
    setActiveCard(index);
  };

  return (
    <section id="ecosystem" className="font-chakra-petch  bg-[#050309] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-[20px]">
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <StaggerGroup className="mb-12 sm:mb-14 lg:mb-16">
          <StaggerItem as="span" className="inline-flex items-center bg-gradient-to-r from-[#FFE49A] to-[#FFB92E] px-4 py-1 text-[13px] font-extrabold uppercase text-black [clip-path:polygon(0_0,100%_0,100%_70%,88%_100%,0_100%)]">
            Ecosystem
          </StaggerItem>

          <StaggerItem as="h1" className="unbounded mt-5 max-w-[850px] text-[25px] font-extrabold leading-[1.2] tracking-normal text-[#E8EEFF] sm:text-[32px] md:text-[40px] lg:text-[58px]">
            One network Eight
            Connected ideas
          </StaggerItem>

          <StaggerItem as="p" className="mt-6 text-[13px] font-medium uppercase tracking-[-0.1px] text-[#DFA52E]">
            The module directory / 08 connected parts
          </StaggerItem>
        </StaggerGroup>

        {/* Ecosystem Cards */}
        <StaggerGroup
          ref={sliderRef}
          onScroll={(event) => {
            const slider = event.currentTarget;
            setActiveCard(Math.round(slider.scrollLeft / slider.clientWidth));
          }}
          aria-label="Ecosystem cards"
          className="min-w-0 flex snap-x snap-mandatory overflow-x-auto scroll-smooth pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-[38px] md:overflow-visible md:snap-none lg:grid-cols-4 lg:gap-x-5 xl:gap-x-10 lg:gap-y-[76px]"
        >

          {ecosystemItems.map((item) => (
            <StaggerItem
              key={item.title}
              className="relative mt-3 w-full shrink-0 snap-center transition-transform duration-300 hover:-translate-y-1 md:w-auto md:shrink md:snap-align-none"
            >
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[-20px] z-0 h-[30px] w-[180px] max-w-[92%] -translate-x-1/2 rounded-t-[2px] bg-[linear-gradient(87.72deg,#FFB01B_-2.49%,#F8E096_113.42%)] shadow-[0px_0px_6px_0px_#00000040]"
              />

              <article className="relative z-10 flex min-h-[308px] flex-col items-center rounded-[9px] border border-[#E5E5E5] bg-white px-4 pb-7 pt-[76px] text-center shadow-[0px_4px_4px_0px_#00000040,inset_0px_0px_6px_0px_#00000040] sm:min-h-[275px] sm:px-3 sm:pt-[72px] lg:px-4">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[-20px] z-20 h-auto aspect-[2/1] w-[160px] max-w-[54%] -translate-x-1/2 rounded-b-full bg-[#DFA52E] shadow-[0px_0px_6px_0px_#00000040]"
                />

                <h2 className="unbounded relative z-30 mb-3 whitespace-pre-line text-[23px] font-semibold leading-[1.3] tracking-[-0.45px] text-[#100D18] sm:text-[20px] lg:text-[20px] xl:text-[23px]">
                  {item.title}
                </h2>

                <p className="relative z-30 max-w-[305px] text-[16px] font-normal leading-[1.55] text-[#20202B] sm:text-[14px] lg:text-[16px]">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}

        </StaggerGroup>

        <StaggerGroup className="mt-5 flex items-center justify-between md:hidden">
          <StaggerItem
            as="button"
            type="button"
            onClick={() => goToCard(activeCard - 1)}
            disabled={activeCard === 0}
            aria-label="Previous ecosystem card"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DFA52E]/60 text-[#E7AD38] transition-colors hover:bg-[#E7AD38]/10 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft size={20} />
          </StaggerItem>

          <StaggerGroup className="flex items-center gap-2" aria-label="Choose ecosystem card">
            {ecosystemItems.map((item, index) => (
              <StaggerItem
                as="button"
                key={item.title}
                type="button"
                onClick={() => goToCard(index)}
                aria-label={`Go to ${item.title.replace("\n", " ")} card`}
                aria-current={activeCard === index ? "step" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  activeCard === index
                    ? "w-6 bg-[#E7AD38]"
                    : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </StaggerGroup>

          <StaggerItem
            as="button"
            type="button"
            onClick={() => goToCard(activeCard + 1)}
            disabled={activeCard === ecosystemItems.length - 1}
            aria-label="Next ecosystem card"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DFA52E]/60 text-[#E7AD38] transition-colors hover:bg-[#E7AD38]/10 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronRight size={20} />
          </StaggerItem>
        </StaggerGroup>
        <p className="mt-2 text-center text-xs text-white/50 md:hidden">
          Swipe to explore ecosystem
        </p>

           {/* Vision & Mission */}
                <StaggerGroup className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 md:grid-cols-2 md:gap-7 lg:mt-[80px] lg:gap-7">
        
                  {/* Vision */}
                  <StaggerItem className="gold-gradient-top-border pt-4" >
                    {/* <p className="gold-gradient-text text-[14px] font-medium uppercase">
                   HANA Gaming
                    </p>
         */}
                    <h3 className="gold-gradient-text unbounded mt-3 text-[20px] font-bold leading-tight tracking-[-0.025em] sm:text-[25px]">
                     HANA Gaming
                    </h3>
        
                    <p className="mt-2 max-w-[600px] text-[18px] leading-[1.65] text-[#B8B1C8]">
                    More than a token. A growing gaming community. A DAOvoted gaming initiative intended to bring interactive digital
experiences into the HANA ecosystem, and a utility
designed to help the token reach new heights. Game
features, launch timing and rewards will be announced
once finalized by DAO Members.

                    </p>
                  </StaggerItem>
        
                  {/* Mission */}
                  <StaggerItem className="gold-gradient-top-border pt-4">
                    {/* <p className="gold-gradient-text text-[14px] font-medium uppercase">
                      02 / MISSION
                    </p> */}
        
                    <h3 className="gold-gradient-text unbounded mt-3 text-[20px] font-bold leading-tight tracking-[-0.025em] sm:text-[21px]">
                     Hana AI Wallet
                    </h3>
        
                    <p className="mt-2 max-w-[600px] text-[18px] leading-[1.65] text-[#B8B1C8]">
                    A proposed wallet initiative exploring AI-assisted digitalasset management. Final features, security architecture
and availability remain to be confirmed by DAO Members.
                    </p>
                  </StaggerItem>
                </StaggerGroup>
      </div>
    </section>
  );
}
