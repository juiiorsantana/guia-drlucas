import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { goToCheckout } from './constants';

// Detecção síncrona — mesma estratégia da Hero original para preservar o LCP.
const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;

export const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-10 pb-24 bg-transparent overflow-hidden scroll-section">
            {/* Background blur — desktop only (perf mobile) */}
            <div className="hidden md:block absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full blur-[120px] opacity-60 animate-float" />
            <div className="hidden md:block absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 text-center lg:text-left">

                        {/* Badge animado */}
                        <motion.div
                            className="mx-auto lg:mx-0 flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-cyan-200/60 shadow-[inset_0_-8px_10px_#8fdfff1f] w-fit"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                        >
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-slate-600 tracking-wide">
                                Formato Digital • Acesso Imediato
                            </span>
                        </motion.div>

                        {/* LCP — h1 visível no primeiro paint, sem opacity:0 */}
                        <h1 className="text-[2.25rem] md:text-[2.7rem] lg:text-[3.375rem] font-bold leading-[1.1] tracking-tight text-slate-900">
                            Seu corpo mudou depois da bariátrica —{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">
                                mas ninguém te deu o manual de instruções.
                            </span>
                        </h1>

                        <motion.h2
                            className="text-lg md:text-xl font-medium text-slate-700 font-sans"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                        >
                            O Guia Prático de Dietoterapia é o protocolo médico que faltava para você parar de adivinhar e começar a nutrir seu corpo de verdade.
                        </motion.h2>

                        {/* CTA */}
                        <motion.div
                            className="mt-4 max-w-xl mx-auto lg:mx-0 w-full"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                className="relative group w-full rounded-xl shadow-[0_4px_24px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_8px_32px_-4px_rgba(6,182,212,0.6)] transition-shadow duration-300 overflow-hidden"
                                onClick={goToCheckout}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 animate-gradient bg-[length:200%_auto]" />
                                {/* Shine — desktop only */}
                                <motion.div
                                    className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 skew-x-[-20deg]"
                                    initial={{ x: '-150%' }}
                                    whileHover={{ x: '350%', transition: { repeat: Infinity, duration: 1.5, ease: 'linear' } }}
                                />
                                <div className="relative px-6 py-4 flex items-center justify-center gap-2 text-white font-bold tracking-wide">
                                    <span>QUERO MEU GUIA AGORA</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </motion.button>
                            <p className="text-sm font-bold text-slate-700 text-center mt-4">
                                de <span className="line-through text-slate-400">R$ 97</span> por apenas <span className="text-primary">R$ 37</span> no 1º Lote
                            </p>
                        </motion.div>
                    </div>

                    {/* Imagem — Dr. Lucas */}
                    <motion.div
                        className="lg:col-span-12 xl:col-span-5 relative mt-12 lg:mt-0"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-soft-xl border border-white/20">
                            <div className="bg-gradient-to-b from-slate-800 to-slate-900 h-[450px] lg:h-[600px] w-full relative overflow-hidden group">
                                <img
                                    src="/images/hero-guia-pratico.avif"
                                    alt="Dr. Lucas Nemes — Médico Nutrólogo especialista em pós-bariátrica"
                                    width={600}
                                    height={600}
                                    loading={isDesktop ? 'eager' : 'lazy'}
                                    fetchPriority={isDesktop ? 'high' : 'auto'}
                                    decoding="async"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
