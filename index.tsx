import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Initialize Lenis Smooth Scroll
function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Mobile devices have native smooth scroll that is fast and battery-efficient.
    // Lenis on mobile adds a continuous RAF loop that causes forced reflow and
    // increases INP. Only enable on non-touch (desktop) devices.
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (isTouchDevice) {
      // On mobile: let native scroll handle everything
      return;
    }

    // Dynamic import so Lenis doesn't block initial JS parse on mobile
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
      });

      let rafId: number;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    });
  }, []);

  return <>{children}</>;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SmoothScrollProvider>
      <App />
    </SmoothScrollProvider>
  </React.StrictMode>
);
