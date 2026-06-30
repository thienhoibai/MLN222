import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { SectionHeading, Reveal, Skyline } from "./ui.jsx";
import { SUMMARY } from "../data/content.js";

// Nhận diện YouTube / Google Drive / file trực tiếp và trả về kiểu phát.
function resolveVideo(url) {
  if (!url) return { type: "none" };
  let m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  if (m) return { type: "iframe", src: `https://www.youtube.com/embed/${m[1]}?autoplay=1` };
  m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) ||
      url.match(/drive\.google\.com\/open\?id=([\w-]+)/) ||
      url.match(/[?&]id=([\w-]+)/);
  if (m && /drive\.google\.com/.test(url))
    return { type: "iframe", src: `https://drive.google.com/file/d/${m[1]}/preview` };
  return { type: "video", src: url };
}

export default function Summary() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const media = resolveVideo(SUMMARY.videoUrl);

  const play = () => {
    if (media.type === "none") return;
    setPlaying(true);
    if (media.type === "video") requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section id="tong-ket" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <Skyline className="absolute bottom-0 left-0 w-full h-48 opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-gold-500/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading kicker={SUMMARY.kicker} title={SUMMARY.title} align="center" />

        <div className="mt-12 space-y-5 max-w-3xl mx-auto">
          {SUMMARY.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-center text-base md:text-lg leading-relaxed text-cream/65">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Video */}
        <Reveal delay={0.15}>
          <div className="mt-16">
            <div className="mb-5 flex items-center justify-center gap-2 text-gold-300">
              <Film className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Video sản phẩm
              </span>
            </div>

            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold-400/25 shadow-card aspect-video bg-ink-800">
              {playing && media.type === "iframe" && (
                <iframe
                  src={media.src}
                  title="Video sản phẩm"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerated-controller; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              )}

              {media.type === "video" && (
                <video
                  ref={videoRef}
                  src={media.src}
                  className={`absolute inset-0 h-full w-full ${playing ? "" : "opacity-0"}`}
                  controls={playing}
                  playsInline
                  preload="none"
                />
              )}

              {!playing && (
                <button onClick={play} className="group absolute inset-0 grid place-items-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900" />
                  <div className="absolute inset-0 radial-gold opacity-60" />
                  <Skyline className="absolute bottom-0 left-0 w-full h-32 opacity-50" />
                  <div className="relative z-10 text-center px-6">
                    {media.type !== "none" && (
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 shadow-glow"
                      >
                        <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
                      </motion.div>
                    )}
                    <p className="mt-5 max-w-md mx-auto text-sm text-cream/70 leading-relaxed">
                      {SUMMARY.videoNote}
                    </p>
                    {media.type === "none" && (
                      <p className="mt-3 font-mono text-[11px] text-gold-300/70">
                        ▸ Dán link YouTube/Drive (hoặc .mp4) vào{" "}
                        <span className="text-cream/60">SUMMARY.videoUrl</span> ·{" "}
                        <span className="text-cream/60">src/data/content.js</span>
                      </p>
                    )}
                  </div>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
