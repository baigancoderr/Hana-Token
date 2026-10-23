
import React from "react";
import teamImage1 from "../assets/team/img1.jpg";
import teamImage2 from "../assets/team/img2.png";
import teamImage3 from "../assets/team/img3.png";
import teamImage4 from "../assets/team/img4.png";
import teamImage5 from "../assets/team/img5.jpg";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const teamMembers = [
  {
    id: 1,
    name: "Founder & Project Lead",
    image: teamImage1,
    position: "left-0 top-0 h-[230px] lg:h-[400px] w-[25%]",
  },
  {
    id: 2,
    name: "Economic Systems & DSE Lead",
    image: teamImage2,
    position: "left-[31%] top-0 h-[150px] lg:h-[200px] w-[25%]",
  },
  {
    id: 3,
    name: "Wallet & Product Development Lead",
    image: teamImage3,
    position: "left-[62%] top-0 h-[230px] lg:h-[400px] w-[25%]",
  },
  {
    id: 4,
    name: "Blockchain & Smart Contract Lead",
    image: teamImage4,
    position: "left-0 top-[250px]  lg:top-[410px] h-[200px] w-[25%]",
  },
  {
    id: 5,
    name: "DAO & Ecosystem Lead",
    image: teamImage5,
    position: "left-[31%] top-[160px] lg:top-[220px] h-[230px] lg:h-[400px] w-[25%]",
  },
  {
    id: 6,
    name: "Gaming & Utility Lead",
    image: teamImage4,
    position: "left-[62%] top-[250px]  lg:top-[410px] h-[200px] w-[25%]",
  },
];

export default function Team() {
  return (
    <section className="font-chakra-petch w-full overflow-hidden bg-black px-5 py-2 text-white sm:px-8 lg:px-10 lg:py-8">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_180px] md:gap-5 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-3">

        {/* Team Images */}
        <div className="relative mx-auto h-auto w-full max-w-[650px] md:h-[450px] md:max-w-none lg:h-[620px]">

          {/* Desktop Layout */}
          <StaggerGroup className="relative hidden h-full w-full md:block">
            {teamMembers.map((member) => (
              <StaggerItem
                as="article"
                key={member.id}
                className={`group absolute overflow-hidden rounded-full ${member.position}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                                                                                                    
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

                <h3 className="absolute  bottom-10 left-1/2 z-10 w-[60%] -translate-x-1/2 bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-center text-[14px] font-bold leading-[1.5] text-transparent lg:text-[14px]">
                  {member.name}
                </h3>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Mobile Layout */}
          <StaggerGroup className="grid grid-cols-2 gap-2 md:hidden">
            {teamMembers.map((member) => (
              <StaggerItem
                as="article"
                key={member.id}
                className="group relative aspect-[0.9/1] overflow-hidden rounded-full"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/65" />

                <h3 className="absolute left-1/2 top-1/2 z-10 w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-center text-xs font-bold leading-relaxed text-transparent">
                  {member.name}
                </h3>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Heading and Description */}
        <div className="order-first text-center md:order-none md:pt-0 md:text-center">
          <Reveal as="h2" className="unbounded inline-block bg-[linear-gradient(90deg,#F8E096_0%,#FFB01B_100%)] bg-clip-text text-[25px] md:text-[30px] font-bold leading-tight tracking-[-1px] text-transparent sm:text-4xl md:text-[28px] lg:text-[30px]">
            Our Team
          </Reveal>

          <Reveal as="p" className="mx-auto mt-3 max-w-full md:max-w-[350px] text-[16px] leading-[1.6] text-white/90  text-left md:text-right md:max-w-[270px] md:text-[14px] lg:text-[15px]">
          A team focused on decentralized technology, economic architecture and ecosystem development
          </Reveal>
        </div>
      </div>
    </section>
  );
}
