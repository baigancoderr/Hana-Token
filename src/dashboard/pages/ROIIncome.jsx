import { TrendingUp, Clock, Coins, ArrowUpRight, Repeat } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const roiHistory = [
  { period: "Day 1 AM", amount: 5.0 },
  { period: "Day 1 PM", amount: 5.0 },
  { period: "Day 2 AM", amount: 5.0 },
  { period: "Day 2 PM", amount: 5.0 },
  { period: "Day 3 AM", amount: 5.0 },
  { period: "Day 3 PM", amount: 5.0 },
  { period: "Day 4 AM", amount: 5.0 },
  { period: "Day 4 PM", amount: 5.0 },
];

const directHistory = [
  { id: "#M001", name: "Referred User 1", amount: 50, package: "$1,000", date: "12 Oct 2026" },
  { id: "#M002", name: "Referred User 2", amount: 15, package: "$300", date: "10 Oct 2026" },
  { id: "#M003", name: "Referred User 3", amount: 25, package: "$500", date: "08 Oct 2026" },
  { id: "#M004", name: "Referred User 4", amount: 5, package: "$100", date: "05 Oct 2026" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-[#222] bg-[#111] p-3">
        <p className="text-[11px] text-[#A3A3A3]">{label}</p>
        <p className="text-[13px] font-bold text-[#FFB51D]">+${payload[0]?.value}</p>
      </div>
    );
  }
  return null;
};

export default function ROIIncome() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={TrendingUp} label="Total ROI Earned" value="$140.00" sub="14 days × 2 credits" color="gold" />
        <StatCard icon={Coins} label="Direct Income" value="$75.00" sub="3 referrals × 5%" color="blue" />
        <StatCard icon={Repeat} label="Next Credit" value="04:32" sub="Every 12 hours" color="green" />
        <StatCard icon={Clock} label="Days Remaining" value="186" sub="To 2X cap at $2,000" color="purple" />
      </div>

      {/* ROI Structure */}
      <SectionCard title="ROI Rate Structure" subtitle="Credits split and issued every 12 hours">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { package: "$100", daily: "0.50%", per12h: "0.25%", daily$: "$0.50", cap: "$200" },
            { package: "$300", daily: "0.60%", per12h: "0.30%", daily$: "$1.80", cap: "$600" },
            { package: "$500", daily: "0.70%", per12h: "0.35%", daily$: "$3.50", cap: "$1,000" },
            { package: "$1,000", daily: "1.00%", per12h: "0.50%", daily$: "$10.00", cap: "$2,000" },
          ].map((row) => (
            <div
              key={row.package}
              className={`rounded-xl border ${row.package === "$1,000" ? "border-[#FFB51D]/30 bg-[#FFB51D]/5" : "border-[#222] bg-[#111]"} p-4`}
            >
              {row.package === "$1,000" && (
                <div className="mb-2">
                  <GoldBadge>Your Package</GoldBadge>
                </div>
              )}
              <p className="text-[18px] font-bold text-white">{row.package}</p>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[11px] text-[#737373]">Daily Rate</span>
                  <span className="text-[12px] font-bold text-[#FFB51D]">{row.daily}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] text-[#737373]">Per 12h</span>
                  <span className="text-[12px] text-[#A3A3A3]">{row.per12h}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] text-[#737373]">Daily Earn</span>
                  <span className="text-[12px] font-bold text-green-400">{row.daily$}</span>
                </div>
                <div className="flex justify-between border-t border-[#222] pt-2">
                  <span className="text-[11px] text-[#737373]">2X Cap</span>
                  <span className="text-[12px] font-bold text-white">{row.cap}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
          <p className="text-[12px] text-[#A3A3A3]">
            <span className="font-semibold text-[#FFB51D]">Capping Rule:</span> 2X for Investors · 4X for Networkers · ROI, Direct & Level income counts toward capping.
            Rank income and DAO income are <span className="text-green-400 font-semibold">excluded</span> from capping.
          </p>
        </div>
      </SectionCard>

      {/* ROI History Chart */}
      <SectionCard title="ROI Credit History" subtitle="Per-credit earnings (12h intervals)">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={roiHistory} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222222" />
            <XAxis dataKey="period" tick={{ fill: "#737373", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#737373", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" fill="#FFB51D" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </SectionCard>

      {/* Direct Income */}
      <SectionCard title="Direct Referral Income" subtitle="5% on every staking action by your direct referrals">
        <div className="mb-4 rounded-lg border border-[#FFB51D]/20 bg-[#FFB51D]/5 p-3 flex items-center gap-2">
          <ArrowUpRight size={15} className="text-[#FFB51D]" />
          <p className="text-[12px] text-[#A3A3A3]">
            Earn <span className="font-bold text-[#FFB51D]">5%</span> on every staking action by your direct referrals. This counts toward your capping limit.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#737373]">Member</th>
                <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#737373]">Package</th>
                <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#737373]">Date</th>
                <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[#737373]">Income (5%)</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {directHistory.map((row, i) => (
                <tr key={i} className="border-b border-[#222]">
                  <td className="py-3">
                    <div>
                      <p className="text-[13px] font-medium text-white">{row.name}</p>
                      <p className="text-[11px] text-[#737373]">{row.id}</p>
                    </div>
                  </td>
                  <td className="py-3 text-[12px] text-[#A3A3A3]">{row.package}</td>
                  <td className="py-3 text-[12px] text-[#A3A3A3]">{row.date}</td>
                  <td className="py-3 text-right text-[13px] font-bold text-green-400">+${row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border border-[#222] bg-[#0A0A0A] px-4 py-3">
          <span className="text-[13px] font-semibold text-white">Total Direct Income</span>
          <span className="text-[16px] font-bold text-green-400">+${directHistory.reduce((a, b) => a + b.amount, 0)}</span>
        </div>
      </SectionCard>
    </div>
  );
}
