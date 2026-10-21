import { Crown, Users, Coins, Shield, CheckCircle, ArrowUpRight, Info, TrendingUp } from "lucide-react";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const daoMembers = [
  { id: "#D001", joined: "1 Oct 2026", status: "Active", earned: "$1,520", daysLeft: 486 },
  { id: "#D002", joined: "5 Oct 2026", status: "Active", earned: "$960", daysLeft: 490 },
  { id: "#D003", joined: "10 Oct 2026", status: "Active", earned: "$480", daysLeft: 495 },
];

const pathways = [
  {
    title: "Direct Investment",
    description: "Purchase the $5,000 DAO Package directly",
    steps: ["Invest $5,000", "Activate DAO Membership", "Receive 1% daily for 500 days", "Earn 5% weekly DAO pool share"],
    color: "border-[#FFB51D]/30 bg-[#FFB51D]/5",
    badge: "text-[#FFB51D]",
  },
  {
    title: "Network Path",
    description: "Refer 5 DAO members with a $1,000 ID",
    steps: ["Hold $1,000 package", "Refer 5 DAO members", "Become a DAO Member", "Earn DAO pool incentives"],
    color: "border-white/15 bg-white/5",
    badge: "text-[#FFB51D]",
  },
];

export default function DAOProgram() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Crown} label="DAO Status" value="Inactive" sub="Activate for $5,000" color="gold" />
        <StatCard icon={Users} label="Total DAO Members" value="47 / 300" sub="253 spots remaining" color="blue" />
        <StatCard icon={Coins} label="DAO Pool (Weekly)" value="5%" sub="Distributed equally" color="green" />
        <StatCard icon={TrendingUp} label="Pool Est. Value" value="$2,350" sub="This week's pool" color="purple" />
      </div>

      {/* DAO Intro Banner */}
      <div className="relative overflow-hidden rounded-xl border border-[#FFB51D]/30 bg-gradient-to-r from-[#FFB51D]/10 via-[#111111] to-[#a78bfa]/10 p-5 sm:p-6">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FFB51D]/5 blur-3xl" />
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Crown size={20} className="text-[#FFB51D]" />
              <h3 className="text-[18px] font-bold text-white">DAO Partner Program</h3>
            </div>
            <p className="mt-2 text-[12px] text-[#A3A3A3] leading-relaxed">
              The elite inner circle of Hana Protocol. Only 300 members total. 5% of every smart-contract deposit goes to the DAO Partner Pool, distributed weekly among all active DAO members equally.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <GoldBadge>300 Member Limit</GoldBadge>
              <GoldBadge>500 Day Duration</GoldBadge>
              <GoldBadge>Weekly Payouts</GoldBadge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Package Cost", value: "$5,000", color: "text-[#FFB51D]" },
              { label: "Duration", value: "500 Days", color: "text-[#FFB51D]" },
              { label: "Daily ROI", value: "1.00%", color: "text-green-400" },
              { label: "ROI Cap", value: "3X = $15K", color: "text-purple-400" },
              { label: "Leader Cap", value: "5X (network)", color: "text-orange-400" },
              { label: "DAO Pool", value: "5% Weekly", color: "text-[#FFB51D]" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-[#222] bg-[#0A0A0A] p-2.5">
                <p className="text-[10px] text-[#737373]">{item.label}</p>
                <p className={`text-[13px] font-bold ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-5">
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] px-6 py-3 text-[14px] font-bold text-black hover:brightness-110 transition-all">
            Activate DAO Package <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Two Pathways */}
      <div>
        <h3 className="mb-4 text-[15px] font-semibold text-white">Ways to Become a DAO Member</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pathways.map((path) => (
            <div key={path.title} className={`rounded-xl border ${path.color} p-5`}>
              <p className={`text-[14px] font-bold ${path.badge}`}>{path.title}</p>
              <p className="mt-1 text-[12px] text-[#A3A3A3]">{path.description}</p>
              <div className="mt-4 space-y-2">
                {path.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${path.badge.replace("text-", "border-")} ${path.badge.replace("text-", "bg-").replace("]", "/10]")} text-[9px] font-bold ${path.badge}`}>
                      {i + 1}
                    </div>
                    <span className="text-[12px] text-[#A3A3A3]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DAO Pool Mechanics */}
      <SectionCard title="DAO Pool Mechanics" subtitle="How the 5% weekly pool works">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFB51D]/10">
              <Coins size={15} className="text-[#FFB51D]" />
            </div>
            <p className="text-[13px] font-semibold text-white">Pool Source</p>
            <p className="mt-1 text-[12px] text-[#A3A3A3]">
              5% of every smart-contract deposit (any package) flows into the DAO Partner Pool.
            </p>
          </div>
          <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFB51D]/10">
              <Users size={15} className="text-[#FFB51D]" />
            </div>
            <p className="text-[13px] font-semibold text-white">Distribution</p>
            <p className="mt-1 text-[12px] text-[#A3A3A3]">
              Pool is divided <span className="text-[#FFB51D] font-semibold">equally</span> among all eligible DAO Partners based on qualified shares.
            </p>
          </div>
          <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
              <Shield size={15} className="text-purple-400" />
            </div>
            <p className="text-[13px] font-semibold text-white">Exclusion Rule</p>
            <p className="mt-1 text-[12px] text-[#A3A3A3]">
              DAO Network income is <span className="text-purple-400 font-semibold">NOT counted</span> toward the 3X capping calculation.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
          <div className="flex items-start gap-2">
            <Info size={13} className="mt-0.5 shrink-0 text-[#FFB51D]" />
            <p className="text-[12px] text-[#A3A3A3]">
              <span className="font-semibold text-white">Top-up:</span> DAO members can top up their package, but only in multiples of $1,000. DAO staking activates DAO membership. Member Self ID: $5,000 × 300 = $1.5M total contribution.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Sample DAO Members */}
      <SectionCard title="Active DAO Members (Sample)" subtitle="Current active members in the program">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-[#222]">
                {["Member ID", "Joined", "Status", "Total Earned", "Days Left"].map((h) => (
                  <th key={h} className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#737373]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {daoMembers.map((m, i) => (
                <tr key={i} className="border-b border-[#222]">
                  <td className="py-3 text-[13px] font-medium text-white">{m.id}</td>
                  <td className="py-3 text-[12px] text-[#A3A3A3]">{m.joined}</td>
                  <td className="py-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[11px] font-semibold text-green-400">
                      <CheckCircle size={9} /> {m.status}
                    </span>
                  </td>
                  <td className="py-3 text-[12px] font-bold text-[#FFB51D]">{m.earned}</td>
                  <td className="py-3 text-[12px] text-[#A3A3A3]">{m.daysLeft} days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
