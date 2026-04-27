import React from 'react';
import { Hero } from './components/Hero';
import { Agitation } from './components/Agitation';
import { TransitionCard } from './components/TransitionCard';
import { SocialProof } from './components/SocialProof';
import { TargetAudience } from './components/TargetAudience';

import MethodDifferential from './components/MethodDifferential';
import { Instructor } from './components/Instructor';
import { FinalWarning } from './components/FinalWarning';
import GuideProgram from './components/GuideProgram';
import { WhatsIncluded } from './components/WhatsIncluded';


import WhyCheap from './components/WhyCheap';
import { GridBackground } from './components/ui/GridBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white relative">
      <GridBackground />
      <div className="relative z-10 bg-transparent">


        <Hero />
        <Agitation />
        <TransitionCard />
        <TargetAudience />
        <SocialProof />
        <MethodDifferential />

        <GuideProgram />
        <WhatsIncluded />
        <WhyCheap />
        <Instructor />
        <FinalWarning />

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center">
            <p className="font-mono text-xs text-slate-500 mb-4 tracking-widest uppercase">
              Protocolo Médico Registrado — CRM/SP 123.456
            </p>
            <div className="font-display font-bold text-2xl mb-8 text-white">
              MÉTODO VIDA PLENA © 2024
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

export default App;
