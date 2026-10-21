export default function SectionCard({ title, subtitle, children, className = "" }) {
  return (
    <div className={`rounded-xl border border-[#222] bg-[#111] p-4 shadow-[inset_0_1px_10px_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_12px_rgba(255,255,255,0.07),0_8px_24px_rgba(0,0,0,0.25)] sm:p-6 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-4 sm:mb-5">
          {title && (
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-white font-chakra-petch">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-[12px] text-[#737373]">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
