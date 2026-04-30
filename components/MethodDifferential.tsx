"use client";

import React from "react";
import { Activity, Brain, Heart } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { motion } from "motion/react";

export default function MethodDifferential() {
    return (
        <section className="bg-medical-slate py-20 relative overflow-hidden scroll-section">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 px-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white max-w-4xl mx-auto leading-tight">
                        O Guia de Dietoterapia entrega nutrição de verdade onde dietas comuns falham.
                    </h2>
                </motion.div>

                {/* Comparison Row */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center mb-20 max-w-5xl mx-auto">
                    {/* Problem Card */}
                    <motion.div
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex items-center gap-2 mb-2 relative z-10">
                            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded-full">Problema</span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">
                            Receitas Genéricas
                        </h3>
                        <p className="text-gray-400 mb-8 relative z-10 text-sm">
                            A maioria foca apenas em pratos de baixas calorias, ignorando totalmente a alta necessidade de micronutrientes de um paciente bariátrico.
                        </p>

                        <motion.ul
                            className="space-y-3 relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
                        >
                            {[
                                "Receitas pobres em micronutrientes",
                                "Ingredientes difíceis de encontrar",
                                "Refeições sem densidade nutritiva",
                                "Ignora a baixa absorção pós-bariátrica",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-3 text-gray-300"
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0 text-xs">
                                        ❌
                                    </div>
                                    <span className="font-medium text-sm">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* VS Divider */}
                    <motion.div
                        className="flex md:flex-col items-center justify-center gap-2 py-4 md:py-0"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="h-px w-12 md:w-px md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-primary/50 to-primary" />
                        <div className="py-1.5 px-3 text-primary font-bold text-sm uppercase tracking-widest bg-medical-slate border border-primary/20 rounded-lg shadow-[0_0_15px_rgba(4,163,203,0.3)]">
                            VS
                        </div>
                        <div className="h-px w-12 md:w-px md:h-12 bg-gradient-to-l md:bg-gradient-to-t from-transparent via-primary/50 to-primary" />
                    </motion.div>

                    {/* Solution Card */}
                    <motion.div
                        className="bg-white/5 border border-primary/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex items-center gap-2 mb-2 relative z-10">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-full">Solução</span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">
                            Guia de Dietoterapia
                        </h3>
                        <p className="text-gray-400 mb-8 relative z-10 text-sm">
                            Protocolos nutricionais desenvolvidos especificamente para a fisiologia pós-bariátrica, garantindo absorção real dos nutrientes essenciais.
                        </p>

                        <motion.ul
                            className="space-y-3 relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.08, delayChildren: 0.4 }}
                        >
                            {[
                                "Receitas ricas em micronutrientes",
                                "Ingredientes acessíveis e do dia a dia",
                                "Alta densidade nutritiva por porção",
                                "Formulado para absorção pós-bariátrica",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-3 text-gray-300"
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs">
                                        ✅
                                    </div>
                                    <span className="font-medium text-sm">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>

                {/* 3 Pilares */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
                        O Guia de Dietoterapia foca em <span className="text-primary">3 Pilares</span>
                    </h3>
                </motion.div>

                <motion.ul
                    className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-4 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                    <GridItem
                        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                        icon={<Activity className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Nutrologia baseada em evidências"
                        description="Suplementação e alimentação ajustadas para sua nova fisiologia pós-bariátrica."
                    />

                    <GridItem
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]"
                        icon={<Brain className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Foco em absorção"
                        description="Não é sobre comer menos, é sobre comer melhor e absorver melhor os nutrientes que seu corpo precisa."
                    />

                    <GridItem
                        area="md:[grid-area:2/1/3/13] xl:[grid-area:1/9/2/13]"
                        icon={<Heart className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Protocolos funcionais"
                        description="Guia prático com receitas saborosas e sem complicação."
                    />
                </motion.ul>
            </div>
        </section>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <motion.li
            className={`min-h-[14rem] list-none ${area}`}
            variants={{
                hidden: { opacity: 0, scale: 0.85, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-white/5 backdrop-blur-sm">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border border-white/10 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-soft-xl bg-[#0f172a]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-white/20 p-2 bg-white/5">
                            <div className="text-primary">
                                {icon}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-gray-400 md:text-base/[1.375rem]">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
