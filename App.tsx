import React, { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { GridBackground } from './components/ui/GridBackground';

// Above-the-fold: carregados imediatamente
import { Agitation } from './components/Agitation';

// Below-the-fold: lazy loaded para reduzir bundle inicial
const TransitionCard    = lazy(() => import('./components/TransitionCard').then(m => ({ default: m.TransitionCard })));
const TargetAudience    = lazy(() => import('./components/TargetAudience').then(m => ({ default: m.TargetAudience })));
const SocialProof       = lazy(() => import('./components/SocialProof').then(m => ({ default: m.SocialProof })));
const MethodDifferential = lazy(() => import('./components/MethodDifferential'));
const GuideProgram      = lazy(() => import('./components/GuideProgram'));
const WhatsIncluded     = lazy(() => import('./components/WhatsIncluded').then(m => ({ default: m.WhatsIncluded })));
const WhyCheap          = lazy(() => import('./components/WhyCheap'));
const Instructor        = lazy(() => import('./components/Instructor').then(m => ({ default: m.Instructor })));
const BonusSection      = lazy(() => import('./components/BonusSection').then(m => ({ default: m.BonusSection })));
const FinalWarning      = lazy(() => import('./components/FinalWarning').then(m => ({ default: m.FinalWarning })));
const FAQSection        = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));

// Skeleton simples para Suspense fallback
const SectionSkeleton = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white relative">
      <GridBackground />
      <div className="relative z-10 bg-transparent">

        {/* Above the fold — carregado imediatamente */}
        <Hero />
        <Agitation />

        {/* Below the fold — lazy loaded, ordem alinhada à estrutura recomendada:
            diagnóstico -> o que vai aprender -> conteúdo -> bônus -> prova social ->
            autoridade -> oferta -> FAQ -> aviso legal (footer) */}
        <Suspense fallback={<SectionSkeleton />}>
          <TransitionCard />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TargetAudience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <MethodDifferential />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <GuideProgram />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <BonusSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <SocialProof />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Instructor />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <WhyCheap />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <WhatsIncluded />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FinalWarning />
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
              <a href="/termos.html" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="/privacidade.html" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
