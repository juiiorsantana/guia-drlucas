import React from 'react';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export const Hero = () => {
    return (
        <section className="relative pt-10 pb-24 bg-transparent overflow-hidden scroll-section">
            {/* Fluid Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full blur-[120px] opacity-60 animate-float"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <motion.div
                        className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.12 }}
                    >

                        {/* Date / Event Info */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 font-medium"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>Acesso Imediato | Formato Digital</span>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            className="group relative mx-auto lg:mx-0 flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] bg-white/80 backdrop-blur-sm w-fit"
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <span
                                className={cn(
                                    "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-primary/50 via-cyan-400/50 to-primary/50 bg-[length:300%_100%] p-[1px]",
                                )}
                                style={{
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "destination-out",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    maskComposite: "subtract",
                                    WebkitClipPath: "padding-box",
                                }}
                            />
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2 relative z-10"></span>
                            <span className="text-sm font-medium text-slate-600 tracking-wide relative z-10">
                                Material Exclusivo — Receitas Funcionais Pós-Bariátrica
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-[2.25rem] md:text-[2.7rem] lg:text-[3.375rem] font-bold leading-[1.1] tracking-tight text-slate-900"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Pare de adivinhar o que comer no pós-bariátrico,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">use o guia prático correto!</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.h2
                            className="text-lg md:text-xl font-medium text-slate-700"
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Aprenda exatamente o que comer, como suplementar e como evitar deficiências que causam anemia, queda de cabelo e cansaço através de um guia prático completo focado em receitas funcionais.
                        </motion.h2>

                        {/* Offer Box (Price + Scarcity) */}
                        <motion.div
                            className="flex flex-col gap-4 mt-6 bg-white/80 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-xl mx-auto lg:mx-0 w-full"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.98 },
                                visible: { opacity: 1, y: 0, scale: 1 }
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
                                className="relative group w-full rounded-xl shadow-[0_4px_24px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_8px_32px_-4px_rgba(6,182,212,0.6)] transition-all duration-300 overflow-hidden"
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

                                {/* Content */}
                                <div className="relative px-6 py-4 flex items-center justify-center gap-2 text-white font-bold tracking-wide">
                                    <span>QUERO GARANTIR MINHA VAGA</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </motion.button>

                            {/* Scarcity Bar */}
                            <div className="space-y-2 w-full">
                                <div className="flex justify-between text-xs font-semibold text-slate-600 uppercase tracking-wide">
                                    <span className="flex items-center gap-1.5"><TrendingUp size={14} className="text-cyan-600" /> 37% Vendido</span>
                                    <span className="text-cyan-600">Restam Poucas Vagas</span>
                                </div>
                                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative"
                                        initial={{ width: 0 }}
                                        animate={{ width: "37%" }}
                                        transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    >
                                        <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/50 shadow-[0_0_10px_white]"></div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-center w-full">
                                <span className="text-sm font-bold text-slate-700">de R$ 97 por apenas R$ 37 no primeiro Lote</span>
                            </div>
                        </motion.div>

                    </motion.div>

                    <motion.div
                        className="lg:col-span-12 xl:col-span-5 relative mt-12 lg:mt-0"
                        initial={{ opacity: 0, x: 60, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-soft-xl border border-white/20">
                            {/* Replaced Brutalist Image Box with Fluid Rounded Image Container */}
                            <div className="bg-gradient-to-b from-slate-800 to-slate-900 h-[450px] lg:h-[600px] w-full flex items-end justify-center text-white relative overflow-hidden group">
                                <img
                                    src="/images/dr-lucas-hero.jpg"
                                    alt="Dr. Lucas Nemes"
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                        {/* Decorative floating elements */}
                        <motion.div
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] lg:w-auto lg:translate-x-0 lg:-left-8 lg:-bottom-8 z-20"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* iOS Notification Style Card */}
                            <div className="bg-white/70 backdrop-blur-xl saturate-150 border border-white/40 p-4 rounded-3xl shadow-xl w-full lg:w-[260px] animate-float">
                                <div className="flex items-center justify-between mb-2 opacity-60">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-sm">
                                            <Calendar size={10} className="text-white" />
                                        </div>
                                        <span className="text-[10px] font-semibold text-slate-800 uppercase tracking-wide">Método Vida Plena</span>
                                    </div>
                                    <span className="text-[10px] text-slate-600">Agora</span>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900 text-sm mb-0.5">Resultado Confirmado</h4>
                                        <p className="text-sm text-slate-600 leading-snug">
                                            100% de controle metabólico alcançado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
