"use client";

export default function Dove() {
  return (
    <div className="absolute top-16 right-[15%] pointer-events-none animate-float opacity-40 hidden md:block"
      style={{ animationDuration: "5s" }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Тіло */}
        <ellipse cx="50" cy="55" rx="14" ry="10" fill="white" opacity="0.9" />

        {/* Голова */}
        <circle cx="62" cy="48" r="6" fill="white" opacity="0.9" />

        {/* Дзьоб */}
        <polygon points="68,48 74,47 68,49" fill="#e8c170" opacity="0.8" />

        {/* Око */}
        <circle cx="64" cy="47" r="1" fill="#333" />

        {/* Ліве крило (верхнє) */}
        <path
          d="M 45 50 Q 25 25 15 20 Q 20 30 30 42 Q 35 48 45 50"
          fill="white"
          opacity="0.85"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 45 50; -8 45 50; 0 45 50"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Праве крило (верхнє) */}
        <path
          d="M 55 50 Q 75 25 85 20 Q 80 30 70 42 Q 65 48 55 50"
          fill="white"
          opacity="0.85"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 55 50; 8 55 50; 0 55 50"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Хвіст */}
        <path
          d="M 38 58 Q 28 65 22 72 Q 30 68 36 60"
          fill="white"
          opacity="0.7"
        />
        <path
          d="M 36 56 Q 24 60 18 68 Q 28 64 36 58"
          fill="white"
          opacity="0.6"
        />

        {/* Світіння навколо */}
        <circle cx="50" cy="48" r="30" fill="url(#doveGlow)" opacity="0.3">
          <animate
            attributeName="opacity"
            values="0.2;0.4;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <defs>
          <radialGradient id="doveGlow">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
