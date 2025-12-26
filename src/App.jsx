import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
import StarsBackground from './components/ui/stars-background'

// Lazy load heavy components
const FeaturedAsset = lazy(() => import('./components/FeaturedAsset'));
const Synergy = lazy(() => import('./components/Synergy'));
const Timeline = lazy(() => import('./components/Timeline'));
const Certificates = lazy(() => import('./components/Certificates'));
const Services = lazy(() => import('./components/Services'));
const TechStack = lazy(() => import('./components/TechStack'));
const DataStream = lazy(() => import('./components/DataStream'));
const DigitalMarketingSection = lazy(() => import('./components/DigitalMarketingSection'));

// Loading Fallback Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
        lenis.destroy()
    }
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <TechStack />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <div id="featured">
            <FeaturedAsset />
          </div>
          <DataStream speedFactor={1.45} />
          <div id="synergy">
            <Synergy />
          </div>
          <div id="timeline">
            <Timeline />
          </div>
          <div id="certificates">
            <Certificates />
          </div>
          <DigitalMarketingSection />
          <div id="services">
            <Services />
          </div>
        </Suspense>
      </div>
      <StarsBackground starColor="rgba(255,255,255,0.5)" layerCounts={[600, 200, 100]} className="z-0" />
    </div>
  );
}

export default App;
