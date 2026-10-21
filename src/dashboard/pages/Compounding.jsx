import { TrendingUp, Lock, Clock, Coins, Info, CheckCircle, ArrowUpRight } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const plans = [
  {
    name: "Growth",
    days: 120,
    rate: "0.75%",
    rateNum: 0.0075,
    label: "Moderate Benefit",
    color: "#E5E5E5",
    border: "border-white/15",
    bg: "from-white/10 to-white/5",
    badge: "text-neutral-200 border-white/15 bg-white/5",
    btnFrom: "from-[#2A2A2A]",
    btnTo: "to-[#525252]",
  },
  {
    name: "Builder",
    days: 180,
    rate: "1.00%",
    rateNum: 0.01,
    label: "Higher Loyalty Benefit",
    color: "#a78bfa",
    border: "border-purple-500/30",
    bg: "from-purple-500/10 to-violet-500/5",
    badge: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    btnFrom: "from-purple-500",
    btnTo: "to-violet-500",
  },
  {
    name: "Long-Term",
    days: 365,
    rate: "1.25%",
    rateNum: 0.0125,
    label: "Highest Loyalty Benefit",
    color: "#FFB51D",
    border: "border-[#FFB51D]/30",
    bg: "from-[#FFB51D]/10 to-[#FFE28A]/5",
    badge: "text-[#FFB51D] border-[#FFB51D]/30 bg-[#FFB51D]/10",
    popular: true,
    btnFrom: "from-[#FFE28A]",
    btnTo: "to-[#FFB51D]",
  },
];

// Project $1000 compounding over N days at daily rate
function projectCompound(principal, dailyRate, days) {
  const points = [];
  const step = Math.max(1, Math.floor(days / 10));
  for (let d = 0; d <= days; d += step) {
    points.push({
      day: `Day ${d}`,
      value: parseFloat((principal * Math.pow(1 + dailyRate, d)).toFixed(2)),
    });
  }
  return points;
}

const growthData = projectCompound(1000, 0.0075, 120);
const builderData = projectCompound(1000, 0.01, 180);
const longTermData = projectCompound(1000, 0.0125, 365);

