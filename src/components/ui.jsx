import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

/* Scroll-reveal wrapper */
export function Reveal({ children, delay = 0, y = 28, className = "", once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Animated number counter */
export function Counter({ to = 100, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const mv = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => mv.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {Math.round(val)}
      {suffix}
    </span>
  );
}

/* Section heading block */
export function SectionHeading({ kicker, title, heading, intro, align = "left" }) {
  const center = align === "center";
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <Reveal>
        <div className={`eyebrow mb-4 ${center ? "" : ""}`}>{kicker}</div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display text-4xl md:text-6xl font-bold leading-[1.05] mb-4">
          <span className="text-gold-grad">{title}</span>
        </h2>
      </Reveal>
      {heading && (
        <Reveal delay={0.1}>
          <p className="display italic text-xl md:text-2xl text-cream/80 mb-5">
            {heading}
          </p>
        </Reveal>
      )}
      {intro && (
        <Reveal delay={0.15}>
          <p className="text-cream/55 leading-relaxed text-base md:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* Decorative city skyline silhouette (SVG) */
export function Skyline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d1a26" />
          <stop offset="100%" stopColor="#08070a" />
        </linearGradient>
      </defs>
      <g fill="url(#skyg)">
        <rect x="0" y="120" width="60" height="100" />
        <rect x="64" y="80" width="44" height="140" />
        <rect x="112" y="140" width="50" height="80" />
        <rect x="168" y="60" width="36" height="160" />
        <rect x="210" y="100" width="60" height="120" />
        <rect x="276" y="30" width="40" height="190" />
        <rect x="322" y="120" width="70" height="100" />
        <rect x="398" y="70" width="42" height="150" />
        <rect x="446" y="110" width="56" height="110" />
        <rect x="508" y="40" width="34" height="180" />
        <rect x="548" y="130" width="64" height="90" />
        <rect x="618" y="20" width="46" height="200" />
        <rect x="670" y="90" width="52" height="130" />
        <rect x="728" y="120" width="60" height="100" />
        <rect x="794" y="55" width="38" height="165" />
        <rect x="838" y="110" width="58" height="110" />
        <rect x="902" y="35" width="44" height="185" />
        <rect x="952" y="125" width="66" height="95" />
        <rect x="1024" y="75" width="42" height="145" />
        <rect x="1072" y="115" width="54" height="105" />
        <rect x="1132" y="45" width="36" height="175" />
        <rect x="1174" y="120" width="68" height="100" />
        <rect x="1248" y="85" width="46" height="135" />
        <rect x="1300" y="130" width="60" height="90" />
        <rect x="1366" y="70" width="74" height="150" />
      </g>
      {/* lit windows */}
      <g fill="#d9b36b" opacity="0.5">
        {Array.from({ length: 60 }).map((_, i) => (
          <rect
            key={i}
            x={20 + ((i * 53) % 1400)}
            y={60 + ((i * 37) % 130)}
            width="3"
            height="4"
          />
        ))}
      </g>
    </svg>
  );
}
