import { motion } from "framer-motion";
import { TrendingDown, Quote } from "lucide-react";
import { SectionHeading, Reveal } from "./ui.jsx";
import { PART3 } from "../data/content.js";

export default function Part3() {
  return (
    <section id="he-qua" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={`${PART3.kicker} · ${PART3.title}`}
          title={PART3.heading}
          intro={PART3.intro}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PART3.cards.map((c, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass h-full rounded-3xl p-8 shadow-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-wider ${
                      c.tag === "Kinh tế"
                        ? "bg-teal/15 text-teal"
                        : "bg-crimson/15 text-crimson"
                    }`}
                  >
                    {c.tag}
                  </span>
                  <TrendingDown className="h-5 w-5 text-cream/25" />
                </div>
                <h3 className="display text-2xl font-semibold text-cream mb-3">
                  {c.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-cream/55">
                  {c.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Big quote */}
        <Reveal delay={0.2}>
          <div className="mt-16 relative text-center">
            <Quote className="mx-auto mb-5 h-10 w-10 text-gold-400/50" />
            <blockquote className="display text-3xl md:text-5xl font-bold leading-tight text-gold-grad max-w-3xl mx-auto">
              “{PART3.quote.text}”
            </blockquote>
            <div className="mt-6 mx-auto gold-line w-32" />
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-cream/40">
              {PART3.quote.source}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
