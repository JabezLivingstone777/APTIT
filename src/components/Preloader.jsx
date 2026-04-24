import React, { useEffect, useState } from "react";
import loaderVideo from "../assets/Techeminence/Sequence 02.webm";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If the page is already loaded, we still want to show the video intro
    if (document.readyState === "complete") {
      // We don't set loading false here, we let the video or timer handle it
    }

    const handleLoad = () => {
      // Don't auto-close on load, let the video play
    };

    window.addEventListener("load", handleLoad);

    // Safety fallback timer increased to ensure video can play
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          src={loaderVideo}
          autoPlay
          muted
          playsInline
          className="w-full max-h-[200px] object-contain max-w-4xl"
          onEnded={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default Preloader;
