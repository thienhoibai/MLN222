import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, Building2, Gavel, LineChart, MousePointerClick } from "lucide-react";
import { SectionHeading, Reveal } from "./ui.jsx";
import { LOOP } from "../data/content.js";

const NODE_ICONS = {
  "nha-nuoc": Landmark,
  "tai-phiet": Building2,
  "phap-luat": Gavel,
  "kinh-te": LineChart,
};

// positions on the ring (% of the square box)
const POS = [
  { top: "2%", left: "50%" },
  { top: "50%", left: "98%" },
  { top: "98%", left: "50%" },
  { top: "50%", left: "2%" },
];

export default function PowerLoop() {
  const [active, setActive] = useState(0);
  const node = LOOP.nodes[active];

  return (
    <section id="vong-lap" className="relative py-28 md:py-36 px-6 bg-ink-900/40">
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={`${LOOP.kicker} · Sơ đồ tương tác`}
          title={LOOP.title}
          intro={LOOP.intro}
          align="center"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* Diagram */}
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              {/* rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[14%] rounded-full border-2 border-dashed border-gold-400/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[26%] rounded-full border border-gold-400/15"
              />

              {/* center label */}
              <div className="absolute inset-[30%] grid place-items-center rounded-full bg-ink-800/80 border border-gold-400/20 text-center p-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gold-300/70">
                    Vòng lặp
                  </div>
                  <div className="display text-sm font-semibold text-cream/80 leading-tight mt-1">
                    Quyền lực · Tiền bạc · Pháp lý
                  </div>
                </div>
              </div>

              {/* nodes */}
              {LOOP.nodes.map((n, i) => {
                const Icon = NODE_ICONS[n.id];
                const isActive = i === active;
                return (
                  <button
                    key={n.id}
                    onClick={() => setActive(i)}
                    style={{ top: POS[i].top, left: POS[i].left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <span className="relative grid place-items-center">
                      {isActive && (
                        <span className="absolute h-14 w-14 rounded-full border border-gold-400/60 animate-pulse-ring" />
                      )}
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-full border transition ${
                          isActive
                            ? "bg-gradient-to-br from-gold-400 to-gold-600 border-gold-300 text-ink-950 shadow-glow scale-110"
                            : "glass text-gold-300 hover:scale-105"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                    </span>
                    <span
                      className={`mt-2 block w-28 text-center text-[11px] font-medium leading-tight ${
                        isActive ? "text-gold-200" : "text-cream/45"
                      }`}
                    >
                      {n.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-cream/35">
              <MousePointerClick className="h-4 w-4 text-gold-300" />
              Bấm vào từng mắt xích để xem chi tiết
            </p>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.1}>
            <div className="glass min-h-[320px] rounded-3xl p-8 md:p-10 shadow-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="font-mono text-[11px] uppercase tracking-widest text-gold-300/70">
                    Mắt xích {active + 1} / {LOOP.nodes.length}
                  </div>
                  <h3 className="display mt-2 text-3xl font-bold text-gold-grad">
                    {node.label}
                  </h3>
                  <p className="mt-2 text-cream/70 italic display">{node.short}</p>
                  <div className="my-5 gold-line w-20" />
                  <p className="leading-relaxed text-cream/60">{node.detail}</p>
                </motion.div>
              </AnimatePresence>

              {/* progress dots */}
              <div className="mt-8 flex gap-2">
                {LOOP.nodes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-8 bg-gold-400" : "w-1.5 bg-cream/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
