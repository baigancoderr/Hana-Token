
import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import connectImage from "../assets/join/connect.png";
import exploreImage from "../assets/join/explore.png";
import growImage from "../assets/join/grow.png";
import participateImage from "../assets/join/participate.png";
import stakeImage from "../assets/join/stake.png";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const features = [
  { title: "Connect", image: connectImage },
  { title: "Participate", image: participateImage },
  { title: "Stake", image: stakeImage },
  { title: "Explore", image: exploreImage },
  { title: "Grow", image: growImage },
];

export default function JoinUs() {
  return (
    <section className=" overflow-hidden mb-10 bg-black px-5 py-5 text-white sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Join Hana Label */}
       <Reveal as="span" className="inline-flex items-center bg-gradient-to-r from-[#F8E096] to-[#FFB01B] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black [clip-path:polygon(0_0,100%_0,100%_75%,88%_100%,0_100%)]">
                     Join HANA
                   </Reveal>

        {/* Heading and Description */}
        <div className="max-w-[760px]">
          <Reveal as="h1" className="text-[25px] mt-6 unbounded font-bold leading-[1.2] tracking-[-1.5px] text-[#e8f0ff] sm:text-5xl md:text-[40px] lg:text-[58px] lg:tracking-[-0.01px]">
              Your Next Chapter in
               Decentralization.
          </Reveal>

          <Reveal as="p" className="mt-5 chakra-petch max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
            Explore the Hana ecosystem and discover a new approach
            to decentralized participation.
          </Reveal>

          {/* Buttons and Social Icons */}
          <StaggerGroup className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4">
            <StaggerItem
              as={Link}
              to="/login"
              className="group chakra-petch inline-flex items-center gap-3 px-3 py-3 text-[15px] font-semibold transition hover:text-amber-400"
            >
                Login
                <ArrowUpRight className="text-base chakra-petch text-amber-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </StaggerItem>

            <StaggerItem
              as={Link}
              to="/register"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-10 items-center chakra-petch justify-center gap-3 rounded-md bg-gradient-to-r from-yellow-200 to-amber-400 px-5 py-3 text-[16px] font-bold text-black transition hover:brightness-110"
            >
                Join Now
                <ArrowUpRight className="text-base" />
            </StaggerItem>

            {/* Social Links */}
            <StaggerGroup className="flex items-center gap-2">
              <StaggerItem
                as="a"
                href="https://facebook.com"
                aria-label="Facebook"
                whileHover={{ y: -3, scale: 1.08 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-amber-400 hover:text-amber-400"
              >
                <span className="text-sm font-bold">f</span>
              </StaggerItem>

              <StaggerItem
                as="a"
                href="https://x.com"
                aria-label="X"
                whileHover={{ y: -3, scale: 1.08 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-amber-400 hover:text-amber-400"
              >
                <span className="text-sm font-semibold">X</span>
              </StaggerItem>

              <StaggerItem
                as="a"
                href="https://telegram.org"
                aria-label="Telegram"
                whileHover={{ y: -3, scale: 1.08 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-amber-400 hover:text-amber-400"
              >
                <Send size={16} />
              </StaggerItem>

              <StaggerItem
                as="a"
                href="https://discord.com"
                aria-label="Discord"
                whileHover={{ y: -3, scale: 1.08 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-amber-400 hover:text-amber-400"
              >
                <MessageCircle size={16} />
              </StaggerItem>
            </StaggerGroup>
          </StaggerGroup>
        </div>

        {/* Bottom Ecosystem */}
        <Reveal className="mt-6 rounded-[22px] border border-amber-500/60 bg-gradient-to-b from-[#101010] to-[#050505] p-4 transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(245,190,70,0.12)] sm:mt-14 sm:px-6 sm:py-5">
          <StaggerGroup className="flex flex-nowrap gap-3 overflow-x-auto overscroll-x-contain pb-2 lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible lg:pb-0">
            {features.map((feature) => (
              <StaggerItem
                as="a"
                key={feature.title}
                href={`#${feature.title.toLowerCase()}`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group flex w-[140px] shrink-0 flex-col items-center justify-center rounded-xl px-2 py-2 transition hover:bg-amber-400/5 lg:w-auto lg:min-w-0"
              >
                <div className="flex h-[52px] w-full items-center justify-center sm:h-[58px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="h-full max-w-[110px] object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <span className="mt-2 text-center text-xs font-medium text-[#e8edf5] transition group-hover:text-amber-300 sm:text-sm">
                  {feature.title}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

      </div>
    </section>
  );
}
