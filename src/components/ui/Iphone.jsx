import React, { memo } from "react";
import { cn } from "../../lib/utils";

export const Iphone = memo(({
  src,
  videoSrc,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-[570px] w-[280px] rounded-[3rem] border-[7px] border-slate-800 bg-slate-800 shadow-2xl overflow-visible",
        className
      )}
      style={style}
    >
      {/* Power Button */}
      <div className="absolute -right-[9px] top-32 h-12 w-[2px] rounded-l-sm bg-slate-700/50"></div>
      {/* Volume Buttons */}
      <div className="absolute -left-[9px] top-24 h-6 w-[2px] rounded-r-sm bg-slate-700/50"></div>
      <div className="absolute -left-[9px] top-36 h-10 w-[2px] rounded-r-sm bg-slate-700/50"></div>
      <div className="absolute -left-[9px] top-52 h-10 w-[2px] rounded-r-sm bg-slate-700/50"></div>

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black ring-1 ring-white/10">
        {/* Content */}
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover opacity-0 transition-opacity duration-700"
            onCanPlayThrough={(e) => e.target.classList.remove('opacity-0')}
          />
        ) : src ? (
          <img
            src={src}
            alt="iPhone Screen"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>
    </div>
  );
});

export default Iphone;
