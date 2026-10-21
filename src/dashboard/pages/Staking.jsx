import { Shield, Zap, Users, TrendingUp, Plus, CheckCircle, Clock, Info } from "lucide-react";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const activeStakes = [
  {
    id: "#S-001",
    package: "$1,000",
    rate: "1.00%",
    started: "05 Oct 2026",
    earned: "$140.00",
    cap: "$2,000",
    used: 7,
    status: "Active",
    type: "Main",
  },
];

const subIdRules = [
  "Sub-IDs can only be invested under a single $1,000 package",
  "Sub-ID investment allowed 10 minutes after main ID activation",
  "Reinvest Wallet can only be used to top up a $1,000 ID",
  "No P2P (internal) transfer of HANA tokens between members",
];

export default function Staking() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Shield} label="Total Staked" value="$1,000" sub="1 active stake" color="gold" />
        <StatCard icon={TrendingUp} label="Total Earned" value="$140.00" sub="Since 05 Oct 2026" color="blue" />
        <StatCard icon={Users} label="Sub-IDs" value="0" sub="Allowed after 10 min" color="green" />
        <StatCard icon={Clock} label="Next Credit" value="04:32" sub="In 4 hrs 32 min" color="purple" />
      </div>

      {/* New Stake */}
      <SectionCard title="New Staking Position" subtitle="Choose a package to stake USDT into the protocol">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { amount: "$100", rate: "0.50%/day", cap: "2X", color: "border-white/15 hover:border-white/40" },
            { amount: "$300", rate: "0.60%/day", cap: "2X", color: "border-purple-500/30 hover:border-purple-400/60" },
            { amount: "$500", rate: "0.70%/day", cap: "2X", color: "border-[#FFB51D]/30 hover:border-[#FFB51D]/60" },
            { amount: "$1,000", rate: "1.00%/day", cap: "2X", popular: true, color: "border-green-500/30 hover:border-green-400/60" },
          ].map((pkg) => (
            <button
              key={pkg.amount}
              className={`relative rounded-xl border ${pkg.color} bg-[#111] p-4 text-left transition-all hover:-translate-y-0.5`}
            >
              {pkg.popular && (
                <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] px-2 py-0.5">
                  <span className="text-[9px] font-bold text-black">BEST</span>
                </div>
              )}
              <p className="text-[18px] font-bold text-white">{pkg.amount}</p>
              <p className="mt-1 text-[11px] text-[#FFB51D]">{pkg.rate}</p>
              <p className="mt-0.5 text-[11px] text-[#737373]">Cap: {pkg.cap}</p>
              <div className="mt-3 flex items-center justify-center gap-1 rounded-md border border-[#222] bg-[#0A0A0A] py-1.5">
                <Plus size={12} className="text-[#A3A3A3]" />
                <span className="text-[11px] text-[#A3A3A3]">Stake</span>
              </div>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* Active Stakes */}
      <SectionCard title="Active Stakes" subtitle="Your current staking positions">
        {activeStakes.map((stake, i) => (
          <div
            key={i}
            className="rounded-xl border border-[#FFB51D]/20 bg-[#FFB51D]/5 p-4 sm:p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFE28A] to-[#FFB51D]">
                  <Shield size={18} className="text-black" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[15px] font-bold text-white">{stake.package} Package</p>
                    <GoldBadge>{stake.type}</GoldBadge>
                  </div>
                  <p className="text-[12px] text-[#A3A3A3]">
                    ID: {stake.id} · Started: {stake.started}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <GoldBadge>● Active</GoldBadge>
                <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-green-400">
                  {stake.rate} Daily
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Invested", value: stake.package, color: "text-white" },
                { label: "Earned", value: stake.earned, color: "text-green-400" },
                { label: "2X Cap", value: stake.cap, color: "text-[#FFB51D]" },
                { label: "% Used", value: `${stake.used}%`, color: "text-[#FFB51D]" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3 text-center">
                  <p className="text-[10px] text-[#737373]">{item.label}</p>
                  <p className={`mt-1 text-[14px] font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="mb-1 flex justify-between">
                <span className="text-[11px] text-[#A3A3A3]">Cap Progress</span>
                <span className="text-[11px] font-semibold text-[#FFB51D]">{stake.earned} / {stake.cap}</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-[#222] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FFE28A] to-[#FFB51D]"
                  style={{ width: `${stake.used}%` }}
                />
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">{stake.used}% of 2X cap used</p>
            </div>
          </div>
        ))}
      </SectionCard>

      {/* Sub-ID Rules */}
      <SectionCard title="Sub-ID & Staking Rules" subtitle="Important rules for staking and sub-accounts">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {subIdRules.map((rule, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFB51D]/10 text-[9px] font-bold text-[#FFB51D]">
                {i + 1}
              </div>
              <p className="text-[12px] text-[#A3A3A3]">{rule}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
          <div className="flex items-start gap-2">
            <Info size={13} className="mt-0.5 text-[#FFB51D] shrink-0" />
            <p className="text-[12px] text-[#A3A3A3]">
              <span className="font-semibold text-white">Capping Note:</span> Level Income + ROI + Direct Referral income all count toward your 2X capping. Rank Income and DAO Income are <span className="text-green-400 font-semibold">excluded</span> from capping calculations.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Credit Schedule */}
      <SectionCard title="Credit Schedule" subtitle="How ROI is credited to your account">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              icon: Clock,
              color: "text-[#FFB51D]",
              bg: "bg-[#FFB51D]/10",
              title: "Every 12 Hours",
              desc: "ROI is split into two equal halves and credited at 12-hour intervals automatically.",
            },
            {
              icon: Zap,
              color: "text-[#FFB51D]",
              bg: "bg-[#FFB51D]/10",
              title: "Instant Credit",
              desc: "Direct referral income (5%) is credited immediately when a referral stakes any package.",
            },
            {
              icon: CheckCircle,
              color: "text-green-400",
              bg: "bg-green-500/10",
              title: "Level Income",
              desc: "Level income (ROI of ROI) is credited whenever your downline receives their ROI credit.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
              <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${item.bg}`}>
                <item.icon size={15} className={item.color} />
              </div>
              <p className="text-[13px] font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-[11px] text-[#A3A3A3]">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
