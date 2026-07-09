import React from 'react';
import { ArrowRight, MousePointerClick, CreditCard, Mail, ShieldCheck, BadgeCheck, Lock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { goToCheckout } from './constants';

const steps = [
    {
        icon: MousePointerClick,
        title: 'Clique no botão',
        description: 'Você será redirecionado ao checkout seguro',
    },
    {
        icon: CreditCard,
        title: 'Faça o pagamento',
        description: 'Cartão ou PIX, processamento imediato',
    },
    {
        icon: Mail,
        title: 'Acesso liberado',
        description: 'Receba o guia + bônus no seu email instantaneamente',
    },
];

const valueStack = [
    { item: 'Guia Prático de Dietoterapia', value: 'R$ 197' },
    { item: '+40 Receitas Funcionais', value: 'R$ 97' },
    { item: 'Lista de Suplementação', value: 'R$ 67' },
    { item: 'Bônus: Mudança de Hábitos', value: 'R$ 97' },
    { item: 'Grupo Exclusivo de Membros', value: 'R$ 47' },
    { item: 'Certificado de Participação', value: 'R$ 27' },
];

const seals = [
    { icon: Lock, label: 'Checkout Seguro' },
    { icon: BadgeCheck, label: 'Satisfação Garantida' },
    { icon: ShieldCheck, label: 'Privacidade Protegida' },
];

export const OfferSection: React.FC = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden scroll-section">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* 3 passos */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-14"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                        Garanta seu acesso em <span className="text-cyan-400">3 passos simples</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.12 }}
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center relative"
                                variants={{
                                    hidden: { opacity: 0, y: 24 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="absolute top-4 left-5 font-display font-bold text-cyan-400/40 text-sm">
                                    {index + 1}
                                </div>
                                <div className="w-12 h-12 mx-auto mb-4 bg-cyan-400/10 rounded-2xl flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="font-display font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-400 font-sans">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Card de pricing */}
                <motion.div
                    className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)]"
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Value stack */}
                    <div className="space-y-3 mb-8">
                        {valueStack.map((row, index) => (
                            <div key={index} className="flex items-center justify-between text-sm border-b border-white/5 pb-3">
                                <span className="text-slate-300 font-sans">✓ {row.item}</span>
                                <span className="text-slate-500 font-semibold shrink-0 ml-4">{row.value}</span>
                            </div>
                        ))}
                        <div className="flex items-center justify-between pt-2">
                            <span className="text-white font-bold">Valor Total</span>
                            <span className="text-slate-400 font-bold line-through text-lg">R$ 532</span>
                        </div>
                    </div>

                    {/* Revelação do preço */}
                    <div className="text-center mb-8">
                        <p className="text-slate-400 text-sm mb-4 font-sans">
                            Você não vai pagar R$ 532. Nem R$ 197. Nem R$ 97.
                        </p>
                        <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2">
                            Primeiro Lote
                        </p>
                        <motion.div
                            className="font-display font-bold text-white text-7xl md:text-8xl leading-none"
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 120 }}
                        >
                            <span className="text-3xl md:text-4xl align-top text-cyan-400">R$</span>37
                        </motion.div>
                        <p className="text-slate-500 text-xs mt-3 font-sans">pagamento único • acesso vitalício</p>
                    </div>

                    {/* Barra de urgência */}
                    <div className="space-y-2 w-full mb-8">
                        <div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wide">
                            <span className="flex items-center gap-1.5"><TrendingUp size={14} className="text-cyan-400" /> 37% Vendido</span>
                            <span className="text-cyan-400">Restam Poucas Vagas</span>
                        </div>
                        <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '37%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            />
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="relative group w-full rounded-xl shadow-[0_4px_24px_-4px_rgba(6,182,212,0.5)] overflow-hidden"
                        onClick={goToCheckout}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 animate-gradient bg-[length:200%_auto]" />
                        <div className="relative px-6 py-4 flex items-center justify-center gap-2 text-white font-bold tracking-wide">
                            <span>QUERO MEU GUIA POR R$ 37</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </motion.button>

                    {/* Selos */}
                    <div className="flex items-center justify-center gap-6 mt-6">
                        {seals.map((seal, index) => {
                            const Icon = seal.icon;
                            return (
                                <div key={index} className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium">
                                    <Icon className="w-3.5 h-3.5" />
                                    {seal.label}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
