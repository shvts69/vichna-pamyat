export default function Candle({ size = "large" }: { size?: "small" | "large" }) {
  const isLarge = size === "large";
  const candleH = isLarge ? "h-32" : "h-20";
  const candleW = isLarge ? "w-8" : "w-5";
  const flameH = isLarge ? "h-10 w-5" : "h-6 w-3";
  const wickH = isLarge ? "h-4" : "h-2.5";

  return (
    <div className="flex flex-col items-center">
      {/* Дим */}
      <div className="relative h-8 w-4 mb-1">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-400/30"
          style={{ animation: "smoke 2s ease-out infinite" }}
        />
        <div
          className="absolute bottom-0 left-1/3 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-400/20"
          style={{ animation: "smoke 2.5s ease-out 0.5s infinite" }}
        />
      </div>

      {/* Полум'я */}
      <div
        className={`${flameH} relative`}
        style={{ animation: "flicker 1.5s ease-in-out infinite" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, #fff 0%, #ffcc00 30%, #ff8800 60%, #ff4400 90%, transparent 100%)",
            animation: "glow 1.5s ease-in-out infinite",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
        />
      </div>

      {/* Гніт */}
      <div className={`${wickH} w-0.5 bg-gray-800`} />

      {/* Свічка */}
      <div
        className={`${candleH} ${candleW} rounded-sm relative overflow-hidden`}
        style={{
          background: "linear-gradient(to right, #f5e6c8, #fffaf0, #f5e6c8)",
        }}
      >
        {/* Патьоки воску */}
        <div
          className="absolute top-0 left-0.5 w-1.5 h-4 rounded-b-full"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
        <div
          className="absolute top-0 right-1 w-1 h-3 rounded-b-full"
          style={{ background: "rgba(255,255,255,0.4)" }}
        />
      </div>

      {/* Підставка */}
      <div
        className={`${isLarge ? "w-12 h-2" : "w-8 h-1.5"} rounded-sm`}
        style={{ background: "linear-gradient(to right, #8B7355, #a08060, #8B7355)" }}
      />
    </div>
  );
}