const chartDatasets = [
  { data: growthData, color: "#E5E5E5", label: "Growth (0.75%)", key: "growth" },
  { data: builderData, color: "#a78bfa", label: "Builder (1.00%)", key: "builder" },
  { data: longTermData, color: "#FFB51D", label: "Long-Term (1.25%)", key: "longterm" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-[#222] bg-[#111] p-3">
        <p className="text-[11px] text-[#A3A3A3] mb-1">{label}</p>
        {payload.map((e) => (
          <p key={e.name} style={{ color: e.color }} className="text-[12px] font-bold">
            {e.name}: ${e.value?.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Compounding() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Lock} label="Active Plan" value="None" sub="Choose a plan below" color="gold" />
        <StatCard icon={TrendingUp} label="Max Rate" value="1.25%" sub="Long-Term (365 days)" color="blue" />
        <StatCard icon={Coins} label="Compounded" value="$0.00" sub="Total compounded" color="green" />
        <StatCard icon={Clock} label="Days Locked" value="0" sub="Not started" color="purple" />
      </div>

      {/* Info Banner */}
      <div className="rounded-xl border border-[#222] bg-[#111] p-4">
        <div className="flex items-start gap-3">
          <Info size={16} className="mt-0.5 shrink-0 text-[#FFB51D]" />
          <div className="text-[12px] text-[#A3A3A3] leading-relaxed space-y-1">
            <p><span className="font-semibold text-white">Manual Compounding:</span> You choose to compound or withdraw at each credit. The system does not auto-compound.</p>
            <p><span className="text-[#FFB51D] font-semibold">Important:</span> Only income earned through the system can be compounded. You <span className="text-red-400 font-semibold">cannot</span> add external funds to the compounding wallet.</p>
            <p><span className="text-purple-400 font-semibold">Lock Period:</span> Once locked, funds cannot be withdrawn until the plan period ends.</p>
          </div>
        </div>
      </div>

      {/* Plan Cards */}
      <div>
        <h3 className="mb-4 text-[15px] font-semibold text-white">Locked Growth Plans</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {plans.map((plan) => {
            const finalValue = (1000 * Math.pow(1 + plan.rateNum, plan.days)).toFixed(2);
            const profit = (finalValue - 1000).toFixed(2);
            const totalReturn = (((finalValue - 1000) / 1000) * 100).toFixed(1);

            return (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-xl border ${plan.border} bg-gradient-to-br ${plan.bg} bg-[#111] p-5 flex flex-col transition-all hover:-translate-y-1`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] px-3 py-1">
                    <span className="text-[10px] font-bold text-black">BEST</span>
                  </div>
                )}

                <span className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${plan.badge}`}>
                  {plan.label}
                </span>

                <div className="mt-4">
                  <p className="text-[24px] font-bold text-white">{plan.name}</p>
                  <p className="text-[12px] text-[#A3A3A3]">{plan.days}-day lock period</p>
                </div>

                <div className="mt-4 rounded-lg border border-[#222] bg-[#0A0A0A] p-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[11px] text-[#737373]">Daily Rate</span>
                    <span className="text-[13px] font-bold" style={{ color: plan.color }}>{plan.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[11px] text-[#737373]">On $1,000</span>
                    <span className="text-[12px] font-bold text-green-400">→ ${finalValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[11px] text-[#737373]">Profit</span>
                    <span className="text-[12px] font-bold text-white">+${profit}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#222] pt-2">
                    <span className="text-[11px] text-[#737373]">Total Return</span>
                    <span className="text-[13px] font-bold" style={{ color: plan.color }}>+{totalReturn}%</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 flex-1">
                  {[
                    "Compound from earned income",
                    "No external fund addition",
                    "Manual control per credit",
                    `${plan.days}-day commitment`,
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle size={12} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
                      <span className="text-[11px] text-[#A3A3A3]">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${plan.btnFrom} ${plan.btnTo} py-2.5 text-[13px] font-semibold ${plan.name === "Long-Term" ? "text-black" : "text-white"} transition-all hover:brightness-110`}
                >
                  Start {plan.name} Plan <ArrowUpRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Compound Growth Chart */}
      <SectionCard title="Compounding Projection" subtitle="Starting capital: $1,000 — compound growth comparison">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart margin={{ top: 5, right: 10, left: -5, bottom: 0 }}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E5E5E5" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#E5E5E5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFB51D" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#FFB51D" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#222222" />
            <XAxis dataKey="day" type="category" allowDuplicatedCategory={false} tick={{ fill: "#737373", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#737373", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
            <Tooltip content={<CustomTooltip />} />
            <Area data={growthData} type="monotone" dataKey="value" name="Growth (120d)" stroke="#E5E5E5" strokeWidth={2} fill="url(#g1)" dot={false} />
            <Area data={builderData} type="monotone" dataKey="value" name="Builder (180d)" stroke="#a78bfa" strokeWidth={2} fill="url(#g2)" dot={false} />
            <Area data={longTermData} type="monotone" dataKey="value" name="Long-Term (365d)" stroke="#FFB51D" strokeWidth={2} fill="url(#g3)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Growth (120d)", final: projectCompound(1000, 0.0075, 120).at(-1)?.value, color: "text-neutral-200" },
            { label: "Builder (180d)", final: projectCompound(1000, 0.01, 180).at(-1)?.value, color: "text-purple-400" },
            { label: "Long-Term (365d)", final: projectCompound(1000, 0.0125, 365).at(-1)?.value, color: "text-[#FFB51D]" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3 text-center">
              <p className="text-[10px] text-[#737373]">{item.label}</p>
              <p className={`text-[14px] font-bold ${item.color}`}>${item.final?.toFixed(0)}</p>
              <p className="text-[10px] text-[#737373]">from $1,000</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
