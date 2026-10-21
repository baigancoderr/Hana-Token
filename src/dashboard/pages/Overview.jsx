import { useEffect, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import {
  Wallet,
  TrendingUp,
  Users,
  Coins,
  Flame,
  Award,
  ArrowUpRight,
  Clock,
  Shield,
  Zap,
  Copy,
  Check,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const earningsData = [
  { day: "Day 1", roi: 5, direct: 2, level: 1 },
  { day: "Day 3", roi: 8, direct: 5, level: 2 },
  { day: "Day 5", roi: 12, direct: 5, level: 3 },
  { day: "Day 7", roi: 14, direct: 10, level: 4 },
  { day: "Day 9", roi: 16, direct: 10, level: 6 },
  { day: "Day 11", roi: 20, direct: 15, level: 7 },
  { day: "Day 14", roi: 24, direct: 20, level: 9 },
];

const incomeBreakdown = [
  { name: "ROI Income", value: 45, color: "#FFB51D" },
  { name: "Direct Income", value: 25, color: "#E5E5E5" },
  { name: "Level Income", value: 20, color: "#a78bfa" },
  { name: "Rank Rewards", value: 10, color: "#34d399" },
];

const recentActivity = [
  { type: "ROI Credit", amount: "+$5.00", time: "12 hrs ago", icon: TrendingUp, color: "text-[#FFB51D]" },
  { type: "Direct Referral", amount: "+$25.00", time: "1 day ago", icon: Users, color: "text-[#FFB51D]" },
  { type: "Level 2 Income", amount: "+$3.50", time: "1 day ago", icon: Coins, color: "text-purple-400" },
  { type: "Withdrawal", amount: "-$100.00", time: "2 days ago", icon: Wallet, color: "text-red-400" },
  { type: "ROI Credit", amount: "+$5.00", time: "2 days ago", icon: TrendingUp, color: "text-[#FFB51D]" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-[#222] bg-[#111] p-3 shadow-xl">
        <p className="mb-2 text-[12px] font-medium text-[#A3A3A3]">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-[12px]" style={{ color: entry.color }}>
            {entry.name}: <span className="font-bold">${entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Overview() {
  const [toast, setToast] = useState("");
  const { address } = useAppKitAccount({ namespace: "eip155" });
  const referralLink = address
    ? `${window.location.origin}/?ref=${encodeURIComponent(address)}`
    : "";

  useEffect(() => {
    if (!toast) return undefined;

    const timeoutId = window.setTimeout(() => setToast(""), 2500);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const copyReferralLink = async () => {
    if (!referralLink) {
      setToast("Connect a wallet to create your referral link");
      return;
    }

    try {
      await navigator.clipboard.writeText(referralLink);
      setToast("Referral link copied");
    } catch (error) {
      console.error("Unable to copy referral link:", error);
      setToast("Could not copy referral link");
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div
          className="fixed right-5 top-5 z-[120] flex items-center gap-2 rounded-lg border border-[#FFB51D]/40 bg-[#15120A] px-4 py-3 text-sm font-semibold text-[#F8E096] shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_18px_rgba(255,181,29,0.12)]"
          role="status"
        >
          {toast === "Referral link copied" && <Check size={16} />}
          {toast}
        </div>
      )}

      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-xl border border-[#FFB51D]/20 bg-gradient-to-r from-[#111111] via-[#111111] to-[#0A0A0A] p-5 sm:p-6">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FFB51D]/5 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <GoldBadge>🌟 Genesis Rank</GoldBadge>
              <GoldBadge>Active</GoldBadge>
            </div>
            <h2 className="mt-2 text-[20px] sm:text-[24px] font-bold text-white">
              Welcome back, <span className="gold-gradient-text">Hana Member</span>
            </h2>
            <p className="mt-1 text-[13px] text-[#A3A3A3]">
              ID: #H10042 · Package: $1,000 · Joined 14 days ago
            </p>
            <div className="mt-3 space-y-2">
              {/* <div className="flex flex-wrap items-center gap-2">
                <span className="text-[13px] text-[#A3A3A3]">Your wallet:</span>
                <code className="break-all rounded-md border border-[#FFB51D]/20 bg-black/40 px-2.5 py-1 font-mono text-xs font-semibold text-[#F8E096]">
                  {address || "Connect wallet to view address"}
                </code>
              </div> */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[13px] text-[#A3A3A3]">Referral link:</span>
                <code className="min-w-0 break-all rounded-md border border-[#FFB51D]/10 bg-black/40 px-2.5 py-1 font-mono text-xs text-[#F8E096]">
                  {referralLink || "Connect wallet to create a referral link"}
                </code>
              <button
                className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#FFB51D]/10 active:scale-95 ${
                  toast === "Referral link copied"
                    ? "border-[#FFB51D]/60 bg-[#FFB51D]/10 text-[#F8E096] shadow-[0_0_12px_rgba(255,181,29,0.2)]"
                    : "border-[#FFB51D]/30 text-[#FFB51D]"
                }`}
                onClick={copyReferralLink}
                type="button"
              >
                {toast === "Referral link copied" ? (
                  <Check className="animate-[bounce_0.5s_ease-out]" size={13} />
                ) : (
                  <Copy size={13} />
                )}
                {toast === "Referral link copied" ? "Copied!" : "Copy link"}
              </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div className="flex items-center gap-2 rounded-lg border border-[#222] bg-[#0A0A0A] px-4 py-2">
              <Clock size={14} className="text-[#FFB51D]" />
              <span className="text-[12px] text-[#A3A3A3]">Next Credit in:</span>
              <span className="text-[14px] font-bold text-[#FFB51D]">04:32:18</span>
            </div>
            <p className="text-[11px] text-[#737373]">Credits every 12 hours</p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard
          icon={Wallet}
          label="Total Balance"
          value="$1,284.50"
          sub="Reinvest: $128.45"
          color="gold"
          trend={{ up: true, value: "+1.0% today" }}
        />
        <StatCard
          icon={TrendingUp}
          label="Total Earned"
          value="$284.50"
          sub="Of $2,000 cap"
          color="blue"
        />
        <StatCard
          icon={Users}
          label="Direct Referrals"
          value="6"
          sub="Level 1 opened"
          color="green"
        />
        <StatCard
          icon={Award}
          label="Current Rank"
          value="Genesis"
          sub="Next: Accelerator"
          color="purple"
        />
      </div>

      {/* Second row stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard
          icon={Coins}
          label="ROI Earned"
          value="$140.00"
          sub="1.00%/day (12h split)"
          color="gold"
        />
        <StatCard
          icon={Users}
          label="Direct Income"
          value="$75.00"
          sub="5% on staking"
          color="blue"
        />
        <StatCard
          icon={Zap}
          label="Level Income"
          value="$45.50"
          sub="10 levels active"
          color="green"
        />
        <StatCard
          icon={Flame}
          label="Tokens Burned"
          value="12,450"
          sub="HANA this month"
          color="red"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Earnings Chart */}
        <SectionCard
          title="Earnings Overview"
          subtitle="Last 14 days performance"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={earningsData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="roiGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFB51D" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FFB51D" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="directGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E5E5E5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#E5E5E5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="levelGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#222222" />
              <XAxis dataKey="day" tick={{ fill: "#737373", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#737373", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="roi" name="ROI" stroke="#FFB51D" strokeWidth={2} fill="url(#roiGrad)" />
              <Area type="monotone" dataKey="direct" name="Direct" stroke="#E5E5E5" strokeWidth={2} fill="url(#directGrad)" />
              <Area type="monotone" dataKey="level" name="Level" stroke="#a78bfa" strokeWidth={2} fill="url(#levelGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>

        {/* Income Breakdown */}
        <SectionCard title="Income Breakdown" subtitle="Distribution of earnings">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={incomeBreakdown}
                cx="50%"
                cy="45%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {incomeBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#A3A3A3", fontSize: 11 }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Recent Activity */}
        <SectionCard title="Recent Activity" subtitle="Your latest transactions">
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-[#222] bg-[#0A0A0A] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111]">
                    <item.icon size={15} className={item.color} />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-white">{item.type}</p>
                    <p className="text-[11px] text-[#737373]">{item.time}</p>
                  </div>
                </div>
                <span className={`text-[13px] font-bold ${item.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Progress & Caps */}
        <SectionCard title="Capping Progress" subtitle="Income limits tracking">
          <div className="space-y-4">
            {/* Main Package Cap */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[12px] text-[#A3A3A3]">Package ROI Cap (2X)</span>
                <span className="text-[12px] font-semibold text-[#FFB51D]">$284 / $2,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#222] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#FFE28A] to-[#FFB51D]" style={{ width: "14.2%" }} />
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">14.2% of 2X cap used</p>
            </div>

            {/* Direct Income Cap */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[12px] text-[#A3A3A3]">Level Income Cap (4X)</span>
                <span className="text-[12px] font-semibold text-[#FFB51D]">$45 / $4,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#222] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-neutral-400 to-white" style={{ width: "1.1%" }} />
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">1.1% of 4X cap used</p>
            </div>

            {/* Withdrawal Limit */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[12px] text-[#A3A3A3]">Daily Withdrawal Limit</span>
                <span className="text-[12px] font-semibold text-green-400">$0 / $2,500</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#222] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500" style={{ width: "0%" }} />
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">Max $2,500 per withdrawal</p>
            </div>

            {/* Rank Progress */}
            <div className="mt-5 rounded-lg border border-[#FFB51D]/20 bg-[#FFB51D]/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] text-[#A3A3A3]">Next Rank Progress</p>
                  <p className="text-[14px] font-bold text-[#FFB51D]">Accelerator</p>
                  <p className="text-[11px] text-[#737373]">Need $25,000 matching business</p>
                </div>
                <div className="text-right">
                  <p className="text-[22px] font-bold text-white">$5,000</p>
                  <p className="text-[11px] text-[#737373]">of $25,000</p>
                </div>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-[#222] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#FFE28A] to-[#FFB51D]" style={{ width: "20%" }} />
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "View Packages", icon: Shield, path: "/dashboard/packages", color: "from-[#FFE28A]/10 to-[#FFB51D]/5 border-[#FFB51D]/20 text-[#FFB51D]" },
          { label: "Claim Rewards", icon: Award, path: "/dashboard/ranks", color: "from-purple-500/10 to-violet-500/5 border-purple-500/20 text-purple-400" },
          { label: "DAO Program", icon: Users, path: "/dashboard/dao", color: "from-white/10 to-white/5 border-white/15 text-neutral-200" },
          { label: "Withdraw", icon: Wallet, path: "/dashboard/withdrawals", color: "from-green-500/10 to-emerald-500/5 border-green-500/20 text-green-400" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.path}
            className={`flex flex-col items-center gap-2 rounded-xl border bg-gradient-to-br ${item.color} p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg`}
          >
            <item.icon size={20} />
            <span className="text-[12px] font-semibold">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
