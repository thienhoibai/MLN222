import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { QrCode, Smartphone, ArrowUpRight } from "lucide-react";
import { SectionHeading, Reveal } from "./ui.jsx";
import { EXTRA } from "../data/content.js";

export default function QRSection() {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    QRCode.toString(EXTRA.qrUrl, {
      type: "svg",
      margin: 1,
      color: { dark: "#1a1622", light: "#00000000" },
      errorCorrectionLevel: "M",
    })
      .then(setSvg)
      .catch(() => setSvg(""));
  }, []);

  return (
    <section id="qr" className="relative py-28 md:py-36 px-6">
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="absolute left-1/2 top-1/3 h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-gold-500/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading kicker={EXTRA.kicker} title={EXTRA.title} align="center" />

        <Reveal delay={0.1}>
          <div className="mt-12 grid items-center gap-8 rounded-3xl border border-gold-400/25 bg-ink-900/50 p-8 md:grid-cols-[auto,1fr] md:p-10 shadow-card">
            {/* QR */}
            <div className="mx-auto">
              <div className="relative grid place-items-center rounded-3xl bg-gradient-to-br from-gold-200 to-gold-400 p-5 shadow-glow">
                <div
                  className="h-44 w-44 md:h-52 md:w-52 [&>svg]:h-full [&>svg]:w-full"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
                {/* corner ticks */}
                <span className="absolute -left-1.5 -top-1.5 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-gold-300" />
                <span className="absolute -right-1.5 -top-1.5 h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-gold-300" />
                <span className="absolute -bottom-1.5 -left-1.5 h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-gold-300" />
                <span className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-gold-300" />
              </div>
              <div className="mt-3 text-center font-mono text-xs text-gold-300/80">
                {EXTRA.qrCaption}
              </div>
            </div>

            {/* text */}
            <div className="text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/12 px-3 py-1 text-gold-300">
                <Smartphone className="h-4 w-4" />
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  Quét bằng camera điện thoại
                </span>
              </div>
              <p className="text-lg leading-relaxed text-cream/70">{EXTRA.desc}</p>
              <a
                href={EXTRA.qrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 font-semibold text-ink-950 transition hover:shadow-glow"
              >
                <QrCode className="h-4 w-4" />
                Mở liên kết
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
