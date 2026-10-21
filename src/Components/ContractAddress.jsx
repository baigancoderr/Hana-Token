
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import contractImage from "../assets/Contract/contract.png";
import { StaggerGroup, StaggerItem } from "./Motion";

const CONTRACT_ADDRESS = "0xb2ffd1b3b48d6913d8d76062cae30708d2a16e62";

export default function ContractAddress() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy contract address:", error);
    }
  };

  return (
    <section className="mx-auto my-2 w-[95%] max-w-[1600px] rounded-2xl bg-[linear-gradient(126.37deg,#1B1B1B_1%,#0C0C0C_62.51%,#000000_99.43%)] px-4 py-5 font-['Poppins',sans-serif] text-white sm:px-8 sm:py-10 min-[768px]:min-h-[340px] min-[1101px]:relative min-[1101px]:my-20 min-[1101px]:h-[450px] min-[1101px]:px-[60px] min-[1101px]:py-10">
      <StaggerGroup className="flex flex-col items-center gap-5 min-[768px]:h-full min-[768px]:flex-row min-[768px]:justify-between">
        <StaggerItem className="flex w-full justify-center min-[768px]:w-[38%] min-[768px]:shrink-0 min-[768px]:justify-start min-[1101px]:absolute min-[1101px]:bottom-[-20px] min-[1101px]:left-[40px]">
          <img
            src={contractImage}
            alt="Golden HANA blockchain statue"
            className="h-auto w-[min(65%,260px)] object-contain min-[600px]:w-[min(50%,300px)] min-[768px]:w-[min(100%,300px)] min-[1101px]:w-[min(32vw,415px)]"
          />
        </StaggerItem>

        <StaggerGroup className="flex w-full min-w-0 flex-col items-center text-center min-[768px]:w-[58%] min-[1101px]:ml-auto">
           <StaggerItem as="span" className="inline-flex items-center bg-gradient-to-r from-[#FFE49A] to-[#FFB92E] px-4 py-2 text-[16px] md:text-[20px] font-bold  text-black [clip-path:polygon(0_0,100%_0,100%_70%,88%_100%,0_100%)]">
            Contract Address 
          </StaggerItem>

          <StaggerItem className="mt-7 mb-5 w-full max-w-[700px] rounded-[10px] border border-white/80 bg-white/[0.03] px-3 py-4 sm:px-6 sm:py-5 min-[1101px]:mt-10 min-[1101px]:mb-8">
            <p className="break-all font-['Montserrat',sans-serif] text-[clamp(14px,1.8vw,24px)] leading-relaxed tracking-[0.04em] text-white">
              {CONTRACT_ADDRESS}
            </p>
          </StaggerItem>

          <StaggerItem
            as="button"
            type="button"
            onClick={handleCopy}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[5px] bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] px-6 py-2 text-sm font-semibold text-black transition hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8E096]"
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={15} />
                Copy Address
              </>
            )}
          </StaggerItem>
        </StaggerGroup>
      </StaggerGroup>
    </section>
  );
}
