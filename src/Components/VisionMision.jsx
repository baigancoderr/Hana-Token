
import React from "react";
import { StaggerGroup, StaggerItem } from "./Motion";
import arrowRight from "../assets/VisionMission/arrowright.png";
import compoundingWithdraw from "../assets/VisionMission/compounding_withdraw.png";
import connect from "../assets/VisionMission/connect.png";
import eco1 from "../assets/VisionMission/eco1.png";
import eco2 from "../assets/VisionMission/eco2.png";
import eco3 from "../assets/VisionMission/eco3.png";
import eco4 from "../assets/VisionMission/eco4.png";
import eco5 from "../assets/VisionMission/eco5.png";
import eco6 from "../assets/VisionMission/eco6.png";
import participate from "../assets/VisionMission/participate.png";
import rewards from "../assets/VisionMission/rewards.png";
import stake from "../assets/VisionMission/stake.png";
import value1 from "../assets/VisionMission/value1.png";
import value2 from "../assets/VisionMission/value2.png";
import value3 from "../assets/VisionMission/value3.png";
import value4 from "../assets/VisionMission/value4.png";
import value5 from "../assets/VisionMission/value5.png";
import vision from "../assets/VisionMission/mission.png";

const goldText =
  "bg-[linear-gradient(90deg,#8F5B12_0%,#DFA52E_25%,#FFF1A8_48%,#E7AD38_68%,#9D6415_100%)] bg-clip-text text-transparent";
const flowHeadingGoldText =
  "bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-transparent";

const visionCards = [
  {
    title: "Our Vision",
    description:
      "To build a sustainable decentralized ecosystem where technology, digital assets and community participation work together.",
  },
  {
    title: "Our Mission",
    description:
      "To connect smart contracts, liquidity management, token supply controls and decentralized governance through verifiable protocol rules.",
  },
];

const values = [
  { icon: value1, title: "Decentralization" },
  { icon: value2, title: "Transparency" },
  { icon: value3, title: "Security" },
  { icon: value4, title: "Economic Discipline" },
  { icon: value5, title: "Long-Term Resilience" },
];

const participationFlow = [
  { title: "Connect", image: connect },
  { title: "Join", image: participate },
  { title: "Stake", image: stake },
  { title: "Earn  Rewards", image: rewards },
  { title: "Withdraw", image: compoundingWithdraw },
];

const economicFlow = [
  { title: "Protocol Activity", image: eco1 },
  { title: "Revenue", image: eco2 },
  { title: "Reserve & Liquidity", image: eco3 },
  { title: "Buyback", image: eco4 },
  { title: "Burn", image: eco5 },
  { title: "DSE Monitoring", image: eco6 },
];

function InfoCard({ title, description }) {
  return (
    <StaggerItem
      as="article"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="vision-card-glow min-w-0 rounded-lg p-3 sm:p-4"
    >
      <h3 className={`mb-2 text-[15px] unbounded font-bold md:text-[20px] ${goldText}`}>
        {title}
      </h3>
      <p className="text-[12px] chakra-petch leading-[1.65] text-[#B7AFC8] sm:text-[14px]">
        {description}
      </p>
    </StaggerItem>
  );
}

function FlowCard({ title, image }) {
  return (
    <div
      className="w-full rounded-lg border border-[#6B521F] bg-[#0A0A0A] p-2 md:w-[220px] md:shrink-0 md:snap-start md:rounded-none md:border-0 md:bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] md:p-px md:[clip-path:polygon(9%_0%,_92%_0%,_100%_49%,_92%_100%,_7%_100%,_0%_53%)] lg:w-auto lg:min-w-0"
    >
      <div
        className="flex min-h-[54px] min-w-0 items-center gap-3 rounded-md bg-black px-2 py-2 sm:min-h-[60px] md:justify-center md:gap-3 md:rounded-none md:px-3 md:py-4 md:[clip-path:polygon(9%_0%,_92%_0%,_100%_49%,_92%_100%,_7%_100%,_0%_53%)]"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          className="ml-1 h-12 w-12 shrink-0 object-contain sm:ml-2 md:h-16 md:w-16"
        />
        <span className="text-center text-[14px] chakra-petch !font-bold leading-snug text-white sm:text-[16px]">
          {title}
        </span>
      </div>
    </div>
  );
}

