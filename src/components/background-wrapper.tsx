import React from 'react';
import StarsBackground from './ui/stars-background';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsBackground starColor="rgba(255,255,255,0.5)" layerCounts={[600, 200, 100]} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
