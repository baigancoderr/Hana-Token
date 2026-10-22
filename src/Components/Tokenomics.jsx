
import React from "react";
import tokenEconomicsImg from "../assets/tokenomics.png";

export default function TokenEconomics() {
  return (
    <section className="w-full overflow-hidden bg-black px-4 py-6 text-white sm:px-6 sm:py-12 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-[1600px]">
        {/* Heading */}
        <h2 className="unbounded bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-center text-[25px] font-bold tracking-tight text-transparent md:text-[40px] lg:text-[50px]">
          Token Economics
        </h2>

        {/* Center Image */}
        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-6">
          <img
            src={tokenEconomicsImg}
            alt="Token Economics"
            className="h-auto w-full max-w-[6 object-contain"
          />
        </div>

        {/* Description */}
        <p className="chakra-petch mx-auto mt-4 max-w-3xl text-center text-[15px] leading-5 text-white lg:mt-8 md:text-[18px] md:leading-7">
          Built on IT and blockchain expertise. Detailed supply, allocation
          percentages and transaction rules will be defined in the official
          tokenomics documentation.
        </p>
      </div>
    </section>
  );
}
