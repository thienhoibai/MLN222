import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Building2, Calendar, User, TrendingUp, Gavel } from "lucide-react";
import { SectionHeading, Reveal } from "./ui.jsx";
import { MAP, CHAEBOLS } from "../data/content.js";
import { KR_TRANSFORM, KR_PATHS } from "./krmap.js";

export default function KoreaMap() {
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(null);
  const node = CHAEBOLS.find((c) => c.id === active);
  const hovered = CHAEBOLS.find((c) => c.id === hover);

  return (
    <section id="ban-do" className="relative py-28 md:py-36 px-6">
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={MAP.kicker}
          title={MAP.title}
          intro={MAP.intro}
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mt-12 relative rounded-3xl border border-cream/10 bg-ink-900/50 p-4 md:p-8 shadow-card overflow-hidden">
            <div className="mb-4 flex items-center justify-center gap-2 text-xs text-cream/45">
              <MapPin className="h-4 w-4 text-gold-300" />
              {MAP.hint}
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              {/* glow under map */}
              <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[90px]" />

              <svg viewBox="0 0 1024 1024" className="relative h-full w-full">
                <defs>
                  <linearGradient id="krFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2c3550" />
                    <stop offset="100%" stopColor="#1a1e30" />
                  </linearGradient>
                </defs>
                <g
                  transform={KR_TRANSFORM}
                  fill="url(#krFill)"
                  stroke="#d9b36b"
                  strokeWidth="18"
                  strokeOpacity="0.45"
                  dangerouslySetInnerHTML={{ __html: KR_PATHS }}
                />
              </svg>

              {/* markers */}
              {CHAEBOLS.map((c) => {
                const isActive = c.id === active;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    onMouseEnter={() => setHover(c.id)}
                    onMouseLeave={() => setHover(null)}
                    style={{
                      left: `${(c.x / 1024) * 100}%`,
                      top: `${(c.y / 1024) * 100}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <span className="relative grid place-items-center">
                      <span
                        className="absolute h-8 w-8 rounded-full animate-pulse-ring"
                        style={{ border: `1px solid ${c.color}` }}
                      />
                      <span
                        className="grid place-items-center rounded-full border-2 border-white/70 shadow-lg transition-transform"
                        style={{
                          background: c.color,
                          height: isActive ? 26 : 18,
                          width: isActive ? 26 : 18,
                        }}
                      >
                        <Building2
                          className="text-white"
                          style={{ height: isActive ? 14 : 10, width: isActive ? 14 : 10 }}
                        />
                      </span>
                    </span>
                    {/* hover label */}
                    {(hover === c.id || isActive) && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-950/90 px-2 py-0.5 text-[11px] font-semibold"
                        style={{ color: c.color }}
                      >
                        {c.name}
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* legend / quick hover */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {CHAEBOLS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  onMouseEnter={() => setHover(c.id)}
                  onMouseLeave={() => setHover(null)}
                  className="flex items-center gap-2 text-xs text-cream/60 transition hover:text-cream"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
                  {c.name}
                </button>
              ))}
            </div>
            {hovered && !active && (
              <p className="mt-3 text-center text-xs text-cream/45">
                <span className="text-cream/70">{hovered.name}</span> · {hovered.city} — {hovered.sector}
              </p>
            )}
          </div>
        </Reveal>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {node && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink-950/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border bg-ink-850 shadow-card"
              style={{ borderColor: node.color + "66" }}
            >
              {/* image header */}
              <div className="relative h-44 md:h-56">
                <img
                  src={node.image}
                  alt={node.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/30 to-transparent" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink-950/70 text-cream/80 transition hover:bg-ink-950"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-5">
                  <div
                    className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-ink-950"
                    style={{ background: node.color }}
                  >
                    {node.weight}
                  </div>
                  <h3 className="display text-3xl font-bold text-cream">{node.name}</h3>
                </div>
              </div>

              {/* body */}
              <div className="p-5 md:p-7">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <Fact icon={MapPin} label="Trụ sở" value={node.city} />
                  <Fact icon={Calendar} label="Thành lập" value={node.founded} />
                  <Fact icon={User} label="Lãnh đạo" value={node.leader} />
                  <Fact icon={TrendingUp} label="Lĩnh vực" value={node.sector} />
                </div>

                <p className="mt-5 leading-relaxed text-cream/70">{node.info}</p>

                <div className="mt-5 rounded-2xl border border-gold-400/25 bg-gold-500/8 p-4">
                  <div className="mb-1.5 flex items-center gap-2 text-gold-300">
                    <Gavel className="h-4 w-4" />
                    <span className="font-mono text-[11px] uppercase tracking-wider">
                      Tội phạm · Đặc xá
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-cream/75">{node.amnesty}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-cream/8 bg-ink-800/50 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-cream/40">
        <Icon className="h-3.5 w-3.5" />
        <span className="font-mono text-[10px] uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-sm font-medium text-cream/90 leading-snug">{value}</div>
    </div>
  );
}
