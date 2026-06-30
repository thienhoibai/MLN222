import { motion } from "framer-motion";
import { Landmark, Users, Gavel, Quote } from "lucide-react";
import { SectionHeading, Reveal } from "./ui.jsx";
import { PART1 } from "../data/content.js";

const ICONS = [Landmark, Users, Gavel];

export default function Part1() {
  return (
    <section id="ly-thuyet" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={`${PART1.kicker} · ${PART1.title}`}
          title={PART1.heading}
          intro={PART1.intro}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PART1.features.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={f.no} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="glass group relative h-full rounded-3xl p-8 shadow-card overflow-hidden"
                >
                  <div className="absolute -right-4 -top-6 display text-[8rem] font-bold leading-none text-gold-500/10 select-none">
                    {f.no}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/12 border border-gold-400/25 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="display text-xl font-semibold text-cream mb-3 leading-snug">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cream/55">
                      {f.body}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 relative rounded-3xl border border-gold-400/25 bg-gradient-to-br from-gold-500/10 to-transparent p-8 md:p-10">
            <Quote className="absolute -top-4 left-8 h-8 w-8 text-gold-400/60" />
            <p className="display text-lg md:text-2xl italic leading-relaxed text-cream/90">
              {PART1.conclusion}
            </p>
            <div className="mt-4 gold-line w-24" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
