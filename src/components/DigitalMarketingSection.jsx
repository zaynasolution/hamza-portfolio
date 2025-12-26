import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TrendingUp, BarChart2, Activity, PieChart, Palette, MousePointer } from 'lucide-react';
import AuroraBackground from './AuroraBackground';

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ to = 100, duration = 1500, suffix = '', format = (n) => Math.round(n) }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let from = 0;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      const v = from + (to - from) * eased;
      setVal(v);
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-white">
      {format(val)}
      {suffix}
    </div>
  );
}

function Sparkline({ color = '#22D3EE' }) {
  const w = 100;
  const h = 30;
  const pts = [5, 10, 7, 12, 9, 14, 16, 13, 18, 20, 17, 22, 24, 21, 26, 28];
  const step = w / (pts.length - 1);
  let d = `M0 ${h} L0 ${h - pts[0]}`;
  for (let i = 1; i < pts.length; i++) {
    d += ` L${i * step} ${h - pts[i]}`;
  }
  const stroke = color;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L${w} ${h} L0 ${h} Z`} fill="url(#sparkFill)" />
      <path d={d} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function DigitalMarketingSection() {
  const items = useMemo(
    () => [
      {
        title: 'Content Strategy',
        icon: <Palette className="w-6 h-6 text-pink-400" />,
        teaser: 'Video shorts, carousels, long-form',
        insights: ['Avg. watch time +42%', 'Hook rate 3.1s', 'Retention +18%'],
      },
      {
        title: 'Audience Targeting',
        icon: <MousePointer className="w-6 h-6 text-cyan-400" />,
        teaser: 'Lookalikes, intent signals',
        insights: ['CTR +28%', 'Cost per click -19%', 'Qualified traffic +33%'],
      },
      {
        title: 'Analytics & Reporting',
        icon: <PieChart className="w-6 h-6 text-purple-400" />,
        teaser: 'Cohorts, funnels, attribution',
        insights: ['Conversion +12%', 'Churn -9%', 'LTV +16%'],
      },
    ],
    []
  );

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-x-0 -top-16 h-16 pointer-events-none">
        <AuroraBackground />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Data-Driven Digital Marketing
            </span>
          </h2>
          <p className="text-gray-400 mt-2 font-sans">Marketing Powered by Data</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="mb-6 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                <Palette className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-pink-300 bg-pink-900/20 px-2 py-1 rounded">CREATIVE</div>
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Creative Meets Analytics</h3>
            <p className="text-gray-400 mt-2">
              Content that engages, guided by performance signals. Thumbnails, hooks, captions, and CTAs tuned with data.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    {it.icon}
                    <div className="text-sm text-white font-medium">{it.title}</div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">{it.teaser}</div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-center gap-1 rounded-xl">
                    {it.insights.map((s) => (
                      <div key={s} className="text-xs text-cyan-300">{s}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 relative overflow-hidden">
            <div className="mb-6 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-blue-300 bg-blue-900/20 px-2 py-1 rounded">ANALYTICS</div>
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Marketing Performance Dashboard</h3>
            <p className="text-gray-400 mt-2">Key metrics and results, updated with real-time analytics pipelines.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400">CTR</div>
                <Counter to={4.8} duration={1400} suffix="%" format={(n) => n.toFixed(1)} />
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-400" /> +28% WoW
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400">Conversion Rate</div>
                <Counter to={3.2} duration={1600} suffix="%" format={(n) => n.toFixed(1)} />
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-green-400" /> +12% MoM
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400">CPA</div>
                <Counter to={-19} duration={1500} suffix="% ↓" format={(n) => Math.round(n)} />
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-400" /> Efficiency Gain
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400">ROI</div>
                <Counter to={245} duration={1700} suffix="% YTD" format={(n) => Math.round(n)} />
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-400" /> Portfolio Growth
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400">CAC</div>
                <Counter to={48} duration={1500} suffix=" USD" format={(n) => Math.round(n)} />
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-400" /> -14% QoQ
                </div>
                <div className="mt-3 h-10">
                  <Sparkline color="#22D3EE" />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400">Retention</div>
                <Counter to={68} duration={1600} suffix="%" format={(n) => Math.round(n)} />
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-400" /> +9% QoQ
                </div>
                <div className="mt-3 h-10">
                  <Sparkline color="#a855f7" />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400">LTV Trend</div>
                <div className="text-lg text-white font-semibold">Upward Momentum</div>
                <div className="mt-3 h-10">
                  <Sparkline color="#60a5fa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
