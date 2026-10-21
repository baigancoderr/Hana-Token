import { Flame, Shield, TrendingUp, TrendingDown, Activity, Zap, BarChart3, Info } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const priceData = [
  { day: "Day 1", price: 0.075, upper: 0.0825, lower: 0.0675 },
  { day: "Day 4", price: 0.080, upper: 0.088, lower: 0.072 },
  { day: "Day 7", price: 0.082, upper: 0.0902, lower: 0.0738 },
  { day: "Day 10", price: 0.079, upper: 0.0869, lower: 0.0711 },
  { day: "Day 13", price: 0.0845, upper: 0.09295, lower: 0.07605 },
  { day: "Day 16", price: 0.091, upper: 0.1001, lower: 0.0819 },
  { day: "Day 19", price: 0.0845, upper: 0.09295, lower: 0.07605 },
];

const burnHistory = [
  { period: "Week 1", tokens: 3200 },
  { period: "Week 2", tokens: 5100 },
  { period: "Week 3", tokens: 4300 },
  { period: "Week 4", tokens: 6800 },
  { period: "Week 5", tokens: 7200 },
  { period: "Week 6", tokens: 5900 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-[#222] bg-[#111] p-3">
        <p className="text-[11px] text-[#A3A3A3]">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-[12px]" style={{ color: entry.color }}>
            {entry.name}: <span className="font-bold">{typeof entry.value === "number" && entry.value < 1 ? `$${entry.value.toFixed(4)}` : entry.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function BurnDSE() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Flame} label="Total Burned" value="32,450" sub="HANA tokens" color="red" />
        <StatCard icon={Activity} label="DSE Status" value="Active" sub="Monitoring 72h windows" color="green" />
        <StatCard icon={TrendingUp} label="Current Price" value="$0.0845" sub="+0.5% 24h change" color="gold" />
        <StatCard icon={Shield} label="Reserve Health" value="148 Days" sub="150-day target" color="blue" />
      </div>

      {/* DSE Explanation */}
      <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/5 via-[#111111] to-[#FFB51D]/5 p-5 sm:p-6">
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-red-500/5 blur-3xl" />
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-[#FFB51D]" />
              <h3 className="text-[16px] font-bold text-white">Dynamic Stability Engine (DSE)</h3>
            </div>
            <p className="mt-2 text-[12px] text-[#A3A3A3] leading-relaxed">
              An automated economic control system that adjusts protocol incentives based on treasury strength, liquidity, revenue, withdrawals, and market risk. The DSE consensus: <span className="text-[#FFB51D] font-semibold">DSE + Proof of Reserve + Proof of Burn.</span>
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3 rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <TrendingUp size={14} className="mt-0.5 text-green-400 shrink-0" />
              <div>
                <p className="text-[12px] font-semibold text-green-400">Price Up Trigger</p>
                <p className="text-[11px] text-[#A3A3A3]">If token increases {">"} 10% in 72hrs → Auto Sell activates to stabilize</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <TrendingDown size={14} className="mt-0.5 text-red-400 shrink-0" />
              <div>
                <p className="text-[12px] font-semibold text-red-400">Price Down Trigger</p>
                <p className="text-[11px] text-[#A3A3A3]">If token decreases {">"} 10% in 72hrs → Auto Buy activates to stabilize</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Chart with stability bands */}
      <SectionCard title="Token Price & Stability Bands" subtitle="72-hour monitoring window with ±10% thresholds">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={priceData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222222" />
            <XAxis dataKey="day" tick={{ fill: "#737373", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#737373", fontSize: 10 }} axisLine={false} tickLine={false} domain={["auto", "auto"]} tickFormatter={(v) => `$${v.toFixed(3)}`} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="upper" name="Upper Band (+10%)" stroke="#ef4444" strokeWidth={1} strokeDasharray="4 4" dot={false} />
            <Line type="monotone" dataKey="price" name="HANA Price" stroke="#FFB51D" strokeWidth={2.5} dot={{ r: 3, fill: "#FFB51D" }} />
            <Line type="monotone" dataKey="lower" name="Lower Band (-10%)" stroke="#34d399" strokeWidth={1} strokeDasharray="4 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-3 flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-red-500 border-dashed border-red-500" style={{ borderTop: "2px dashed" }} />
            <span className="text-[11px] text-[#A3A3A3]">Upper band — sell trigger</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-[#FFB51D]" />
            <span className="text-[11px] text-[#A3A3A3]">HANA price</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-emerald-400" style={{ borderTop: "2px dashed" }} />
            <span className="text-[11px] text-[#A3A3A3]">Lower band — buy trigger</span>
          </div>
        </div>
      </SectionCard>

      {/* Burn Mechanism */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="Burn Strategy" subtitle="Revenue-Based Buyback & Burn">
          <div className="space-y-3">
            {[
              { icon: Flame, color: "text-red-400", bg: "bg-red-500/10", title: "Sell Package Burns", desc: "100% of tokens from sell packages are burned from the contract permanently." },
              { icon: BarChart3, color: "text-[#FFB51D]", bg: "bg-[#FFB51D]/10", title: "Revenue Buyback", desc: "A predefined % of protocol revenue allocated to buyback and burn. E.g., $100K system → 10% ($10K) for buyback." },
              { icon: Shield, color: "text-purple-400", bg: "bg-purple-500/10", title: "Liquidity Addition", desc: "5-10% added to the Liquidity Pool on each sell. USDT is added to LP after buyback." },
              { icon: Zap, color: "text-green-400", bg: "bg-green-500/10", title: "Price Stabilizer Reserve", desc: "For every 1 HANA staked, 2 HANA are minted and allocated to the Price Stabilizer Reserve." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bg}`}>
                  <item.icon size={14} className={item.color} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-[#A3A3A3]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Weekly Burn History" subtitle="Tokens burned each week">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={burnHistory} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222222" />
              <XAxis dataKey="period" tick={{ fill: "#737373", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#737373", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(1)}K`} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="tokens" name="Burned" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3, fill: "#ef4444" }} />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Total Burned", value: "32,500", color: "text-red-400" },
              { label: "This Week", value: "5,900", color: "text-[#FFB51D]" },
              { label: "Avg Weekly", value: "5,417", color: "text-[#A3A3A3]" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-[#222] bg-[#0A0A0A] p-2.5 text-center">
                <p className="text-[10px] text-[#737373]">{item.label}</p>
                <p className={`text-[13px] font-bold ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Proof of Reserve */}
      <SectionCard title="Proof of Reserve" subtitle="150-day liquidity reserve system">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-[12px] text-[#A3A3A3] mb-3">
              The system maintains sufficient liquidity to pay all IDs for up to 150 days even with zero new deposits.
            </p>
            <div className="mb-2 flex justify-between">
              <span className="text-[12px] text-[#A3A3A3]">Reserve Health</span>
              <span className="text-[12px] font-bold text-[#FFB51D]">148 / 150 days</span>
            </div>
            <div className="h-3 w-full rounded-full bg-[#222] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#FFE28A] to-[#FFB51D]"
                style={{ width: "98.7%" }}
              />
            </div>
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-[#FFB51D]/20 bg-[#FFB51D]/5 p-3">
              <Info size={13} className="mt-0.5 shrink-0 text-[#FFB51D]" />
              <p className="text-[11px] text-[#A3A3A3]">Reserve is funded, segregated, and monitored. Replenishment rules are governed by protocol smart contract.</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { label: "Buy Package Split", value: "80% HANA (mint/LP) + 20% Price Gap", color: "text-[#FFB51D]" },
              { label: "Sell Package", value: "100% tokens burned", color: "text-red-400" },
              { label: "LP Addition on Sell", value: "5–10% to Liquidity Pool", color: "text-green-400" },
              { label: "Direct Purchase", value: "Not via PancakeSwap", color: "text-[#A3A3A3]" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between rounded-lg border border-[#222] bg-[#0A0A0A] px-3 py-2.5">
                <span className="text-[11px] text-[#737373]">{item.label}</span>
                <span className={`text-[11px] font-semibold ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
