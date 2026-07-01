import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Copy, Check, Sparkles } from "lucide-react";
import { AI_APPENDIX } from "../data/content.js";

export default function AIAppendix() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `${AI_APPENDIX.title}\n\n${AI_APPENDIX.desc}\n\n${AI_APPENDIX.items
      .map(
        (item) =>
          `- ${item.tool} (${item.role}): ${item.detail} (Tỷ lệ đóng góp: ${item.ratio})`
      )
      .join("\n")}\n\n${AI_APPENDIX.pledge}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="phu-luc-ai" className="relative border-b border-cream/5 py-24 radial-gold">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="eyebrow flex items-center justify-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            {AI_APPENDIX.kicker}
          </span>
          <h2 className="display mt-3 text-3xl font-bold tracking-tight text-gold-grad md:text-4xl">
            {AI_APPENDIX.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/70">
            {AI_APPENDIX.desc}
          </p>
        </div>

        {/* Content Grid */}
        <div className={`grid gap-6 mx-auto ${AI_APPENDIX.items.length === 2 ? "md:grid-cols-2 max-w-4xl" : "md:grid-cols-3"}`}>
          {AI_APPENDIX.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass relative flex flex-col justify-between rounded-2xl p-6 transition duration-300"
            >
              <div>
                {/* Icon & Tool Name */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500/10 border border-gold-400/20 text-gold-300">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream">{item.tool}</h3>
                    <p className="text-[11px] font-mono text-gold-400/80 uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <p className="text-xs leading-relaxed text-cream/60">
                  {item.detail}
                </p>
              </div>

              {/* Contribution Slider Indicator */}
              <div className="mt-6 border-t border-cream/5 pt-4">
                <div className="mb-2 flex justify-between text-[10px] font-mono text-cream/40 uppercase">
                  <span>Sử dụng AI</span>
                  <span>Con người</span>
                </div>
                {/* Visual contribution bar */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-ink-800 border border-cream/5">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-crimson to-gold-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-[11px] font-semibold text-gold-300">
                  {item.ratio}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment & Copy Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass mt-10 rounded-2xl p-6 bg-gradient-to-br from-ink-900/80 to-ink-950/80 border border-gold-400/20"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Pledge text */}
            <div className="flex items-start gap-4">
              <div className="mt-1 grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-cream text-sm">Cam kết liêm chính học thuật</h4>
                <p className="mt-1 text-xs leading-relaxed text-cream/55 max-w-3xl">
                  {AI_APPENDIX.pledge}
                </p>
              </div>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 rounded-xl bg-cream px-5 py-3 text-xs font-bold text-ink-950 shadow-card transition hover:shadow-glow hover:bg-white md:self-center"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  Đã sao chép!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-ink-800" />
                  Sao chép Phụ lục AI
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
