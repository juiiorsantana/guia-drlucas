import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import NovaOferta from './NovaOferta';
import './index.css';

// Initialize Lenis Smooth Scroll (desktop only — mesma estratégia do index.tsx)
function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

        if (isTouchDevice) {
            return;
        }

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
    throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <SmoothScrollProvider>
            <NovaOferta />
        </SmoothScrollProvider>
    </React.StrictMode>
);
