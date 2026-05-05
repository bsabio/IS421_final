type EvidenceItem = {
  label: string;
  value: string;
};

const evidenceItems: EvidenceItem[] = [
  { label: "SECURE-GATE", value: "< 50ms Latency" },
  { label: "PLUMBER", value: "0.00% Sync Error Rate" },
  { label: "IS_421", value: "100% Schema Validation" },
  { label: "PUBLICATION", value: "50+ Industry Deep-Dives" },
];

export default function EvidenceStrip() {
  return (
    <section className="w-full border border-cyan-200/20 bg-[#0f172a]/60 px-4 py-3">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 text-xs md:flex-nowrap">
        {evidenceItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 font-mono">
            <span className="uppercase tracking-[0.28em] text-cyan-200/70">
              {item.label}:
            </span>
            <span className="uppercase tracking-[0.2em] text-white">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
