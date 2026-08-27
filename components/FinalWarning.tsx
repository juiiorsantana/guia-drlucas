import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, X, Check, AlertTriangle } from 'lucide-react';

export const FinalWarning = () => {
    return (
        <section className="relative py-16 bg-slate-900 overflow-hidden scroll-section">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        variants={{
                            hidden: { y: 30 },
                            visible: { y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold uppercase tracking-wider mb-6">
                            <AlertTriangle size={16} />
                            <span>Último Aviso</span>
                        </div>
                    </motion.div>

                    {/* Two Columns - Choices */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-6 mb-12"
                        variants={{
                            hidden: {},
                            visible: {}
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Left Column - Wrong Choices */}
                        <motion.div
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8"
                            variants={{
                                hidden: { x: -30 },
                                visible: { x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <h3 className="text-xl font-bold text-slate-300 mb-6">
                                Você pode continuar:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Tentando sozinha",
                                    "Gastando com suplementos errados",
                                    "Lidando com exames alterados"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-4 text-lg text-slate-400"
                                        variants={{
                                            hidden: { x: -20 },
                                            visible: { x: 0 }
                                        }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                                            <X size={18} strokeWidth={3} />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right Column - Right Choices */}
                        <motion.div
                            className="bg-gradient-to-br from-cyan-950/50 to-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden"
                            variants={{
                                hidden: { x: 30 },
                                visible: { x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px]"></div>

                            <h3 className="text-xl font-bold text-white mb-6 relative z-10">
                                Ou pode:
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Ter clareza total",
                                    "Aplicar um protocolo médico correto",
                                    "Cuidar da sua saúde no longo prazo"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-4 text-lg text-white"
                                        variants={{
                                            hidden: { x: 20 },
                                            visible: { x: 0 }
                                        }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                            <Check size={18} strokeWidth={3} />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Condição de lançamento */}
                    <motion.div
                        className="text-center mb-8"
                        variants={{
                            hidden: { y: 20 },
                            visible: { y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
                            <AlertTriangle size={18} className="text-amber-400" />
                            <span className="text-amber-300 font-bold text-sm uppercase tracking-wider">
                                Condição especial de lançamento: de R$ 97 por R$ 37
                            </span>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        className="text-center"
                        variants={{
                            hidden: { y: 30, scale: 0.95 },
                            visible: { y: 0, scale: 1 }
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.button
                            whileHover="hover"
                            whileTap="tap"
                            variants={{
                                hover: { scale: 1.05 },
                                tap: { scale: 0.95 }
                            }}
                            className="relative group rounded-full shadow-[0_4px_30px_-4px_rgba(6,182,212,0.6)] hover:shadow-[0_8px_40px_-4px_rgba(6,182,212,0.7)] transition-all duration-300 overflow-hidden"
                            onClick={() => window.location.href = 'https://pay.hotmart.com/N106123722W'}
                        >
                            {/* Liquid Background */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 animate-gradient bg-[length:200%_auto]"
                                style={{ "--bg-size": "200%" } as React.CSSProperties}
                            />

                            {/* Shine Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 skew-x-[-20deg]"
                                initial={{ x: "-150%" }}
                                variants={{
                                    hover: { x: "350%", transition: { repeat: Infinity, duration: 1.5, ease: "linear" } }
                                }}
                            />

                            {/* Glass Border */}
                            <div className="absolute inset-[1px] rounded-full bg-transparent border border-white/20" />

                            {/* Content */}
                            <div className="relative px-10 py-5 flex items-center gap-3 text-white font-bold tracking-wide text-lg">
                                <span>QUERO ACESSAR O GUIA POR R$ 37</span>
                                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalWarning;
