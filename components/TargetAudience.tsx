import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const audienceItems = [
    { title: "Já operou", desc: "e está em fase de manutenção" },
    { title: "Exames alterados", desc: "Anemia, B12, ferro, cálcio, etc" },
    { title: "Sintomas", desc: "Queda de cabelo, unhas fracas ou cansaço" },
    { title: "Alimentação", desc: "Não sabe se está alimentando corretamente" },
    { title: "Nutrição", desc: "Quer prevenir problemas nutricionais futuros" },
    { title: "Confusão", desc: "Está confusa com informações contraditórias" }
];

export const TargetAudience: React.FC = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-slate-900/50 scroll-section">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"></div>

            {/* Marquee Banners - Infinite scroll with Framer Motion */}
            <div className="absolute top-20 w-full transform -rotate-3 z-0 pointer-events-none overflow-hidden">
                <div className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-4 shadow-2xl">
                    <motion.div
                        className="flex shrink-0"
                        animate={{ x: [0, -2400] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear"
                            }
                        }}
                    >
                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="text-white/20 font-display font-black text-3xl tracking-widest uppercase italic mx-12 shrink-0 whitespace-nowrap">
                                LOGO METODO
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-40 w-full transform rotate-3 z-0 pointer-events-none overflow-hidden">
                <div className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-4 shadow-2xl">
                    <motion.div
                        className="flex shrink-0"
                        animate={{ x: [-2400, 0] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear"
                            }
                        }}
                    >
                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="text-white/20 font-display font-black text-3xl tracking-widest uppercase italic mx-12 shrink-0 whitespace-nowrap">
                                LOGO METODO
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>


            <div className="container mx-auto px-4 relative z-10 pt-16">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-inner">
                        <span className="w-2 h-2 rounded-full bg-alert-orange animate-pulse"></span>
                        Diagnóstico Inicial
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">
                        Este guia é <span className="text-transparent bg-clip-text bg-gradient-to-r from-alert-orange to-red-500">para você?</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                        Se você se identifica com um ou mais pontos abaixo, este material foi desenhado especificamente para o seu momento.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
                >
                    {audienceItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* Hover Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-alert-orange/0 to-red-600/0 group-hover:from-alert-orange/50 group-hover:to-red-600/50 rounded-2xl blur transition duration-500 opacity-0 group-hover:opacity-100"></div>

                            <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300">
                                <div className="w-12 h-1 bg-gradient-to-r from-alert-orange to-red-500 mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>

                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-alert-orange transition-colors">
                                        {item.title}
                                    </h3>
                                    <Check className="text-slate-700 group-hover:text-alert-orange transition-colors" size={20} />
                                </div>

                                <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Não deixe para depois</p>
                    <ArrowRight className="mx-auto text-alert-orange animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};
