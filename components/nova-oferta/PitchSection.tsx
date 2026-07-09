import React from 'react';
import { UtensilsCrossed, Pill, Dna, ClipboardCheck, HeartPulse, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
    {
        icon: UtensilsCrossed,
        title: '+40 receitas funcionais',
        description: 'Ricas em micronutrientes, fáceis de fazer no dia a dia.',
    },
    {
        icon: Pill,
        title: 'Lista de suplementação',
        description: 'O que repor, quando e por quê — sem achismo.',
    },
    {
        icon: Dna,
        title: 'Formulado para absorção',
        description: 'Adaptado à sua nova fisiologia pós-bariátrica.',
    },
    {
        icon: ClipboardCheck,
        title: 'Protocolo médico validado',
        description: 'Não é achismo, é ciência aplicada na prática clínica.',
    },
    {
        icon: HeartPulse,
        title: 'Estratégias de mudança de hábito',
        description: 'Bônus incluso para consolidar sua rotina saudável.',
    },
    {
        icon: Stethoscope,
        title: 'Feito por um nutrólogo',
        description: 'CRM/MT 8060 — Especialista ABRAN/AMB.',
    },
];

export const PitchSection: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden scroll-section">
            <div className="hidden md:block absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[120px] opacity-70" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="text-lg text-primary font-semibold mb-4 uppercase tracking-wide">
                        Foi por isso que o Dr. Lucas criou
                    </p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-medical-slate mb-6">
                        O Guia Prático de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Dietoterapia Pós-Bariátrica</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-sans">
                        Um guia prático, direto e baseado em ciência, criado por quem realmente entende a fisiologia pós-bariátrica.
                    </p>
                </motion.div>

                {/* Grid de benefícios 2x3 */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.08 }}
                >
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white/80 backdrop-blur-md rounded-3xl p-7 shadow-soft hover:shadow-soft-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 group"
                                variants={{
                                    hidden: { opacity: 0, y: 24, scale: 0.96 },
                                    visible: { opacity: 1, y: 0, scale: 1 },
                                }}
                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="w-12 h-12 mb-5 bg-gradient-to-br from-primary/15 to-cyan-400/15 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-medical-slate mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
