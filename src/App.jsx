import { useState } from "react";
import TopNav from "./components/TopNav.jsx";
import Hero from "./components/Hero.jsx";
import Part1 from "./components/Part1.jsx";
import Part2 from "./components/Part2.jsx";
import Part3 from "./components/Part3.jsx";
import AmbientThesis from "./components/AmbientThesis.jsx";
import KoreaMap from "./components/KoreaMap.jsx";
import PowerLoop from "./components/PowerLoop.jsx";
import Timeline from "./components/Timeline.jsx";
import Summary from "./components/Summary.jsx";
import Quiz from "./components/Quiz.jsx";
import AIAppendix from "./components/AIAppendix.jsx";
import QRSection from "./components/QRSection.jsx";
import Footer from "./components/Footer.jsx";
import Chatbot from "./components/Chatbot.jsx";
import ToolsPill from "./components/ToolsPill.jsx";

const MARQUEE = [
  "Hữu tiền vô tội",
  "Vô tiền hữu tội",
  "Chaebol · 60–70% GDP",
  "Korea Discount",
  "Tội phạm → Đặc xá → Đầu tư",
  "Tư bản độc quyền nhà nước",
];

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="grain min-h-screen text-cream">
      <TopNav onAskAI={() => setChatOpen(true)} />

      <main>
        <Hero onStart={() => scrollTo("ly-thuyet")} />
        <Part1 />
        <Marquee />
        <Part2 />
        <Part3 />
        <AmbientThesis />
        <KoreaMap />
        <PowerLoop />
        <Timeline />
        <Summary />
        <Quiz />
        <AIAppendix />
        <QRSection />
      </main>

      <Footer />
      <Chatbot open={chatOpen} setOpen={setChatOpen} />
      <ToolsPill />
    </div>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative overflow-hidden border-y border-cream/5 bg-ink-900/60 py-5">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="display text-lg italic text-cream/35">{t}</span>
            <span className="text-gold-500/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
