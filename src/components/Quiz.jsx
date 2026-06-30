import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Trophy,
  Lightbulb,
  Brain,
} from "lucide-react";
import { SectionHeading, Reveal } from "./ui.jsx";
import { QUIZ } from "../data/quiz.js";

const LETTERS = ["A", "B", "C", "D"];

export default function Quiz() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null); // index of picked option
  const [answers, setAnswers] = useState([]); // booleans, correctness per question
  const [finished, setFinished] = useState(false);

  const q = QUIZ[idx];
  const total = QUIZ.length;
  const score = answers.filter(Boolean).length;

  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    setAnswers((a) => {
      const next = [...a];
      next[idx] = i === q.answer;
      return next;
    });
  };

  const next = () => {
    if (idx + 1 < total) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setIdx(0);
    setPicked(null);
    setAnswers([]);
    setFinished(false);
  };

  return (
    <section id="quiz" className="relative py-28 md:py-36 px-6 bg-ink-900/40">
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker="Phần 6 · Thử thách"
          title="Trắc nghiệm kích thích tư duy"
          intro="5 câu hỏi đi từ vũ trụ phim ảnh đến nút thắt lý luận. Chọn đáp án để xem ngay kết quả và lời dẫn."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mt-14 glass rounded-3xl p-6 md:p-10 shadow-card">
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-full bg-gold-500/15 border border-gold-400/25 px-3 py-1 font-mono uppercase tracking-wider text-gold-300">
                        {q.badge}
                      </span>
                      <span className="font-mono text-cream/45">
                        Câu {idx + 1} / {total}
                      </span>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-700">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
                        initial={false}
                        animate={{ width: `${((idx + (picked !== null ? 1 : 0)) / total) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="display text-xl md:text-2xl font-semibold leading-snug text-cream mb-6">
                    {q.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {q.options.map((opt, i) => {
                      const isAnswer = i === q.answer;
                      const isPicked = i === picked;
                      const revealed = picked !== null;
                      let state = "idle";
                      if (revealed) {
                        if (isAnswer) state = "correct";
                        else if (isPicked) state = "wrong";
                        else state = "dim";
                      }
                      return (
                        <motion.button
                          key={i}
                          onClick={() => choose(i)}
                          disabled={revealed}
                          whileHover={!revealed ? { x: 5 } : {}}
                          className={[
                            "group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition",
                            state === "idle" &&
                              "border-cream/10 bg-ink-800/40 hover:border-gold-400/40",
                            state === "correct" &&
                              "border-emerald-400/50 bg-emerald-400/10",
                            state === "wrong" &&
                              "border-crimson/60 bg-crimson/10",
                            state === "dim" && "border-cream/5 opacity-45",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          <span
                            className={[
                              "grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg font-mono text-sm font-bold transition",
                              state === "idle" &&
                                "bg-ink-700 text-cream/60 group-hover:bg-gold-500/20 group-hover:text-gold-300",
                              state === "correct" &&
                                "bg-emerald-400 text-ink-950",
                              state === "wrong" && "bg-crimson text-white",
                              state === "dim" && "bg-ink-700 text-cream/40",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            {state === "correct" ? (
                              <Check className="h-4 w-4" />
                            ) : state === "wrong" ? (
                              <X className="h-4 w-4" />
                            ) : (
                              LETTERS[i]
                            )}
                          </span>
                          <span
                            className={`text-sm md:text-base ${
                              state === "correct"
                                ? "text-emerald-100"
                                : state === "wrong"
                                ? "text-red-100"
                                : "text-cream/80"
                            }`}
                          >
                            {opt}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Explanation / lead */}
                  <AnimatePresence>
                    {picked !== null && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 rounded-2xl border border-gold-400/25 bg-gradient-to-br from-gold-500/10 to-transparent p-5">
                          <div className="mb-2 flex items-center gap-2 text-gold-300">
                            <Lightbulb className="h-4 w-4" />
                            <span className="font-mono text-[11px] uppercase tracking-wider">
                              {picked === q.answer
                                ? "Chính xác · Lời dẫn"
                                : `Đáp án đúng: ${LETTERS[q.answer]} · Lời dẫn`}
                            </span>
                          </div>
                          <p className="text-sm md:text-base italic leading-relaxed text-cream/80 display">
                            “{q.lead}”
                          </p>
                        </div>

                        <button
                          onClick={next}
                          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 font-semibold text-ink-950 transition hover:shadow-glow"
                        >
                          {idx + 1 < total ? "Câu tiếp theo" : "Xem kết quả"}
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <ResultScreen key="result" score={score} total={total} onRestart={restart} />
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ResultScreen({ score, total, onRestart }) {
  const pct = Math.round((score / total) * 100);
  let title, msg;
  if (pct === 100) {
    title = "Xuất sắc!";
    msg = "Bạn đã nắm trọn vẹn nút thắt lý luận của chủ nghĩa tư bản độc quyền nhà nước.";
  } else if (pct >= 60) {
    title = "Rất tốt!";
    msg = "Bạn đã hiểu cốt lõi vòng lặp “Tội phạm – Đặc xá”. Xem lại video để hoàn thiện nhé.";
  } else {
    title = "Cùng xem lại nào!";
    msg = "Hãy xem lại các phần phân tích và video để giải mã sâu hơn về Chaebol và đặc xá.";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-6"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
        className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 shadow-glow"
      >
        {pct >= 60 ? <Trophy className="h-11 w-11" /> : <Brain className="h-11 w-11" />}
      </motion.div>

      <h3 className="display mt-6 text-4xl font-bold text-gold-grad">{title}</h3>

      <div className="mt-4 display text-6xl font-extrabold text-cream">
        {score}
        <span className="text-cream/30">/{total}</span>
      </div>
      <p className="mt-1 font-mono text-sm text-gold-300">{pct}% chính xác</p>

      <p className="mt-5 mx-auto max-w-md text-cream/55 leading-relaxed">{msg}</p>

      <button
        onClick={onRestart}
        className="group mx-auto mt-8 flex items-center justify-center gap-2 rounded-xl border border-gold-400/40 px-6 py-3 font-semibold text-gold-200 transition hover:bg-gold-500/10"
      >
        <RotateCcw className="h-4 w-4 transition group-hover:-rotate-180" />
        Làm lại
      </button>
    </motion.div>
  );
}
