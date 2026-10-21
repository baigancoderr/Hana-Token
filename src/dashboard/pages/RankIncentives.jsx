import { Award, Crown, ChevronRight, Star, Users, TrendingUp, CheckCircle, XCircle } from "lucide-react";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const ranks = [
  {
    rank: "Genesis",
    self: "$100",
    directs: 2,
    legCriteria: "None",
    matching: "$5,000",
    incentive: "10%",
    reward: "$50 — One Time",
    color: "#556080",
    bg: "from-[#556080]/10 to-[#556080]/5",
    border: "border-[#556080]/30",
    current: true,
  },
  {
    rank: "Accelerator",
    self: "$200",
    directs: 4,
    legCriteria: "None",
    matching: "$25,000",
    incentive: "10%",
    reward: "$100 — One Time",
    color: "#E5E5E5",
    bg: "from-white/10 to-white/5",
    border: "border-white/15",
  },
  {
    rank: "Elite",
    self: "$300",
    directs: 6,
    legCriteria: "None",
    matching: "$50,000",
    incentive: "10%",
    reward: "$100 × 6 Months",
    color: "#a78bfa",
    bg: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-500/30",
  },
  {
    rank: "Alpha",
    self: "$400",
    directs: 8,
    legCriteria: "1 Elite + 1 Accelerator",
    matching: "$100,000",
    incentive: "15%",
    reward: "$250 × 6 Months",
    color: "#34d399",
    bg: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/30",
  },
  {
    rank: "Platinum",
    self: "$500",
    directs: 10,
    legCriteria: "1 Elite + 1 Alpha",
    matching: "$200,000",
    incentive: "15%",
    reward: "$500 × 6 Months",
    color: "#A3A3A3",
    bg: "from-slate-400/10 to-slate-500/5",
    border: "border-slate-400/30",
  },
  {
    rank: "Diamond",
    self: "$1,000",
    directs: 12,
    legCriteria: "1 Alpha + 2 Platinum",
    matching: "$400,000",
    incentive: "20%",
    reward: "$1,000 × 6 Months",
    color: "#D4D4D4",
    bg: "from-white/10 to-white/5",
    border: "border-white/20",
  },
  {
    rank: "Ambassador",
    self: "$2,000",
    directs: 14,
    legCriteria: "1 Diamond + 1 Platinum",
    matching: "$750,000",
    incentive: "20%",
    reward: "$2,500 × 6 Months",
    color: "#fb923c",
    bg: "from-orange-500/10 to-orange-600/5",
    border: "border-orange-500/30",
  },
  {
    rank: "Royal",
    self: "$4,000",
    directs: 16,
    legCriteria: "1 Ambassador + 1 Diamond",
    matching: "$1,000,000",
    incentive: "30%",
    reward: "$3,000 × 10 Months",
    color: "#c084fc",
    bg: "from-purple-400/10 to-purple-600/5",
    border: "border-purple-400/30",
  },
  {
    rank: "Crown",
    self: "$6,000",
    directs: 18,
    legCriteria: "1 Royal + 1 Ambassador + 1 Platinum",
    matching: "$1,500,000",
    incentive: "40%",
    reward: "$6,000 × 10 Months",
    color: "#FFB51D",
    bg: "from-[#FFB51D]/10 to-[#FFE28A]/5",
    border: "border-[#FFB51D]/30",
    special: "5-star world tour for couple (7D/8N) + 1% CTO",
  },
  {
    rank: "Hana Monarch",
    self: "$10,000",
    directs: 20,
    legCriteria: "1 Crown + 1 Royal + 1 Ambassador",
    matching: "$4,800,000",
    incentive: "50%",
    reward: "$20,000 × 12 Months",
    color: "#FFE28A",
    bg: "from-[#FFE28A]/15 to-[#FFB51D]/10",
    border: "border-[#FFE28A]/40",
    special: "7-star world tour with family (1 month) + 2% CTO",
  },
];

const qualificationRules = [
  { rule: "Minimum 2 active legs required" },
  { rule: "Stronger leg = Main Leg (not counted in target)" },
  { rule: "Target calculated from all weaker legs combined" },
  { rule: "Rewards accumulate automatically" },
  { rule: "No time limit for rank qualification" },
  { rule: "Excess business carried forward" },
];

