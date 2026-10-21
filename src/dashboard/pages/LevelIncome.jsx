import { Users, ChevronRight, Zap, Info, Lock, Unlock } from "lucide-react";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

const levelData = [
  { level: 1, reward: "10%", directsRequired: 1, status: "active", earned: "$28.50", members: 3 },
  { level: 2, reward: "5%", directsRequired: 2, status: "active", earned: "$8.20", members: 5 },
  { level: 3, reward: "4%", directsRequired: 3, status: "active", earned: "$4.10", members: 4 },
  { level: 4, reward: "3%", directsRequired: 4, status: "locked", earned: "$0", members: 0 },
  { level: 5, reward: "2%", directsRequired: 5, status: "locked", earned: "$0", members: 0 },
  { level: 6, reward: "1%", directsRequired: 6, status: "locked", earned: "$0", members: 0 },
  { level: 7, reward: "0.5%", directsRequired: 7, status: "locked", earned: "$0", members: 0 },
  { level: 8, reward: "0.5%", directsRequired: 8, status: "locked", earned: "$0", members: 0 },
  { level: 9, reward: "0.5%", directsRequired: 9, status: "locked", earned: "$0", members: 0 },
  { level: 10, reward: "0.5%", directsRequired: 10, status: "locked", earned: "$0", members: 0 },
  { level: 11, reward: "1%", directsRequired: 11, status: "locked", earned: "$0", members: 0 },
  { level: 12, reward: "1%", directsRequired: 12, status: "locked", earned: "$0", members: 0 },
  { level: 13, reward: "1%", directsRequired: 13, status: "locked", earned: "$0", members: 0 },
  { level: 14, reward: "1%", directsRequired: 14, status: "locked", earned: "$0", members: 0 },
  { level: 15, reward: "1%", directsRequired: 15, status: "locked", earned: "$0", members: 0 },
  { level: 16, reward: "1%", directsRequired: 16, status: "locked", earned: "$0", members: 0 },
  { level: 17, reward: "1%", directsRequired: 17, status: "locked", earned: "$0", members: 0 },
  { level: 18, reward: "1%", directsRequired: 18, status: "locked", earned: "$0", members: 0 },
  { level: 19, reward: "1%", directsRequired: 19, status: "locked", earned: "$0", members: 0 },
  { level: 20, reward: "1%", directsRequired: 20, status: "locked", earned: "$0", members: 0 },
];

const momentumData = [
  { daos: 1, levelsOpened: "L1–L5", window: "30 days from joining", color: "text-[#FFB51D]" },
  { daos: 2, levelsOpened: "L6–L10", window: "Next 30 days", color: "text-[#FFB51D]" },
  { daos: 3, levelsOpened: "L11–L15", window: "Next 30 days", color: "text-purple-400" },
  { daos: 4, levelsOpened: "L16–L20", window: "Next 30 days", color: "text-green-400" },
];

export default function LevelIncome() {
  const activeLevels = levelData.filter((l) => l.status === "active").length;
  const totalEarned = 28.5 + 8.2 + 4.1;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Users} label="Active Levels" value={`${activeLevels}/20`} sub="3 levels open" color="gold" />
        <StatCard icon={Zap} label="Level Income" value={`$${totalEarned.toFixed(3)}`} sub="ROI of ROI model" color="blue" />
        <StatCard icon={Users} label="Total Directs" value="3" sub="Need 4 for L4" color="green" />
        <StatCard icon={ChevronRight} label="Network Size" value="12" sub="Across 3 levels" color="purple" />
      </div>

      {/* Info */}
      <div className="rounded-xl border border-[#222] bg-[#111] p-4">
        <div className="flex items-start gap-3">
          <Info size={16} className="mt-0.5 shrink-0 text-[#FFB51D]" />
          <div className="text-[12px] text-[#A3A3A3] leading-relaxed">
            <span className="font-semibold text-white">Level Income = ROI of ROI.</span> You earn a % of your downline's ROI income. Each level requires 1 new direct referral to unlock. Level income counts toward your capping limit (2X/4X).
          </div>
        </div>
      </div>

      {/* Level Table */}
      <SectionCard title="Level Income Structure" subtitle="Your 20-level income breakdown">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {levelData.map((level) => (
            <div
              key={level.level}
              className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-all ${
                level.status === "active"
                  ? "border-[#FFB51D]/20 bg-[#FFB51D]/5"
                  : "border-[#222] bg-[#0A0A0A] opacity-60"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                    level.status === "active"
                      ? "bg-gradient-to-br from-[#FFE28A] to-[#FFB51D] text-black"
                      : "bg-[#222] text-[#737373]"
                  }`}
                >
                  L{level.level}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-white">Level {level.level}</span>
                    {level.status === "active" ? (
                      <Unlock size={11} className="text-green-400" />
                    ) : (
                      <Lock size={11} className="text-[#737373]" />
                    )}
                  </div>
                  <p className="text-[11px] text-[#737373]">
                    {level.status === "active"
                      ? `${level.members} members`
                      : `Needs ${level.directsRequired} directs`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[13px] font-bold ${level.status === "active" ? "text-[#FFB51D]" : "text-[#737373]"}`}>
                  {level.reward}
                </p>
                <p className={`text-[11px] ${level.status === "active" ? "text-green-400" : "text-[#737373]"}`}>
                  {level.earned}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Momentum Reward */}
      <SectionCard
        title="Momentum Reward (Booster)"
        subtitle="Refer DAO members to unlock 5 levels per referral — within 30-day windows"
      >
        <div className="relative overflow-hidden rounded-xl border border-[#FFB51D]/20 bg-gradient-to-br from-[#FFB51D]/5 to-transparent p-5">
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FFB51D]/10 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {momentumData.map((item, i) => (
              <div key={i} className="rounded-xl border border-[#222] bg-[#0A0A0A] p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${item.color.replace("text-", "border-")} bg-[#111]`}>
                    <span className={`text-[13px] font-bold ${item.color}`}>{item.daos}</span>
                  </div>
                </div>
                <p className={`text-[16px] font-bold ${item.color}`}>{item.levelsOpened}</p>
                <p className="mt-1 text-[11px] text-[#737373]">
                  {item.daos} DAO Referral{item.daos > 1 ? "s" : ""}
                </p>
                <p className="mt-1 text-[10px] text-[#737373]">{item.window}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-4 space-y-2">
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <p className="text-[12px] text-[#A3A3A3]">
                <span className="font-semibold text-[#FFB51D]">Window Rule:</span> After referring 1st DAO member, you get another 30-day window for the next.
              </p>
            </div>
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <p className="text-[12px] text-[#A3A3A3]">
                <span className="font-semibold text-[#FFB51D]">Early Bonus:</span> If you refer in 10 days, you get the next fresh 30-day window starting immediately.
              </p>
            </div>
            <div className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3">
              <p className="text-[12px] text-[#A3A3A3]">
                <span className="font-semibold text-purple-400">Note:</span> The 5-level momentum opening is not enforced by smart contract — it is an operational/off-chain benefit.
              </p>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
