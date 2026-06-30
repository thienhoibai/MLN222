import { motion } from "framer-motion";
import { SectionHeading, Reveal, Counter } from "./ui.jsx";
import { PART2 } from "../data/content.js";

export default function Part2() {
  return (
    <section
      id="thuc-tien"
      className="relative py-28 md:py-36 px-6 bg-ink-900/40"
    >
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={`${PART2.kicker} · ${PART2.title}`}
          title={PART2.heading}
          intro={PART2.intro}
        />

        {/* Stats band */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {PART2.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="glass rounded-3xl p-7 text-center shadow-card">
                <div className="display text-5xl md:text-6xl font-extrabold text-gold-grad">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-medium text-cream/80">
                  {s.label}
                </div>
                <div className="mt-1 font-mono text-[11px] text-gold-300/70">
                  {s.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* "Sức nặng Chaebol" bar viz */}
        <Reveal delay={0.15}>
          <div className="mt-10 glass rounded-3xl p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-300">
                Sức nặng Chaebol trong GDP
              </span>
              <span className="font-mono text-xs text-cream/40">Hàn Quốc</span>
            </div>
            <BarRow label="Top 10 Chaebol" pct={70} highlight />
            <BarRow label="Riêng Samsung" pct={20} />
            <BarRow label="Phần còn lại của nền kinh tế" pct={30} muted />
            <p className="mt-4 text-xs text-cream/40">
              * Ước tính minh hoạ tỷ trọng đóng góp / doanh thu so với GDP, dùng cho mục đích trình bày.
            </p>
          </div>
        </Reveal>

        {/* Three blocks */}
        <div className="mt-12 space-y-5">
          {PART2.blocks.map((b, i) => (
            <Reveal key={b.no} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                className="glass group flex flex-col md:flex-row gap-6 rounded-3xl p-7 md:p-8"
              >
                <div className="flex-shrink-0">
                  <div className="display text-5xl font-bold text-gold-grad">
                    {b.no}
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="display text-xl md:text-2xl font-semibold text-cream">
                      {b.title}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-gold-300/70">
                      {b.sub}
                    </span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-cream/55">
                    {b.body}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BarRow({ label, pct, highlight, muted }) {
  return (
    <div className="py-2.5">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className={muted ? "text-cream/45" : "text-cream/85"}>{label}</span>
        <span className="font-mono text-gold-300">{pct}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-ink-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full ${
            muted
              ? "bg-cream/20"
              : highlight
              ? "bg-gradient-to-r from-gold-300 to-gold-600 shadow-glow"
              : "bg-gradient-to-r from-gold-500 to-gold-700"
          }`}
        />
      </div>
    </div>
  );
}
