import { Coins, TrendingUp, Flame, ArrowUpRight, Info, BarChart3 } from "lucide-react";
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const tokenDistribution = [
  { name: "Liquidity Pool", value: 40, color: "#FFB51D" },
  { name: "Staking Rewards", value: 25, color: "#E5E5E5" },
  { name: "DAO Reserve", value: 15, color: "#a78bfa" },
  { name: "Burn Reserve", value: 10, color: "#ef4444" },
  { name: "Team & Dev", value: 10, color: "#34d399" },
];

const priceHistory = [
  { month: "Jul", price: 0.042 },
  { month: "Aug", price: 0.055 },
  { month: "Sep", price: 0.068 },
  { month: "Oct", price: 0.0845 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-[#222] bg-[#111] p-3 shadow-xl">
        <p className="mb-1 text-[11px] text-[#A3A3A3]">{label}</p>
        {payload.map((e) => (
          <p key={e.name} className="text-[12px] font-bold" style={{ color: e.color }}>
            {e.name}: {typeof e.value === "number" && e.value < 1 ? `$${e.value.toFixed(4)}` : e.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Tokenomics() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Coins} label="HANA Price" value="$0.0845" sub="+100.1% from launch" color="gold" trend={{ up: true, value: "0.5% 24h" }} />
        <StatCard icon={BarChart3} label="Total Supply" value="100M" sub="HANA tokens" color="blue" />
        <StatCard icon={Flame} label="Burned Supply" value="32,450" sub="0.03% of total" color="red" />
        <StatCard icon={TrendingUp} label="Market Cap" value="$8.45M" sub="Circulating supply" color="green" />
      </div>

      {/* Buy & Sell Mechanics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Buy */}
        <div className="relative overflow-hidden rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-5">
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-green-500/5 blur-3xl" />
          <div className="relative flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10">
              <ArrowUpRight size={18} className="text-green-400" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white">Buy Package</p>
              <p className="text-[11px] text-[#A3A3A3]">Token minting & liquidity</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#A3A3A3]">80% of buy amount</span>
                <GoldBadge>HANA Minted</GoldBadge>
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">Tokens minted → added to Liquidity Pool</p>
            </div>
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#A3A3A3]">20% of buy amount</span>
                <span className="rounded-full border border-[#FFB51D]/30 bg-[#FFB51D]/10 px-2 py-0.5 text-[10px] font-semibold text-[#FFB51D]">Price Gap</span>
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">Alternative to direct price distribution mechanism</p>
            </div>
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex items-center gap-2">
                <Info size={12} className="text-[#FFB51D] shrink-0" />
                <p className="text-[11px] text-[#A3A3A3]">
                  Tokens <span className="text-red-400 font-semibold">cannot</span> be bought directly on PancakeSwap
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sell */}
        <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent p-5">
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-red-500/5 blur-3xl" />
          <div className="relative flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10">
              <Flame size={18} className="text-red-400" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white">Sell Package</p>
              <p className="text-[11px] text-[#A3A3A3]">Deflationary burn mechanism</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#A3A3A3]">100% of sell tokens</span>
                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-400">🔥 BURNED</span>
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">All tokens permanently removed from contract</p>
            </div>
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#A3A3A3]">5–10% additional</span>
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-400">LP Added</span>
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">USDT added to Liquidity Pool after each sell</p>
            </div>
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#A3A3A3]">Price Stabilizer</span>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] font-semibold text-purple-400">2X Mint</span>
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">For every 1 HANA staked → 2 HANA minted to reserve</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="Token Distribution" subtitle="Allocation breakdown">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={tokenDistribution}
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={88}
                paddingAngle={4}
                dataKey="value"
              >
                {tokenDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: "#111111", border: "1px solid #222222", borderRadius: 8, fontSize: 12 }} />
              <Legend formatter={(v) => <span style={{ color: "#A3A3A3", fontSize: 11 }}>{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard title="Price History" subtitle="HANA token price growth">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={priceHistory} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222222" />
              <XAxis dataKey="month" tick={{ fill: "#737373", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#737373", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v.toFixed(2)}`} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="price" name="Price" fill="#FFB51D" radius={[6, 6, 0, 0]} maxBarSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* Distribution Table */}
      <SectionCard title="Token Allocation Details" subtitle="Full breakdown of HANA supply">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-[#222]">
                {["Category", "Allocation", "Tokens", "Purpose"].map((h) => (
                  <th key={h} className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#737373]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tokenDistribution.map((item, i) => (
                <tr key={i} className="border-b border-[#222]">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                      <span className="text-[13px] font-medium text-white">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-[13px] font-bold" style={{ color: item.color }}>{item.value}%</td>
                  <td className="py-3 text-[12px] text-[#A3A3A3]">{(item.value * 1000000).toLocaleString()}</td>
                  <td className="py-3 text-[11px] text-[#737373]">
                    {item.name === "Liquidity Pool" && "DEX trading pairs & market depth"}
                    {item.name === "Staking Rewards" && "ROI, level & direct income payouts"}
                    {item.name === "DAO Reserve" && "DAO pool weekly distributions"}
                    {item.name === "Burn Reserve" && "Deflationary burn mechanism"}
                    {item.name === "Team & Dev" && "Core team & development fund"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
