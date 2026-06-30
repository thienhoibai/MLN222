import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Landmark, MessageCircle, Menu, X } from "lucide-react";
import { NAV } from "../data/content.js";

export default function TopNav({ onAskAI }) {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-cream/10"
          : "bg-gradient-to-b from-ink-950/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3">
        {/* Brand */}
        <button onClick={() => go("hero")} className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-crimson to-gold-600 text-cream shadow-glow">
            <Landmark className="h-4 w-4" />
          </span>
          <span className="display text-lg font-bold tracking-wide text-gold-grad">
            CHAEBOL × CÔNG LÝ
          </span>
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                active === item.id
                  ? "text-gold-200 bg-gold-500/12"
                  : "text-cream/55 hover:text-cream hover:bg-cream/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onAskAI}
            className="flex items-center gap-1.5 rounded-full bg-crimson/90 px-4 py-2 text-xs font-semibold text-cream transition hover:bg-crimson"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Hỏi AI
          </button>
          <button
            onClick={() => setOpenMenu((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-cream/10 text-cream/70 lg:hidden"
            aria-label="Menu"
          >
            {openMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden overflow-hidden border-t border-cream/10 bg-ink-950/95 backdrop-blur-xl"
        >
          <div className="flex flex-col p-3">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-lg px-4 py-2.5 text-left text-sm transition ${
                  active === item.id
                    ? "text-gold-200 bg-gold-500/10"
                    : "text-cream/65 hover:bg-cream/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}

      {/* scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-0.5 origin-left bg-gradient-to-r from-gold-400 via-crimson to-gold-600"
      />
    </header>
  );
}
