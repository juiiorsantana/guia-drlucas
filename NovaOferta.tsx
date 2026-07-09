import React, { Suspense, lazy } from 'react';
import { HeroSection } from './components/nova-oferta/HeroSection';
import { GridBackground } from './components/ui/GridBackground';

// Above-the-fold: carregado imediatamente
import { LeadSection } from './components/nova-oferta/LeadSection';

// Below-the-fold: lazy loaded para reduzir bundle inicial
const StorySection    = lazy(() => import('./components/nova-oferta/StorySection').then(m => ({ default: m.StorySection })));
const PitchSection    = lazy(() => import('./components/nova-oferta/PitchSection').then(m => ({ default: m.PitchSection })));
const EvidenceSection = lazy(() => import('./components/nova-oferta/EvidenceSection').then(m => ({ default: m.EvidenceSection })));
const OfferSection    = lazy(() => import('./components/nova-oferta/OfferSection').then(m => ({ default: m.OfferSection })));
const CloseSection    = lazy(() => import('./components/nova-oferta/CloseSection').then(m => ({ default: m.CloseSection })));
const FAQSection      = lazy(() => import('./components/nova-oferta/FAQSection').then(m => ({ default: m.FAQSection })));

// Skeleton simples para Suspense fallback
const SectionSkeleton = () => (
    <div className="w-full py-20 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
);

const NovaOferta: React.FC = () => {
    return (
        <div className="min-h-screen font-sans selection:bg-primary selection:text-white relative">
            <GridBackground />
            <div className="relative z-10 bg-transparent">

                {/* Above the fold — carregado imediatamente */}
                <HeroSection />
                <LeadSection />

                {/* Below the fold — lazy loaded */}
                <Suspense fallback={<SectionSkeleton />}>
                    <StorySection />
                </Suspense>
                <Suspense fallback={<SectionSkeleton />}>
                    <PitchSection />
                </Suspense>
                <Suspense fallback={<SectionSkeleton />}>
                    <EvidenceSection />
                </Suspense>
                <Suspense fallback={<SectionSkeleton />}>
                    <OfferSection />
                </Suspense>
                <Suspense fallback={<SectionSkeleton />}>
                    <CloseSection />
                </Suspense>
                <Suspense fallback={<SectionSkeleton />}>
                    <FAQSection />
                </Suspense>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
                    <div className="container mx-auto px-4 text-center">
                        <p className="font-mono text-xs text-slate-500 mb-4 tracking-widest uppercase">
                            DR LUCAS NEMES - CRM 8060 - RQE 79890
                        </p>
                        <div className="font-display font-bold text-2xl mb-8 text-white">
                            GUIA PRÁTICO DE DIETOTERAPIA © 2026
                        </div>
                        <div className="flex justify-center gap-6 text-sm font-medium text-slate-400">
                            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default NovaOferta;
