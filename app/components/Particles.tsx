"use client";

export default function Particles() {
  const particles = Array.from({ length: 35 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${5 + Math.random() * 8}s`,
    size: `${2 + Math.random() * 4}px`,
    opacity: 0.4 + Math.random() * 0.6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
