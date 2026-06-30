import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, Reveal } from "./ui.jsx";
import { TIMELINE } from "../data/content.js";

export default function Timeline() {
  const [i, setI] = useState(0);
  const items = TIMELINE.milestones;
  const m = items[i];
  const total = items.length;

  const go = (n) => setI((n + total) % total);

  return (
    <section
      id="dong-thoi-gian"
      className="relative py-28 md:py-36 px-6 bg-ink-900/40"
    >
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={TIMELINE.kicker}
          title={TIMELINE.title}
          intro={TIMELINE.intro}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-gold-300" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-300">
                Mốc {i + 1}/{total}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="display text-4xl md:text-5xl font-bold leading-tight text-cream">
                  {m.title}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-cream/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-crimson" /> {m.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-crimson" /> {m.place}
                  </span>
                </div>
                <div className="my-5 h-px w-full bg-cream/10" />
                <p className="leading-relaxed text-cream/65">{m.desc}</p>
                <p className="mt-5 border-l-2 border-crimson pl-4 display italic text-gold-200">
                  {m.quote}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex items-center gap-3">
              <button
                onClick={() => go(i - 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition hover:border-gold-400/50 hover:text-gold-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(i + 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition hover:border-gold-400/50 hover:text-gold-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={m.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl border border-cream/10 shadow-card"
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <div className="display text-5xl font-extrabold text-cream drop-shadow-lg">
                    {m.year}
                  </div>
                  <div className="mt-1 text-cream/80">{m.title}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Year strip */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-7">
            {items.map((it, idx) => (
              <button
                key={it.year}
                onClick={() => setI(idx)}
                className={`rounded-2xl border p-3 text-left transition ${
                  idx === i
                    ? "border-gold-400/50 bg-gold-500/10"
                    : "border-cream/8 bg-ink-800/40 hover:border-cream/20"
                }`}
              >
                <span
                  className={`block h-2 w-2 rounded-full ${
                    idx === i ? "bg-gold-400" : "bg-cream/25"
                  }`}
                />
                <span
                  className={`mt-2 block display text-base font-bold ${
                    idx === i ? "text-gold-200" : "text-cream/70"
                  }`}
                >
                  {it.year}
                </span>
                <span className="block text-[11px] leading-tight text-cream/40">
                  {it.title}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
