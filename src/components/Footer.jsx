import { Scale } from "lucide-react";
import { CREDITS } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/5 px-6 py-14">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/12 border border-gold-400/25 text-gold-300">
          <Scale className="h-5 w-5" />
        </div>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-cream/45">
          {CREDITS.note}
        </p>
        <div className="mx-auto my-6 gold-line w-24" />
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream/35">
          {CREDITS.group}
        </p>
      </div>
    </footer>
  );
}
