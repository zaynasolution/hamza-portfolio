import React, { useEffect, useRef } from 'react';

export default function DataStream({ speedFactor = 1.35 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.parentElement.clientWidth;
    let h = 300;
    canvas.width = w;
    canvas.height = h;

    const particles = [];
    const count = 900;
    for (let i = 0; i < count; i++) {
      const y0 = Math.random() * h;
      particles.push({
        x: -Math.random() * w * 0.5,
        y0,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() < 0.7 ? 1 : 1.5,
        hue: 200 + Math.random() * 60,
        sat: 80 + Math.random() * 20,
        alpha: 0.45 + Math.random() * 0.25,
      });
    }

    function ease(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function render() {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const nx = Math.min(Math.max(p.x / w, 0), 1);
        const conv = ease(nx);
        const amp = (1 - conv) * 25;
        const freq = 0.015 + (1 - conv) * 0.02;
        const curve = Math.sin(p.phase + p.x * freq) * amp;
        const y = p.y0 + curve;
        const speed = (0.8 + conv * 1.2) * speedFactor;
        p.x += speed;
        if (p.x > w + 40) {
          p.x = -60;
          p.phase = Math.random() * Math.PI * 2;
        }

        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, 60%, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (i % 6 === 0) {
          const j = (i + 3) % particles.length;
          const p2 = particles[j];
          const midx = (p.x + p2.x) * 0.5;
          const midy = (y + (p2.y0 + Math.sin(p2.phase + p2.x * freq) * amp)) * 0.5 + (1 - conv) * 10;
          ctx.strokeStyle = `hsla(${p.hue}, ${p.sat}%, 60%, ${0.12 * (1 - conv)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, y);
          ctx.quadraticCurveTo(midx, midy, p2.x, p2.y0);
          ctx.stroke();
        }
      }

      const grad = ctx.createLinearGradient(w * 0.6, h * 0.55, w, h * 0.55);
      grad.addColorStop(0, 'rgba(0,255,255,0.0)');
      grad.addColorStop(0.3, 'rgba(0,255,255,0.25)');
      grad.addColorStop(0.6, 'rgba(0,180,255,0.35)');
      grad.addColorStop(1, 'rgba(0,140,255,0.45)');
      ctx.fillStyle = grad;
      ctx.fillRect(w * 0.6, h * 0.48, w * 0.4, 6);
      ctx.fillRect(w * 0.6, h * 0.52, w * 0.4, 6);

      requestAnimationFrame(render);
    }

    let raf = requestAnimationFrame(render);

    function onResize() {
      w = canvas.parentElement.clientWidth;
      h = 300;
      canvas.width = w;
      canvas.height = h;
    }
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, [speedFactor]);

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-transparent pointer-events-none">
          <canvas ref={canvasRef} className="block w-full h-[300px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[textGlow_2.2s_ease-in-out_infinite_alternate]">
              FROM DATA TO CHARTS
            </h2>
            <div className="flex justify-center gap-10 flex-wrap">
              <h3 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 animate-[textGlow_3.6s_ease-in-out_infinite_alternate]" style={{ animationDelay: '0.4s' }}>
                CLEAN DATA
              </h3>
              <h3 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 animate-[textGlow_4.2s_ease-in-out_infinite_alternate]" style={{ animationDelay: '0.8s' }}>
                CALCULATION
              </h3>
              <h3 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 animate-[textGlow_5s_ease-in-out_infinite_alternate]" style={{ animationDelay: '1.2s' }}>
                CHARTS
              </h3>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes textGlow {
            0% { filter: drop-shadow(0 0 2px rgba(0,200,255,0.15)); }
            100% { filter: drop-shadow(0 0 16px rgba(0,200,255,0.55)); }
          }
          @keyframes chipGlow {
            0%, 100% { box-shadow: 0 0 0px rgba(0,200,255,0.0); }
            50% { box-shadow: 0 0 12px rgba(0,200,255,0.25); }
          }
        `}</style>
        
      </div>
    </section>
  );
}
