import { useEffect, useRef, useState } from "react";
import { Bell, Search, User, ChevronDown, TrendingUp, Menu, LogOut } from "lucide-react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useNavigate } from "react-router-dom";

export default function Topbar({
  pageTitle,
  onMenuClick,
  onLogout,
  logoutError,
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const { address } = useAppKitAccount({ namespace: "eip155" });

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!profileRef.current?.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const shortenedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "Wallet not connected";

  return (
    <header className="flex h-[70px] items-center justify-between border-b border-[#222] bg-[#0A0A0A] px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-1.5 text-[#A3A3A3] hover:bg-white/5 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="font-chakra-petch text-[16px] font-semibold text-white sm:text-[18px]">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden sm:block">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737373]"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-[38px] w-[180px] rounded-lg border border-[#222] bg-[#111] pl-9 pr-3 text-[13px] text-[#E5E5E5] placeholder-[#737373] outline-none focus:border-[#FFB51D]/40 transition-colors font-chakra-petch"
          />
        </div>

        <div className="hidden items-center gap-1.5 rounded-lg border border-[#222] bg-[#111] px-3 py-1.5 sm:flex">
          <TrendingUp size={13} className="text-green-400" />
          <span className="font-chakra-petch text-[12px] font-semibold text-green-400">
            $0.0845
          </span>
          <span className="font-chakra-petch text-[11px] text-[#737373]">HANA</span>
        </div>

        <button className="relative rounded-lg border border-[#222] bg-[#111] p-2 text-[#A3A3A3] hover:text-[#FFB51D] transition-colors">
          <Bell size={17} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFB51D] text-[9px] font-bold text-black">
            3
          </span>
        </button>

        <div className="relative" ref={profileRef}>
          <button
            aria-expanded={profileOpen}
            aria-haspopup="menu"
            aria-label="Open profile menu"
            className="flex items-center gap-2 rounded-lg border border-[#222] bg-[#111] px-2 py-1.5 transition-colors hover:border-[#FFB51D]/30 sm:px-3"
            onClick={() => setProfileOpen((open) => !open)}
            type="button"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#FFE28A] to-[#FFB51D]">
              <User size={14} className="text-black" />
            </div>
            <div className="hidden flex-col text-left sm:flex">
              <span className="font-chakra-petch text-[12px] font-semibold text-white">
                My Profile
              </span>
              <span className="font-chakra-petch text-[10px] text-[#737373]">
                {shortenedAddress}
              </span>
            </div>
            <ChevronDown
              className={`hidden text-[#737373] transition-transform sm:block ${
                profileOpen ? "rotate-180" : ""
              }`}
              size={13}
            />
          </button>

          {profileOpen && (
            <div
              className="absolute right-0 top-full z-50 mt-2 w-[min(88vw,280px)] rounded-xl border border-[#2B2B2B] bg-[#111] p-2 shadow-[0_12px_36px_rgba(0,0,0,0.65)]"
              role="menu"
            >
              <div className="border-b border-white/10 px-3 py-2">
                <p className="text-xs text-[#8A8A8A]">Connected wallet</p>
                <p className="mt-1 break-all font-mono text-xs text-[#F8E096]">
                  {address || "Wallet not connected"}
                </p>
              </div>
              <button
                className="mt-1 w-full rounded-lg px-3 py-2.5 text-left text-sm text-white transition hover:bg-white/5 hover:text-[#FFB51D]"
                onClick={() => {
                  setProfileOpen(false);
                  navigate("/dashboard/settings");
                }}
                role="menuitem"
                type="button"
              >
                My Profile
              </button>
              {logoutError && (
                <p className="px-3 py-2 text-xs text-red-400" role="alert">
                  {logoutError}
                </p>
              )}
              <button
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-red-300 transition hover:bg-red-400/10"
                onClick={() => {
                  setProfileOpen(false);
                  onLogout?.();
                }}
                role="menuitem"
                type="button"
              >
                <LogOut size={15} />
                Disconnect wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
