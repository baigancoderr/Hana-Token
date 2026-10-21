import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useAppKit, useAppKitAccount, useAppKitState } from "@reown/appkit/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Reveal, StaggerGroup, StaggerItem } from "./Motion";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Token", href: "#token" },
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Roadmap", href: "#roadmap" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPending, setLoginPending] = useState(false);
  const [loginError, setLoginError] = useState("");
  const modalWasOpen = useRef(false);
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount({ namespace: "eip155" });
  const { open: modalOpen } = useAppKitState();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginPending && isConnected) {
      setLoginPending(false);
      navigate("/dashboard");
      return;
    }

    if (!loginPending) {
      modalWasOpen.current = false;
      return;
    }

    if (modalOpen) {
      modalWasOpen.current = true;
    } else if (modalWasOpen.current) {
      modalWasOpen.current = false;
      setLoginPending(false);
    }
  }, [isConnected, loginPending, modalOpen, navigate]);

  const handleLogin = async () => {
    setLoginError("");
    if (isConnected) {
      navigate("/dashboard");
      return;
    }

    setLoginPending(true);
    try {
      await open({ view: "Connect", namespace: "eip155" });
    } catch (error) {
      setLoginPending(false);
      setLoginError(
        error instanceof Error ? error.message : "Could not open wallet connection.",
      );
    }
  };

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
        <StaggerGroup className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 min-[1025px]:flex xl:gap-6">
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
        <StaggerGroup className="hidden items-center gap-8 min-[481px]:flex xl:gap-9">
          <StaggerItem
            as="button"
            type="button"
            onClick={handleLogin}
            className="text-[16px] text-[#e0e3ec] transition-colors hover:text-[#ffbd32]"
          >
            {loginPending ? "Connecting..." : "Login"}
          </StaggerItem>

          <StaggerItem
            as="a"
            href="#join"
            className="group flex h-[46px] xl:h-[51px] min-w-[60px] xl:min-w-[100px] items-center justify-center gap-7 rounded-[9px] rounded-br-[9px] bg-gradient-to-r from-[#ffe69c] via-[#ffca48] to-[#ffb51c] px-7 text-[17px] font-semibold text-black transition-all duration-300 hover:brightness-105"
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
                  as="button"
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogin();
                  }}
                  className="flex-1 rounded-lg border border-white/15 py-3 text-center text-sm hover:border-[#ffbd32]"
                >
                  {loginPending ? "Connecting..." : "Login"}
                </StaggerItem>

                <StaggerItem
                  as="a"
                  href="#join"
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
        {loginError && (
          <p
            className="absolute right-4 top-full z-[60] mt-2 max-w-[min(90vw,400px)] rounded-lg border border-red-400/30 bg-black px-3 py-2 text-sm text-red-300"
            role="alert"
          >
            {loginError}
          </p>
        )}
      </nav>
    </Reveal>
  );
}