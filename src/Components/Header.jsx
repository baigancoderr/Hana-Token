import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "DSE", href: "#dse" },
  { name: "DAO Protocol", href: "#dao-protocol" },
  { name: "Token", href: "#token" },
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Roadmap", href: "#roadmap" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollToTop(window.scrollY > 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Reveal as="header" className="header-gradient-border mx-auto max-w-[1600px] font-chakra-petch bg-[#000611] text-white">
      <nav className="relative flex min-h-[75px] md:min-h-[90px] items-center justify-between px-4 sm:px-10 lg:px-[2%] xl:px-[2%]">
        {/* Logo */}
        <Reveal as="a" href="/" className="shrink-0" aria-label="Khana Home">
          <img
            src={logo}
            alt="Khana Decentralized Token"
            className="h-auto w-[145px] object-contain"
          />
        </Reveal>

        {/* Desktop Navigation */}
        <StaggerGroup className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 min-[1025px]:flex xl:gap-6">
          {navLinks.map((link) => (
            <StaggerItem
              as="a"
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[16px] font-normal text-[#d6d9e2] transition-colors duration-200 hover:text-[#ffbd32]"
            >
              {link.name}
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Desktop Actions */}
        <StaggerGroup className="hidden items-center gap-3 min-[481px]:flex xl:gap-4">
          <StaggerItem
            as={Link}
            to="/login"
            className="text-[16px] text-[#e0e3ec] transition-colors hover:text-[#ffbd32]"
          >
            Login
          </StaggerItem>

          <StaggerItem
            as={Link}
            to="/register"
            className="group flex h-[46px] xl:h-[51px] min-w-[60px] xl:min-w-[80px] items-center justify-center gap-2 rounded-[9px] rounded-br-[9px] bg-gradient-to-r from-[#ffe69c] via-[#ffca48] to-[#ffb51c] px-7 text-[16px] font-semibold text-black transition-all duration-300 hover:brightness-105"
          >
            <span>Join Now</span>
            <ArrowUpRight
              size={24}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </StaggerItem>
        </StaggerGroup>

        {/* Mobile Menu Button */}
        <Reveal
          as="button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-white transition hover:bg-white/10 min-[1025px]:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </Reveal>

        {/* Mobile Navigation */}
        {menuOpen && (
          <StaggerGroup className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#020710] px-6 py-5 shadow-xl min-[1025px]:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <StaggerItem
                  as="a"
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-[15px] text-[#d6d9e2] transition hover:bg-white/5 hover:text-[#ffbd32]"
                >
                  {link.name}
                </StaggerItem>
              ))}

              <div className="mt-3 hidden items-center gap-4 border-t border-white/10 pt-4 max-[480px]:flex">
                <StaggerItem
                  as={Link}
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-lg border border-white/15 py-3 text-center text-sm hover:border-[#ffbd32]"
                >
                  Login
                </StaggerItem>

                <StaggerItem
                  as={Link}
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ffe69c] to-[#ffb51c] py-3 text-sm font-semibold text-black"
                >
                  Join Now
                  <ArrowUpRight size={19} />
                </StaggerItem>
              </div>
            </div>
          </StaggerGroup>
        )}
      </nav>
      {showScrollToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="fixed bottom-5 right-5 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFB51D]/60 bg-[#111]/90 text-[#FFB51D] shadow-lg backdrop-blur transition hover:bg-[#FFB51D] hover:text-black sm:bottom-7 sm:right-7"
        >
          <ArrowUp size={21} />
        </button>
      )}
    </Reveal>
  );
}