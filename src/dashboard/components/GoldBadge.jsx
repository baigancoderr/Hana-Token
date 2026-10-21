export default function GoldBadge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gradient-to-r from-[#FFE28A]/10 to-[#FFB51D]/10 border border-[#FFB51D]/30 px-2.5 py-0.5 text-[11px] font-semibold text-[#FFB51D] ${className}`}
    >
      {children}
    </span>
  );
}