function EconomicItem({ title, image, isLast }) {
  return (
    <div className="flex w-[240px] shrink-0 items-center justify-center gap-2 xl:w-auto xl:min-w-0 xl:flex-1">
      <div className="flex min-w-0 items-center gap-2">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
        />
        <span className="max-w-[100px] text-center chakra-petch text-[14px] !font-bold leading-tight text-white sm:text-[15px]">
          {title}
        </span>
      </div>

      {!isLast && (
        <img
          aria-hidden="true"
          src={arrowRight}
          alt=""
          className="h-12 w-12 shrink-0 object-contain sm:h-12 sm:w-12 pl-3"
        />
      )}
    </div>
  );
}

export default function HanaProtocol() {
  return (
    <main className=" overflow-hidden bg-black px-4  text-white sm:px-6  lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Top section */}
        <StaggerGroup as="section" className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10 lg:gap-16">
          {/* Left content */}
          <StaggerItem className="order-2 space-y-4 md:order-1">
            <StaggerGroup className="grid grid-cols-2 gap-3">
              {visionCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </StaggerGroup>

            <StaggerItem
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="vision-card-glow rounded-lg p-3 sm:p-4"
            >
              <h3 className={`mb-3 text-[15px] unbounded font-bold md:text-[20px] ${goldText}`}>
                Our Values
              </h3>

              <div className="space-y-2.5">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={value.icon}
                      alt=""
                      loading="lazy"
                      className="h-4 w-4 shrink-0 object-contain sm:h-5 sm:w-5"
                    />
                    <span className="text-[16px] chakra-petch font-medium text-white md:text-[18px]">
                      {value.title}
                    </span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerItem>

          {/* Right coin image */}
          <StaggerItem
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="order-1 flex min-w-0 items-center justify-center md:order-2"
          >
            <img
              src={vision}
              alt="HANA golden protocol coin"
              className="h-auto w-full max-w-[600px] object-contain drop-shadow-[0_0_24px_rgba(231,173,56,0.28)]"
            />
          </StaggerItem>
        </StaggerGroup>

        {/* Heading and description */}
        <StaggerGroup as="section" className="mx-auto mt-10 max-w-4xl text-left sm:mt-14 md:text-center">
          <StaggerItem as="h1" className="text-2xl unbounded font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            How You Connect to the{" "}
            <span className={goldText}>HANA Protocol</span>
          </StaggerItem>

          <StaggerItem
            as="p"
            className={`mt-3 text-[15px] chakra-petch font-semibold tracking-[0.15em] sm:text-[18px] sm:tracking-[0.20em] ${goldText}`}
          >
            Structured&nbsp; || &nbsp;Intelligent&nbsp; || &nbsp;Decentralized
          </StaggerItem>

          <StaggerItem as="p" className="mx-0 mt-3 max-w-2xl text-[15px] chakra-petch leading-6 text-[#fff] sm:text-[19px] md:mx-auto">
            HANA connects participation, economic monitoring, liquidity
            management and token-supply mechanisms.
          </StaggerItem>
        </StaggerGroup>

        {/* Participation flow */}
        <StaggerGroup as="section" className="mt-7 sm:mt-9">
          <StaggerItem as="h2" className={`mb-2 text-[18px] font-bold sm:text-[25px] ${flowHeadingGoldText}`}>
            Participation Flow
          </StaggerItem>

          <StaggerItem className="rounded-xl p-px">
            <div className="rounded-xl bg-black py-3 sm:py-4">
              <StaggerGroup className="grid grid-cols-2 gap-3 [&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1 md:flex md:snap-x md:snap-mandatory md:gap-4 md:overflow-x-auto md:overscroll-x-contain md:pb-2 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0">
                {participationFlow.map((item) => (
                  <StaggerItem
                    key={item.title}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="w-full md:w-[220px] md:shrink-0 md:snap-start lg:w-auto lg:min-w-0"
                  >
                    <FlowCard {...item} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Economic flow */}
        <StaggerGroup as="section" className="mt-6 sm:mt-4">
          <StaggerItem as="h2" className={`mb-6 text-[18px] font-bold sm:text-[25px] ${flowHeadingGoldText}`}>
            Economic Flow
          </StaggerItem>

          <StaggerItem className="rounded-full bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] p-px">
            <div className="overflow-x-auto rounded-full bg-black px-3 py-4 overscroll-x-contain sm:px-5 sm:py-5 xl:overflow-x-hidden">
              <StaggerGroup className="flex w-max min-w-full items-center gap-2 xl:w-full xl:justify-between">
                {economicFlow.map((item, index) => (
                  <StaggerItem
                    key={item.title}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="w-[240px] shrink-0 xl:w-auto xl:min-w-0 xl:flex-1"
                  >
                    <EconomicItem
                      {...item}
                      isLast={index === economicFlow.length - 1}
                    />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </main>
  );
}
