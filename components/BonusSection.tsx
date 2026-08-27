import React from 'react';
import { motion } from 'motion/react';
import { Gift, Check, ArrowRight } from 'lucide-react';

export const BonusSection = () => {
    return (
        <section className="relative py-16 bg-slate-900 overflow-hidden scroll-section">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ staggerChildren: 0.12 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="text-center mb-10"
                        variants={{
                            hidden: { y: 24 },
                            visible: { y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-bold uppercase tracking-widest">
                            <Gift size={16} />
                            <span>Bônus Exclusivo</span>
                        </div>
                    </motion.div>

                    {/* Card Principal */}
                    <motion.div
                        className="relative rounded-[2.5rem] overflow-hidden border border-emerald-500/20"
                        style={{
                            background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(6,78,59,0.25) 50%, rgba(15,23,42,0.95) 100%)'
                        }}
                        variants={{
                            hidden: { y: 40, scale: 0.97 },
                            visible: { y: 0, scale: 1 }
                        }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Borda brilhante superior */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                        {/* Glow interno */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10 p-10 md:p-14">
                            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

                                {/* Coluna Esquerda — Conteúdo */}
                                <div>
                                    {/* Imagem do bônus */}
                                    <motion.div
                                        className="mb-6 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-emerald-500/25 shadow-[0_0_30px_rgba(52,211,153,0.15)]"
                                        variants={{
                                            hidden: { scale: 0.85 },
                                            visible: { scale: 1 }
                                        }}
                                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    >
                                        <img
                                            src="/images/bonus.avif"
                                            alt="Bônus — Estratégias para Mudanças de Hábitos de Vida"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    <motion.h2
                                        className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3"
                                        variants={{
                                            hidden: { x: -20 },
                                            visible: { x: 0 }
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        Bônus liberado junto com o guia
                                    </motion.h2>

                                    <motion.p
                                        className="text-slate-400 leading-relaxed mb-6 text-base"
                                        variants={{
                                            hidden: { x: -20 },
                                            visible: { x: 0 }
                                        }}
                                        transition={{ duration: 0.5, delay: 0.05 }}
                                    >
                                        Conteúdo complementar criado para ajudar na adaptação da nova rotina alimentar e na construção de hábitos sustentáveis para resultados duradouros.
                                    </motion.p>

                                    {/* Selo de inclusão */}
                                    <motion.div
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/12 border border-emerald-500/25 text-emerald-300 text-sm font-semibold"
                                        variants={{
                                            hidden: { y: 12 },
                                            visible: { y: 0 }
                                        }}
                                        transition={{ duration: 0.4, delay: 0.15 }}
                                    >
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center shrink-0">
                                            <Check size={12} strokeWidth={3} className="text-emerald-400" />
                                        </div>
                                        Incluso gratuitamente nesta página
                                    </motion.div>
                                </div>

                                {/* Coluna Direita — Bloco de Valor + CTA */}
                                <div className="flex flex-col items-center md:items-start">
                                    {/* Bloco de valor */}
                                    <motion.div
                                        className="w-full rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 mb-8 text-center md:text-left"
                                        variants={{
                                            hidden: { x: 30 },
                                            visible: { x: 0 }
                                        }}
                                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    >
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">
                                            Valor do bônus
                                        </p>
                                        <p className="text-slate-500 line-through text-xl mb-1 font-medium">
                                            De: R$ 97,00
                                        </p>
                                        <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                                            <span className="text-4xl font-black text-emerald-400 tracking-tight">
                                                GRATUITO
                                            </span>
                                        </div>
                                        <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                                            Ao adquirir o guia nesta página, você recebe este bônus sem custo adicional.
                                        </p>
                                    </motion.div>

                                    {/* CTA Button */}
                                    <motion.div
                                        className="w-full"
                                        variants={{
                                            hidden: { y: 20 },
                                            visible: { y: 0 }
                                        }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <motion.button
                                            whileHover="hover"
                                            whileTap="tap"
                                            variants={{
                                                hover: { scale: 1.04 },
                                                tap: { scale: 0.96 }
                                            }}
                                            className="relative w-full group rounded-2xl shadow-[0_4px_30px_-4px_rgba(52,211,153,0.5)] hover:shadow-[0_8px_40px_-4px_rgba(52,211,153,0.65)] transition-shadow duration-300 overflow-hidden"
                                            onClick={() => window.location.href = 'https://pay.hotmart.com/N106123722W'}
                                        >
                                            {/* Fundo gradiente */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 animate-gradient bg-[length:200%_auto]" />

                                            {/* Efeito shine no hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-1/2 skew-x-[-20deg]"
                                                initial={{ x: '-150%' }}
                                                variants={{
                                                    hover: { x: '350%', transition: { repeat: Infinity, duration: 1.4, ease: 'linear' } }
                                                }}
                                            />

                                            {/* Borda interna */}
                                            <div className="absolute inset-[1px] rounded-2xl border border-white/20" />

                                            {/* Conteúdo */}
                                            <div className="relative px-8 py-4 flex items-center justify-center gap-3 text-white font-bold tracking-wide text-base">
                                                <span>Quero garantir meu acesso</span>
                                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </motion.button>
                                    </motion.div>
                                </div>

                            </div>
                        </div>

                        {/* Borda brilhante inferior */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BonusSection;