export default function RankIncentives() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Award} label="Current Rank" value="Genesis" sub="Achieved" color="gold" />
        <StatCard icon={TrendingUp} label="Matching Business" value="$5,000" sub="Of $25K for Accelerator" color="blue" />
        <StatCard icon={Users} label="Active Legs" value="2" sub="Minimum required" color="green" />
        <StatCard icon={Crown} label="Total Pool" value="$3.21M" sub="Rank distribution" color="purple" />
      </div>

      {/* Formula */}
      <div className="rounded-xl border border-[#222] bg-[#111] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-white">Core Incentive Formula</p>
            <p className="mt-1 text-[12px] text-[#A3A3A3]">
              <span className="text-[#FFB51D] font-bold">Incentive Pool</span> = Matching Business × Incentive % ·
              <span className="text-purple-400 font-bold"> Rank Reward</span> = 10% of Incentive Pool (1%–3% of matching business)
            </p>
          </div>
          <GoldBadge>50% Max Incentive</GoldBadge>
        </div>
      </div>

      {/* Rank Cards */}
      <div>
        <h3 className="mb-4 text-[15px] font-semibold text-white">All Ranks</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {ranks.map((r) => (
            <div
              key={r.rank}
              className={`relative overflow-hidden rounded-xl border ${r.border} bg-gradient-to-br ${r.bg} bg-[#111] p-4 transition-all hover:-translate-y-0.5`}
            >
              {r.current && (
                <div className="absolute right-3 top-3">
                  <GoldBadge>Current</GoldBadge>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${r.color}20`, border: `1px solid ${r.color}40` }}
                >
                  <Star size={18} style={{ color: r.color }} />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-white">{r.rank}</p>
                  <p className="text-[11px]" style={{ color: r.color }}>
                    Self: {r.self} · {r.directs} Directs
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[11px] text-[#737373]">Matching Business</span>
                  <span className="text-[12px] font-bold text-white">{r.matching}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] text-[#737373]">Incentive %</span>
                  <span className="text-[12px] font-bold" style={{ color: r.color }}>{r.incentive}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] text-[#737373]">Reward</span>
                  <span className="text-[12px] font-bold text-green-400">{r.reward}</span>
                </div>
                {r.legCriteria !== "None" && (
                  <div className="flex justify-between">
                    <span className="text-[11px] text-[#737373]">Leg Criteria</span>
                    <span className="text-[11px] text-[#A3A3A3]">{r.legCriteria}</span>
                  </div>
                )}
              </div>

              {r.special && (
                <div className="mt-3 rounded-lg border border-[#FFB51D]/20 bg-[#FFB51D]/5 p-2">
                  <p className="text-[11px] text-[#FFB51D]">
                    🌟 {r.special}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Qualification Rules */}
      <SectionCard title="Qualification Criteria" subtitle="Rules that govern rank achievement">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {qualificationRules.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFB51D]/10 text-[10px] font-bold text-[#FFB51D]">
                {i + 1}
              </div>
              <p className="text-[12px] text-[#A3A3A3]">{item.rule}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Current Progress */}
      <SectionCard title="Your Rank Progress" subtitle="Genesis → Accelerator progression">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
            <p className="text-[11px] text-[#737373]">Matching Business</p>
            <p className="mt-1 text-[20px] font-bold text-[#FFB51D]">$5,000</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-[#222]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#FFE28A] to-[#FFB51D]" style={{ width: "20%" }} />
            </div>
            <p className="mt-1 text-[11px] text-[#737373]">$5,000 / $25,000 (20%)</p>
          </div>
          <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
            <p className="text-[11px] text-[#737373]">Direct Referrals</p>
            <p className="mt-1 text-[20px] font-bold text-[#FFB51D]">3 / 4</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-[#222]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#FFE28A] to-[#FFB51D]" style={{ width: "75%" }} />
            </div>
            <p className="mt-1 text-[11px] text-[#737373]">Need 1 more direct</p>
          </div>
          <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4">
            <p className="text-[11px] text-[#737373]">Self Contribution</p>
            <p className="mt-1 text-[20px] font-bold text-green-400">$1,000</p>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle size={14} className="text-green-400" />
              <p className="text-[12px] text-green-400">Meets $200 requirement</p>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
