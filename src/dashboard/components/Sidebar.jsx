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

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: Package, label: "Packages", path: "/dashboard/packages" },
  { icon: TrendingUp, label: "ROI & Income", path: "/dashboard/roi" },
  { icon: Users, label: "Level Income", path: "/dashboard/levels" },
  { icon: Award, label: "Rank Incentives", path: "/dashboard/ranks" },
  { icon: Crown, label: "DAO Program", path: "/dashboard/dao" },
  { icon: Flame, label: "Burn & DSE", path: "/dashboard/dse" },
  { icon: Coins, label: "Tokenomics", path: "/dashboard/tokenomics" },
  { icon: Wallet, label: "Withdrawals", path: "/dashboard/withdrawals" },
  { icon: BarChart3, label: "Compounding", path: "/dashboard/compounding" },
  { icon: Shield, label: "Staking", path: "/dashboard/staking" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
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
      className={`relative flex h-screen flex-col border-r border-[#222] bg-[#0A0A0A] transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[22px] z-20 hidden h-6 w-6 items-center justify-center rounded-full border border-[#FFB51D]/40 bg-[#111] text-[#FFB51D] shadow-md transition-colors hover:bg-[#FFB51D] hover:text-black lg:flex"
        aria-label="Toggle sidebar"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div
        className={`flex h-[70px] items-center border-b border-[#222] ${
          collapsed ? "justify-center px-2" : "px-4"
        }`}
      >
        {collapsed ? (
          <img src={token} alt="Hana Token" className="h-9 w-9 rounded-full object-contain" />
        ) : (
          <img src={logo} alt="Hana" className="h-auto w-[110px] object-contain" />
        )}
      </div>

      <nav className="dashboard-scroll flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/dashboard"}
                title={item.label}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `group flex items-center rounded-lg py-2.5 text-sm font-medium transition-all duration-200 font-chakra-petch ${
                    collapsed ? "justify-center px-2" : "gap-3 px-3"
                  } ${
                    isActive
                      ? "bg-gradient-to-r from-[#FFE28A]/10 to-[#FFB51D]/10 text-[#FFB51D] border border-[#FFB51D]/20"
                      : "text-[#A3A3A3] hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <item.icon size={18} className="shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-[#222] p-3">
        {logoutError && !collapsed && (
          <p className="mb-2 px-3 text-xs text-red-400" role="alert">
            {logoutError}
          </p>
        )}
        <button
          onClick={onLogout}
          className={`flex w-full items-center rounded-lg py-2.5 text-sm text-[#A3A3A3] hover:bg-white/5 hover:text-red-400 transition-colors font-chakra-petch ${
            collapsed ? "justify-center px-2" : "gap-3 px-3"
          }`}
          title="Logout"
        >
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
