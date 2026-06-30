import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./ui.jsx";
import { THESIS } from "../data/content.js";

export default function AmbientThesis() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const [mounted, setMounted] = useState(false);
  const titleLines = THESIS.title.split("\n");
  const useVideo = !!THESIS.bgVideo;

  // Lazy-mount an optional background video only when the section is near.
  useEffect(() => {
    if (inView && useVideo) setMounted(true);
  }, [inView, useVideo]);

  return (
    <section id="luan-de" ref={ref} className="relative overflow-hidden py-28 md:py-40">
      {/* Background layer */}
      <div className="absolute inset-0">
        {useVideo ? (
          mounted && (
            <video
              className="h-full w-full object-cover"
              src={THESIS.bgVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
          )
        ) : (
          <div
            className="ken-burns h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${THESIS.bgImage})` }}
          />
        )}
        {/* duotone red/dark wash so foreground text reads (giống layer phim) */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-crimson/30 to-ink-950/92" />
        <div className="absolute inset-0 bg-ink-950/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-8 inline-block rounded-lg border border-cream/15 bg-ink-950/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-cream/60 backdrop-blur-sm">
            {THESIS.ambientLabel}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="border-l-4 border-crimson pl-5 md:pl-7">
            <h2 className="display text-3xl md:text-6xl font-extrabold leading-[1.04] text-cream drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              {titleLines.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-2xl display text-lg md:text-2xl italic text-[#ff9a8d] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              {THESIS.lead}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card delay={0.05} label={THESIS.cards.main.label}>
            <p className="leading-relaxed text-cream/85">{THESIS.cards.main.body}</p>
          </Card>
          <Card delay={0.1} label={THESIS.cards.quote.label} accent>
            <p className="display text-lg italic leading-relaxed text-[#ff9a8d]">
              {THESIS.cards.quote.text}
            </p>
            <p className="mt-3 text-sm text-cream/55">{THESIS.cards.quote.source}</p>
          </Card>
          <Card delay={0.15} label={THESIS.cards.explain.label}>
            <p className="leading-relaxed text-cream/85">{THESIS.cards.explain.body}</p>
          </Card>
          <Card delay={0.2} label={THESIS.cards.basis.label}>
            <p className="leading-relaxed text-cream/85">{THESIS.cards.basis.body}</p>
          </Card>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-6 rounded-2xl border border-cream/10 bg-ink-950/60 p-5 backdrop-blur-sm">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gold-300">
              {THESIS.cards.refs.label}
            </div>
            <ul className="space-y-2">
              {THESIS.cards.refs.items.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-cream/65">
                  <span className="font-mono text-gold-400/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Card({ label, children, delay = 0, accent }) {
  return (
    <Reveal delay={delay}>
      <div
        className={`h-full rounded-2xl border bg-ink-950/60 p-6 backdrop-blur-sm ${
          accent ? "border-crimson/40" : "border-cream/10"
        }`}
      >
        <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gold-300">
          {label}
        </div>
        {children}
      </div>
    </Reveal>
  );
}
