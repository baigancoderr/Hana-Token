
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqImg from "../assets/faq.png";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const faqItems = [
  {
    question: "What is Project Hana?",
    answer:
      "Project Hana is a decentralized ecosystem built around Hana Token, staking, liquidity infrastructure, DAO participation and dynamic economic mechanisms.",
  },
  {
    question: "What is Hana Token?",
    answer:
      "Hana Token is the ecosystem's digital asset, designed to support participation in the platform's token-related utilities and mechanisms.",
  },
  {
    question: "What is the Dynamic Stability Engine?",
    answer:
      "The Dynamic Stability Engine is a proposed mechanism designed to support the ecosystem's economic framework through predefined stability parameters.",
  },
  {
    question: "What is Proof of Reserve?",
    answer:
      "Proof of Reserve refers to a transparency mechanism intended to communicate reserve information. Its effectiveness depends on verifiable evidence and independent validation.",
  },
  {
    question: "What is Proof of Burn?",
    answer:
      "Proof of Burn is a mechanism used to document token burning events. Actual burns should be verifiable through on-chain transactions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className=" overflow-hidden bg-black px-5 py-10 font-chakra-petch text-white sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-10 md:grid-cols-[1.15fr_0.85fr] lg:gap-10 xl:gap-12">

        {/* LEFT: FAQ Accordion */}
        <div className="order-2 min-w-0 lg:order-1">

          {/* Section Label */}
          <Reveal className="mb-5">
            <span className="inline-flex items-center bg-gradient-to-r from-[#F8E096] to-[#FFB01B] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black [clip-path:polygon(0_0,100%_0,100%_75%,88%_100%,0_100%)]">
              FAQ
            </span>
          </Reveal>

          {/* Accordion Items */}
          <StaggerGroup className="flex flex-col gap-4 sm:gap-7">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <StaggerItem
                  as="article"
                  key={item.question}
                  className={`overflow-hidden rounded-[8px] transition-colors duration-300 ${
                    isOpen
                      ? "bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] text-black"
                      : "bg-[#222222] text-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-8 sm:py-[22px]"
                  >
                    <span className="text-[16px] font-semibold leading-6 md:text-[16px] lg:text-[24px]">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={23}
                      strokeWidth={2.5}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[16px] leading-[1.55] sm:px-[34px] sm:pb-5 md:text-[16px] lg:text-[22px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* RIGHT: Heading and Illustration */}
        <div className="order-1 flex min-w-0 flex-col items-center lg:order-2 lg:sticky lg:top-10 lg:items-end">

          {/* Heading */}
          <StaggerGroup className="w-full text-center lg:text-right">
            <StaggerItem as="h2" className="unbounded mx-auto max-w-[580px] text-[25px] font-bold leading-[1.2] tracking-[-1px] text-white  md:text-[40px] lg:mx-0 lg:ml-auto lg:text-[42px] xl:text-[52px]">
              Frequently
              
              Asked
            
              Questions
            </StaggerItem>

            {/* Decorative Accent */}
            <StaggerItem className="mt-4 flex items-center justify-center gap-2 lg:justify-end">
              <span className="h-[9px] w-[9px] rounded-full bg-[#D9C9EA]" />
              <span className="h-[9px] w-[50px] rounded-full bg-gradient-to-r from-[#F8E096] to-[#FFB01B]" />
            </StaggerItem>
          </StaggerGroup>

          {/* FAQ Artwork */}
          <Reveal className="mt-3 w-full max-w-[430px] lg:mt-0 lg:max-w-[480px]">
            <img
              src={faqImg}
              alt="Golden FAQ illustration with a futuristic character and question marks"
              className="h-auto w-full object-contain"
              loading="eager"
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
