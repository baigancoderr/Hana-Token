export default function StatCard({ icon: Icon, label, value, sub, color = "gold", trend }) {
  const colorMap = {
    gold: {
      bg: "from-[#FFE28A]/10 to-[#FFB51D]/5",
      border: "border-[#FFB51D]/20",
      icon: "bg-gradient-to-br from-[#FFE28A] to-[#FFB51D] text-black",
      text: "text-[#FFB51D]",
    },
    blue: {
      bg: "from-white/5 to-white/[0.02]",
      border: "border-white/10",
      icon: "bg-gradient-to-br from-neutral-200 to-neutral-500 text-black",
      text: "text-neutral-200",
    },
    green: {
      bg: "from-green-500/10 to-emerald-500/5",
      border: "border-green-500/20",
      icon: "bg-gradient-to-br from-green-400 to-emerald-500 text-black",
      text: "text-green-400",
    },
    red: {
      bg: "from-red-500/10 to-rose-500/5",
      border: "border-red-500/20",
      icon: "bg-gradient-to-br from-red-400 to-rose-500 text-white",
      text: "text-red-400",
    },
    purple: {
      bg: "from-purple-500/10 to-violet-500/5",
      border: "border-purple-500/20",
      icon: "bg-gradient-to-br from-purple-400 to-violet-500 text-white",
      text: "text-purple-400",
    },
  };
  const c = colorMap[color] || colorMap.gold;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border ${c.border} bg-gradient-to-br ${c.bg} bg-[#111] p-4 shadow-[inset_0_1px_10px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[inset_0_1px_12px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.25)] sm:p-5`}
    >
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-white/[0.03] blur-2xl" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#A3A3A3]">
            {label}
          </p>
          <p className={`mt-1.5 text-[22px] sm:text-[26px] font-bold ${c.text}`}>
            {value}
          </p>
          {sub && (
            <p className="mt-1 text-[12px] text-[#737373]">{sub}</p>
          )}
          {trend && (
            <p className={`mt-1 text-[12px] font-medium ${trend.up ? "text-green-400" : "text-red-400"}`}>
              {trend.up ? "▲" : "▼"} {trend.value}
            </p>
          )}
        </div>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${c.icon}`}>
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}
