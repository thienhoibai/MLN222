import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";

const SUGGESTIONS = [
  "Chaebol là gì?",
  "Vì sao có đặc xá?",
  "Korea Discount?",
  "CNTB độc quyền nhà nước?",
];

// Câu trả lời mô phỏng (offline) dựa trên từ khóa.
const KB = [
  {
    keys: ["chaebol", "tài phiệt", "tap doan", "tập đoàn"],
    a: "Chaebol là các đại tập đoàn gia đình trị của Hàn Quốc (Samsung, Hyundai, Lotte, SK…). Top 10 Chaebol chiếm khoảng 60–70% GDP, nên sức nặng của họ với chính phủ là cực lớn.",
  },
  {
    keys: ["đặc xá", "dac xa", "ân xá", "an xa", "thả", "tự do"],
    a: "Đặc xá được xem như một “cuộc đổi chác” kinh tế – chính trị: Nhà nước trao trả tự do cho chủ tịch tập đoàn, đổi lại các Chaebol cam kết bơm vốn đầu tư và tạo việc làm — thường rơi vào lúc kinh tế khủng hoảng.",
  },
  {
    keys: ["korea discount", "chiết khấu", "chiet khau", "cổ phiếu", "co phieu"],
    a: "“Korea Discount” là hiện tượng cổ phiếu doanh nghiệp Hàn bị định giá thấp hơn đối thủ, do nhà đầu tư e ngại sự thiếu minh bạch, rủi ro đạo đức và quyền lực khó kiểm soát của các gia tộc trị.",
  },
  {
    keys: ["độc quyền nhà nước", "doc quyen", "lênin", "lenin", "mác", "mac"],
    a: "Theo Lênin, khi nhà nước tư sản dung hợp làm một với các tổ chức độc quyền tư nhân, ta có Chủ nghĩa tư bản độc quyền nhà nước — nhà nước can thiệp trực tiếp để bảo vệ lợi nhuận của tư bản độc quyền.",
  },
  {
    keys: ["hữu tiền", "huu tien", "công lý", "cong ly", "niềm tin"],
    a: "Câu “Hữu tiền vô tội, Vô tiền hữu tội” phản ánh sự xói mòn niềm tin vào công lý: đủ giàu và đủ quan trọng thì pháp luật dường như sẽ “chừa ra”.",
  },
  {
    keys: ["gdp", "samsung", "20", "kinh tế"],
    a: "Riêng Samsung chiếm khoảng 20% GDP Hàn Quốc — tương đương 1/5 nền kinh tế. Đó là lý do khi Samsung “hắt hơi”, cả nền kinh tế có thể “cảm lạnh”.",
  },
];

function answerFor(text) {
  const t = text.toLowerCase();
  const hit = KB.find((k) => k.keys.some((key) => t.includes(key)));
  return (
    hit?.a ||
    "Mình là trợ lý mô phỏng cho chủ đề “Tư bản độc quyền nhà nước & đặc xá Chaebol”. Hãy thử hỏi về: Chaebol, đặc xá, Korea Discount, GDP/Samsung, hoặc lý luận Mác – Lênin nhé!"
  );
}

export default function Chatbot({ open, setOpen }) {
  const [msgs, setMsgs] = useState([
    {
      from: "bot",
      text: "Xin chào! Mình là trợ lý của bài thuyết trình. Hỏi mình bất cứ điều gì về Chaebol & đặc xá nhé.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = (textArg) => {
    const text = (textArg ?? input).trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "bot", text: answerFor(text) }]);
    }, 650);
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 shadow-glow"
        aria-label="Mở trợ lý"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 flex h-[460px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-3xl border border-gold-400/25 bg-ink-850/95 backdrop-blur-xl shadow-card"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-cream/10 bg-ink-800/80 px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-cream">Trợ lý G5</div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Trực tuyến (mô phỏng)
                </div>
              </div>
            </div>

            {/* messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950"
                        : "bg-ink-700/80 text-cream/85 border border-cream/5"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl bg-ink-700/80 px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-300"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* suggestions */}
            {msgs.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="flex items-center gap-1 rounded-full border border-gold-400/25 px-3 py-1 text-[11px] text-gold-200 transition hover:bg-gold-500/10"
                  >
                    <Sparkles className="h-3 w-3" />
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-cream/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hỏi về Chaebol, đặc xá…"
                className="flex-1 rounded-xl border border-cream/10 bg-ink-900/70 px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold-400/50"
              />
              <button
                type="submit"
                className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 transition hover:shadow-glow"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
