import React, { useRef } from 'react';

const MagneticCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ "--cursor-bubble-color": "#fffde8" } as React.CSSProperties} 
      className="relative group overflow-hidden rounded-xl bg-[#a9170a] p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-transparent before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-[radial-gradient(500px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,253,232,0.3),transparent_40%)] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default MagneticCard;
