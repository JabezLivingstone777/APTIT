import React, { memo } from "react";
import { Link } from "react-router-dom";
import Waves from "./ui/Waves";
import TextType from "./TextType";
import "./ui/AnimatedButton.css";

const HeroSection = memo(() => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-slate-950"
    >
      <Waves
        lineColor="#01518B"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={30}
        yGap={60}
      />

      {/* 🔹 Content */}
      <div className="relative z-10 w-full max-w-10xl mx-auto px-6 sm:px-10 lg:px-20 py-20 text-center lg:text-left">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-7xl font-extrabold mb-10 leading-tight font-montserrat tracking-tight">
          Welcome to{" "}
          <span className="font-orbitron font-black text-[#FF8904]">
            <TextType
              text={["APT IT", "Digital Excellence", "Innovation"]}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              className="inline-block"
            />
          </span>
        </h1>

        <p className="text-white text-lg sm:text-xl font-semibold mb-6">
          <b>Architecting The Digital Change</b>
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-8xl mb-8">
          At APT IT , we leverage the latest technology to
          propel your business forward to make it scalable, secure, and
          future-ready. Powered by engineers with a problem-solving mindset, we
          deliver outcomes that go beyond expectations.
        </p>

        <Link
          to="/about"
          className="uiverse-button mt-8"
          style={{ "--button-color": "#FF8904" }}
        >
          Read More
        </Link>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

