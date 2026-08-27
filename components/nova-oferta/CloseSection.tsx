import React from 'react';
import { ArrowRight, AlertTriangle, XCircle, CheckCircle2, Clock, TrendingDown, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { goToCheckout } from './constants';

const wrongPath = [
    'Continuar adivinhando o que comer',
    'Exames alterados sem entender por quê',
    'Queda de cabelo e cansaço constantes',
    'Frustração de ver o esforço não render',
];

const rightPath = [
    'Clareza total sobre o que comer',
    'Suplementação certa, no momento certo',
    'Saúde e energia restauradas',
    'Resultados duradouros, sem reganho',
];

const urgencyReasons = [
    { icon: Clock, text: 'Preço de lançamento pode aumentar a qualquer momento' },
    { icon: TrendingDown, text: 'Condição especial válida por tempo limitado' },
    { icon: ShieldCheck, text: 'Garantia de 7 dias — risco zero' },
    { icon: Zap, text: 'Acesso imediato — comece hoje' },
];

export const CloseSection: React.FC = () => {
    return (
        <section className="py-16 bg-medical-slate relative overflow-hidden scroll-section">
            {/* Gradiente amber/warning */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-amber-900/30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-14"
                    initial={{ y: 40 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 font-bold text-sm px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                        <AlertTriangle className="w-4 h-4" />
                        Último Aviso
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                        Existem dois caminhos a partir de agora. <span className="text-amber-400">Qual você escolhe?</span>
                    </h2>
                </motion.div>

                {/* Comparação de caminhos */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    <motion.div
                        className="bg-red-950/30 border border-red-500/20 rounded-3xl p-8"
                        variants={{ hidden: { x: -24 }, visible: { x: 0 } }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h3 className="font-display font-bold text-xl text-red-300 mb-6 flex items-center gap-2">
                            <XCircle className="w-6 h-6" /> Continuar sem orientação
                        </h3>
                        <ul className="space-y-4">
                            {wrongPath.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300 text-sm font-sans">
                                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="bg-emerald-950/30 border border-emerald-500/20 rounded-3xl p-8"
                        variants={{ hidden: { x: 24 }, visible: { x: 0 } }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h3 className="font-display font-bold text-xl text-emerald-300 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6" /> Seguir o protocolo
                        </h3>
                        <ul className="space-y-4">
                            {rightPath.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300 text-sm font-sans">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Razões para agir agora */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.08 }}
                >
                    {urgencyReasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"
                                variants={{ hidden: { y: 16 }, visible: { y: 0 } }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <Icon className="w-6 h-6 text-amber-400 mx-auto mb-3" />
                                <p className="text-xs text-slate-300 font-medium leading-relaxed font-sans">{reason.text}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Final */}
                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ y: 24 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="relative group w-full rounded-xl shadow-[0_4px_24px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_8px_32px_-4px_rgba(6,182,212,0.6)] transition-shadow duration-300 overflow-hidden"
                        onClick={goToCheckout}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 animate-gradient bg-[length:200%_auto]" />
                        <div className="relative px-6 py-5 flex items-center justify-center gap-2 text-white font-bold tracking-wide text-lg">
                            <span>QUERO ACESSAR O GUIA POR R$ 37</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </motion.button>
                    <p className="text-center text-slate-400 text-sm mt-4 font-sans">
                        🛡️ Garantia incondicional de 7 dias. Se não for para você, devolvemos 100% do valor.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
