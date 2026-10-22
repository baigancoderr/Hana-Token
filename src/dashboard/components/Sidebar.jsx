import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  TrendingUp,
  Users,
  Award,
  Coins,
  Flame,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Crown,
  Wallet,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";
import logo from "../../assets/logo.png";
import token from "../../assets/token.png";

const navSections = [
  {
    label: "WORKSPACE",
    items: [
      { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
      { icon: Package, label: "Packages", path: "/dashboard/packages" },
      { icon: TrendingUp, label: "ROI & Income", path: "/dashboard/roi" },
      { icon: Users, label: "Level Income", path: "/dashboard/levels" },
      { icon: Award, label: "Rank Incentives", path: "/dashboard/ranks" },
    ],
  },
  {
    label: "ECOSYSTEM",
    items: [
      { icon: Crown, label: "DAO Program", path: "/dashboard/dao" },
      { icon: Flame, label: "Burn & DSE", path: "/dashboard/dse" },
      { icon: Coins, label: "Tokenomics", path: "/dashboard/tokenomics" },
      { icon: Wallet, label: "Withdrawals", path: "/dashboard/withdrawals" },
      { icon: BarChart3, label: "Compounding", path: "/dashboard/compounding" },
      { icon: Shield, label: "Staking", path: "/dashboard/staking" },
      { icon: Settings, label: "Settings", path: "/dashboard/settings" },
    ],
  },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  onNavigate,
  onLogout,
  logoutError,
}) {
  return (
    <aside
      className={`relative flex h-screen flex-col border-r border-white/[0.08] bg-[linear-gradient(180deg,#101116_0%,#090a0e_42%,#08090c_100%)] shadow-[12px_0_40px_rgba(0,0,0,0.25)] transition-[width] duration-300 ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#FFB51D]/[0.07] blur-[80px]" />
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[24px] z-20 hidden h-6 w-6 items-center justify-center rounded-full border border-[#FFB51D]/30 bg-[#171717] text-[#FFCA54] shadow-[0_2px_10px_rgba(0,0,0,0.55)] transition-all hover:border-[#FFCA54] hover:bg-[#FFB51D] hover:text-black lg:flex"
        aria-label="Toggle sidebar"
        type="button"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div
        className={`relative flex h-[76px] shrink-0 items-center border-b border-white/[0.07] ${
          collapsed ? "justify-center px-2" : "px-4"
        }`}
      >
        {collapsed ? (
          <img src={token} alt="Hana Token" className="h-9 w-9 rounded-full object-contain" />
        ) : (
          <div className="min-w-0">
            <img src={logo} alt="Hana" className="h-auto w-[118px] object-contain" />
            {/* <div className="mt-1 flex items-center gap-1.5 pl-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#53D69A] shadow-[0_0_7px_rgba(83,214,154,0.7)]" />
              <span className="text-[9px] font-semibold tracking-[0.19em] text-[#818795]">
                MEMBER PORTAL
              </span>
            </div> */}
          </div>
        )}
      </div>

      <nav aria-label="Dashboard navigation" className="dashboard-scroll relative flex-1 overflow-y-auto py-4">
        {navSections.map((section) => (
          <div className="mb-4" key={section.label}>
            {!collapsed && (
              <h2 className="mb-2 px-5 text-[9px] font-bold tracking-[0.2em] text-[#656B78]">
                {section.label}
              </h2>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard"}
                    title={collapsed ? item.label : undefined}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `group relative flex min-h-[42px] items-center rounded-[10px] text-[13px] font-medium transition-all duration-200 font-chakra-petch ${
                        collapsed ? "justify-center px-2" : "gap-3 px-3"
                      } ${
                        isActive
                          ? "border border-[#FFB51D]/[0.18] bg-gradient-to-r from-[#FFB51D]/[0.14] via-[#FFB51D]/[0.08] to-transparent text-[#FFD16A] shadow-[inset_0_1px_rgba(255,255,255,0.035)]"
                          : "border border-transparent text-[#9297A2] hover:bg-white/[0.045] hover:text-[#F1F2F4]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-gradient-to-b from-[#FFE28A] to-[#FFB51D] shadow-[0_0_8px_rgba(255,181,29,0.65)]" />
                        )}
                        <span
                          className={`grid h-[29px] w-[29px] shrink-0 place-items-center rounded-[8px] transition-colors ${
                            isActive
                              ? "bg-[#FFB51D]/[0.12] text-[#FFD16A]"
                              : "text-[#7D8491] group-hover:text-[#D4D7DD]"
                          }`}
                        >
                          <item.icon size={16} strokeWidth={1.8} />
                        </span>
                        {!collapsed && <span className="truncate">{item.label}</span>}
                        {!collapsed && isActive && (
                          <span className="ml-auto h-1 w-1 rounded-full bg-[#FFD16A] shadow-[0_0_6px_rgba(255,209,106,0.8)]" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="relative shrink-0 border-t border-white/[0.07] bg-black/10 p-3">
        {logoutError && !collapsed && (
          <p className="mb-2 rounded-lg border border-red-400/15 bg-red-400/[0.06] px-3 py-2 text-xs text-red-300" role="alert">
            {logoutError}
          </p>
        )}
        <button
          onClick={onLogout}
          className={`group flex min-h-[42px] w-full items-center rounded-[10px] border border-transparent py-2.5 text-[13px] font-medium text-[#9297A2] transition-all hover:border-red-400/10 hover:bg-red-400/[0.06] hover:text-red-300 font-chakra-petch ${
            collapsed ? "justify-center px-2" : "gap-3 px-3"
          }`}
          title="Logout"
          type="button"
        >
          <span className="grid h-[29px] w-[29px] shrink-0 place-items-center rounded-[8px] text-[#858B97] transition-colors group-hover:text-red-300">
            <LogOut size={16} />
          </span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}