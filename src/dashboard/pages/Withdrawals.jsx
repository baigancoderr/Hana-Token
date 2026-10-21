import { Wallet, Clock, AlertTriangle, CheckCircle, ArrowDownRight, Info } from "lucide-react";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const history = [
  { id: "WD-001", amount: 100, fee: "30%", net: 70, status: "Completed", date: "10 Oct 2026", days: 5 },
  { id: "WD-002", amount: 250, fee: "30%", net: 175, status: "Completed", date: "05 Oct 2026", days: 10 },
  { id: "WD-003", amount: 500, fee: "10%", net: 450, status: "Completed", date: "15 Sep 2026", days: 55 },
  { id: "WD-004", amount: 150, fee: "30%", net: 105, status: "Pending", date: "18 Oct 2026", days: 2 },
];

const statusColors = {
  Completed: "border-green-500/30 bg-green-500/10 text-green-400",
  Pending: "border-[#FFB51D]/30 bg-[#FFB51D]/10 text-[#FFB51D]",
  Rejected: "border-red-500/30 bg-red-500/10 text-red-400",
};

export default function Withdrawals() {
  const available = 284.50;
  const reinvest = 128.45;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Wallet} label="Available Balance" value="$284.50" sub="Ready to withdraw" color="gold" />
        <StatCard icon={ArrowDownRight} label="Total Withdrawn" value="$1,000" sub="Lifetime withdrawals" color="blue" />
        <StatCard icon={Clock} label="Cooling Period" value="0h Left" sub="Ready for next withdrawal" color="green" />
        <StatCard icon={Wallet} label="Reinvest Wallet" value="$128.45" sub="For $1,000 top-up only" color="purple" />
      </div>

      {/* Withdrawal Form */}
      <SectionCard title="Request Withdrawal" subtitle="Max $2,500 per request · 24h cooling period after each withdrawal">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {/* Amount Input */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium text-[#A3A3A3]">
                Withdrawal Amount (USDT)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737373] text-[13px]">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  max={2500}
                  className="h-[46px] w-full rounded-lg border border-[#222] bg-[#111] pl-7 pr-16 text-[14px] text-white placeholder-[#737373] outline-none focus:border-[#FFB51D]/50 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-[#FFB51D]/10 px-2 py-1 text-[11px] font-bold text-[#FFB51D] hover:bg-[#FFB51D]/20 transition-colors">
                  MAX
                </button>
              </div>
              <p className="mt-1 text-[11px] text-[#737373]">Available: <span className="text-[#FFB51D] font-semibold">${available}</span> · Max per request: <span className="text-white font-semibold">$2,500</span></p>
            </div>

            {/* Wallet Address */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium text-[#A3A3A3]">
                Destination Wallet (USDT BEP-20)
              </label>
              <input
                type="text"
                placeholder="0x..."
                className="h-[46px] w-full rounded-lg border border-[#222] bg-[#111] px-4 text-[13px] text-white placeholder-[#737373] outline-none focus:border-[#FFB51D]/50 transition-colors"
              />
            </div>

            {/* Fee Estimator */}
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-4 space-y-2">
              <p className="text-[12px] font-semibold text-white">Fee Estimate</p>
              <div className="flex justify-between">
                <span className="text-[12px] text-[#A3A3A3]">Requested Amount</span>
                <span className="text-[12px] text-white font-medium">$200.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[12px] text-[#A3A3A3]">Admin Fee (5%)</span>
                <span className="text-[12px] text-red-400">- $10.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[12px] text-[#A3A3A3]">Reinvest (5%)</span>
                <span className="text-[12px] text-[#FFB51D]">- $10.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[12px] text-[#A3A3A3]">Ecosystem (20%)</span>
                <span className="text-[12px] text-purple-400">- $40.00</span>
              </div>
              <div className="flex justify-between border-t border-[#222] pt-2">
                <span className="text-[13px] font-semibold text-white">Net Received</span>
                <span className="text-[15px] font-bold text-green-400">$140.00</span>
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] py-3 text-[14px] font-bold text-black hover:brightness-110 transition-all">
              <Wallet size={16} /> Request Withdrawal
            </button>
          </div>

          {/* Rules Panel */}
          <div className="space-y-3">
            <p className="text-[12px] font-semibold text-[#A3A3A3] uppercase tracking-wider">Withdrawal Rules</p>

            {[
              {
                icon: Clock,
                color: "text-[#FFB51D]",
                bg: "bg-[#FFB51D]/10",
                title: "30% Fee (Default)",
                desc: "Admin 5% + Reinvest 5% + Ecosystem 20% = 30% total deduction on all withdrawals.",
              },
              {
                icon: CheckCircle,
                color: "text-green-400",
                bg: "bg-green-500/10",
                title: "10% Fee (After 45 Days)",
                desc: "Only Admin 5% + Reinvest 5%. Save 20% by waiting 45 days from last withdrawal.",
              },
              {
                icon: AlertTriangle,
                color: "text-red-400",
                bg: "bg-red-500/10",
                title: "$2,500 Max Per Request",
                desc: "Maximum withdrawal limit per request. 24-hour cooling period applies after each withdrawal.",
              },
              {
                icon: Wallet,
                color: "text-purple-400",
                bg: "bg-purple-500/10",
                title: "Reinvest Wallet",
                desc: "The 5% reinvest goes to your Reinvest Wallet. It can only be used to top up a $1,000 package ID.",
              },
              {
                icon: Info,
                color: "text-[#FFB51D]",
                bg: "bg-[#FFB51D]/10",
                title: "No P2P Transfers",
                desc: "Internal HANA token transfers between members are not allowed in the system.",
              },
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
        </div>
      </SectionCard>

      {/* History */}
      <SectionCard title="Withdrawal History" subtitle="Your past withdrawal requests">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="border-b border-[#222]">
                {["TX ID", "Date", "Amount", "Fee", "Net", "Days Since Last", "Status"].map((h) => (
                  <th key={h} className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#737373]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {history.map((row, i) => (
                <tr key={i} className="border-b border-[#222]">
                  <td className="py-3 text-[12px] font-mono text-[#A3A3A3]">{row.id}</td>
                  <td className="py-3 text-[12px] text-[#A3A3A3]">{row.date}</td>
                  <td className="py-3 text-[13px] font-bold text-white">${row.amount}</td>
                  <td className="py-3 text-[12px] font-semibold text-red-400">{row.fee}</td>
                  <td className="py-3 text-[13px] font-bold text-green-400">${row.net}</td>
                  <td className="py-3 text-[12px] text-[#A3A3A3]">{row.days} days</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusColors[row.status]}`}>
                      {row.status === "Completed" && <CheckCircle size={9} />}
                      {row.status === "Pending" && <Clock size={9} />}
                      {row.status}
                    </span>
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
