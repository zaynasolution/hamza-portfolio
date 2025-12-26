import React, { useEffect, useMemo, useRef, useState } from 'react';

type StarsBackgroundProps = {
  starColor?: string;
  layerCounts?: [number, number, number];
  className?: string;
};

function useViewport() {
  const [size, setSize] = useState<{ w: number; h: number }>({
    w: typeof window !== 'undefined' ? window.innerWidth : 1920,
    h: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });
  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setSize({ w: window.innerWidth, h: window.innerHeight }),
      );
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);
  return size;
}

function makeBoxShadow(count: number, w: number, h: number, color: string) {
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * w);
    const y = Math.floor(Math.random() * h);
    const s = Math.random() < 0.5 ? 0 : 1;
    parts.push(`${x}px ${y}px 0 ${s}px ${color}`);
  }
  return parts.join(', ');
}

function StarLayer({
  count,
  color,
  translate,
}: {
  count: number;
  color: string;
  translate: string;
}) {
  const { w, h } = useViewport();
  const boxShadow = useMemo(() => makeBoxShadow(count, w, h, color), [count, w, h, color]);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        backgroundColor: color,
        boxShadow,
        transform: translate,
        willChange: 'transform',
        pointerEvents: 'none',
      }}
    />
  );
}

export default function StarsBackground({
  starColor = 'rgba(255,255,255,0.5)',
  layerCounts = [600, 200, 100],
  className = '',
}: StarsBackgroundProps) {
  const l1 = useRef<HTMLDivElement | null>(null);
  const l2 = useRef<HTMLDivElement | null>(null);
  const l3 = useRef<HTMLDivElement | null>(null);
  const [t1, setT1] = useState('translate3d(0,0,0)');
  const [t2, setT2] = useState('translate3d(0,0,0)');
  const [t3, setT3] = useState('translate3d(0,0,0)');

  useEffect(() => {
    let raf = 0;
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mx = nx * 40;
      my = ny * 40;
      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };
    const tick = () => {
      tx += (mx - tx) * 0.08;
      ty += (my - ty) * 0.08;
      setT1(`translate3d(${tx * 0.2}px, ${ty * 0.2}px, 0)`);
      setT2(`translate3d(${tx * 0.4}px, ${ty * 0.4}px, 0)`);
      setT3(`translate3d(${tx * 0.7}px, ${ty * 0.7}px, 0)`);
      raf = 0;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`fixed inset-0 bg-transparent pointer-events-none ${className}`}>
      <div ref={l1} className="absolute inset-0">
        <StarLayer count={layerCounts[0]} color={starColor} translate={t1} />
      </div>
      <div ref={l2} className="absolute inset-0">
        <StarLayer count={layerCounts[1]} color={starColor} translate={t2} />
      </div>
      <div ref={l3} className="absolute inset-0">
        <StarLayer count={layerCounts[2]} color={starColor} translate={t3} />
      </div>
    </div>
  );
}
