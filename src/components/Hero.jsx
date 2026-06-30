import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Scale, Coins } from "lucide-react";
import { META } from "../data/content.js";
import { Skyline } from "./ui.jsx";

export default function Hero({ onStart }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleLines = META.title.split("\n");

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* background glows */}
      <div className="absolute inset-0 radial-gold" />
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gold-500/10 blur-[150px]" />
      </motion.div>
      <Skyline className="absolute bottom-0 left-0 w-full h-64 opacity-70" />
      <div className="absolute inset-0 vignette pointer-events-none" />

      {/* floating coin & scale icons */}
      <motion.div
        className="absolute left-[12%] top-[24%] text-gold-400/30 animate-float hidden md:block"
        style={{ animationDelay: "0s" }}
      >
        <Coins className="h-12 w-12" />
      </motion.div>
      <motion.div
        className="absolute right-[12%] top-[30%] text-gold-400/25 animate-float hidden md:block"
        style={{ animationDelay: "2s" }}
      >
        <Scale className="h-14 w-14" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          {META.eyebrow}
        </motion.div>

        <h1 className="display font-extrabold leading-[0.98] text-5xl sm:text-6xl md:text-8xl">
          {titleLines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-gold-grad"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-base md:text-xl text-cream/65 leading-relaxed"
        >
          {META.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onStart}
            className="group rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-3.5 font-semibold text-ink-950 transition hover:shadow-glow"
          >
            Bắt đầu trình chiếu
          </button>
          <span className="font-mono text-xs text-cream/35">
            {META.group}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Cuộn xuống để khám phá
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
