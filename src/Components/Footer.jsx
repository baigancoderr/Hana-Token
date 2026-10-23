
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const MotionDiv = motion.div;

const Footer = () => {
  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Token", href: "#token" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <footer className="font-chakra-petch w-full bg-black text-white">
      <div className="mx-auto max-w-[1920px] px-5 sm:px-8 lg:px-[40px]">

        {/* Top Border */}
        <Reveal className="h-px w-full overflow-hidden bg-[#493052]">
          <MotionDiv
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#FFD36A] to-transparent"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
          />
        </Reveal>

        {/* Main Footer */}
        <StaggerGroup className="flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:pb-[48px] lg:pt-[76px]">

          {/* Logo & Tagline */}
          <StaggerGroup className="flex flex-col items-start">
            <StaggerItem
              as="a"
              href="/"
              aria-label="Hana Home"
              whileHover={{ scale: 1.06, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="origin-left"
            >
              <img
                src={logo}
                alt="Hana Logo"
                className="h-auto w-[145px] object-contain drop-shadow-[0_0_0_rgba(255,211,106,0)] transition-[filter] duration-300 hover:drop-shadow-[0_0_14px_rgba(255,211,106,0.35)] sm:w-[155px]"
              />
            </StaggerItem>

            <StaggerItem as="h2" className="mt-6 text-[18px] font-normal leading-relaxed text-[#E0E7F0] sm:text-[21px]">
              Where Even Dreams Are Decentralised.
            </StaggerItem>

            <StaggerItem as="p" className="mt-4 text-[13px] font-normal text-[#E5C45B] sm:text-[14px]">
              Hana Token&nbsp; / &nbsp;Decentralized Ecosystem
            </StaggerItem>
          </StaggerGroup>

          {/* Navigation */}
          <StaggerGroup
            as="nav"
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8 lg:justify-end lg:gap-x-8 xl:gap-x-9"
          >
            {navLinks.map((link) => (
              <StaggerItem
                as="a"
                key={link.name}
                href={link.href}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="group relative text-[15px] font-normal text-[#E0E7F0] transition-colors duration-200 hover:text-[#E5C45B] sm:text-[17px]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#F8E096] to-[#FFB01B] transition-transform duration-300 group-hover:scale-x-100" />
              </StaggerItem>
            ))}                                     
          </StaggerGroup>
        </StaggerGroup>

        {/* Disclaimer Section */}
        <StaggerGroup className="border-t border-[#493052] pt-8 sm:pt-9">
          <StaggerItem as="p" className="text-[13px] font-normal text-[#E5C45B] sm:text-[14px]">
            BEFORE IMPLEMENTATION
          </StaggerItem>

          <StaggerItem as="p" className="mt-4 max-w-full text-[14px] font-normal leading-5  md:leading-7 text-[#B8B0C8] sm:text-[15px]">
            staking, reward, liquidity, DAO, token and economic mechanisms are
            subject to final technical, legal, regulatory, security and
            governance review before implementation.
          </StaggerItem>
        </StaggerGroup>

        {/* Bottom Links */}
        <StaggerGroup className="flex justify-end gap-6 pb-7 pt-6 sm:gap-7 sm:pb-8">
          <StaggerItem
            as="a"
            href="/terms"
            whileHover={{ y: -2 }}
            className="group relative text-[14px] text-[#E0E7F0] transition-colors hover:text-[#E5C45B] sm:text-[15px]"
          >
            Terms
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#F8E096] to-[#FFB01B] transition-transform duration-300 group-hover:scale-x-100" />
          </StaggerItem>

          <StaggerItem
            as="a"
            href="/privacy"
            whileHover={{ y: -2 }}
            className="group relative text-[14px] text-[#E0E7F0] transition-colors hover:text-[#E5C45B] sm:text-[15px]"
          >
            Privacy
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#F8E096] to-[#FFB01B] transition-transform duration-300 group-hover:scale-x-100" />
          </StaggerItem>
        </StaggerGroup>
      </div>
    </footer>
  );
};

export default Footer;
