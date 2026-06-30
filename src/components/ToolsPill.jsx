import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Presentation, X, Users, Wrench } from "lucide-react";
import { CREDITS } from "../data/content.js";

const MEMBERS = [
  "Đặng Trường Huy",
  "Nguyễn Quốc Tài",
  "Nguyễn Đạo Thiện",
  "Nguyễn Trần Quang Vinh",
  "Trần Huy Hoàng"
];
const TOOLS = ["Lên ý tưởng & biên tập", "Tư liệu hình ảnh (Wikimedia)", "Dựng video minh hoạ", "Tham khảo nguồn chính thống"];

export default function ToolsPill() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="mb-3 w-[min(86vw,320px)] rounded-2xl border border-gold-400/25 bg-ink-850/95 backdrop-blur-xl p-5 shadow-card"
          >
            <div className="mb-3 flex items-center gap-2 text-gold-300">
              <Users className="h-4 w-4" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Thành viên nhóm</span>
            </div>
            <ul className="mb-4 grid grid-cols-2 gap-1.5">
              {MEMBERS.map((m) => (
                <li key={m} className="rounded-lg bg-ink-800/60 px-2.5 py-1.5 text-xs text-cream/70">
                  {m}
                </li>
              ))}
            </ul>
            <div className="mb-2 flex items-center gap-2 text-gold-300">
              <Wrench className="h-4 w-4" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Công cụ hỗ trợ</span>
            </div>
            <ul className="space-y-1.5">
              {TOOLS.map((t) => (
                <li key={t} className="flex gap-2 text-xs text-cream/60">
                  <span className="text-gold-400/70">✦</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-cream/10 pt-3 text-[11px] text-cream/35">
              {CREDITS.group}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full bg-cream px-4 py-2.5 text-sm font-semibold text-ink-950 shadow-card transition hover:shadow-glow"
      >
        {open ? <X className="h-4 w-4" /> : <Presentation className="h-4 w-4 text-crimson" />}
        Thành viên + Công cụ hỗ trợ
      </button>
    </div>
  );
}
