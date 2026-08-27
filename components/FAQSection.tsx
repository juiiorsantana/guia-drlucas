import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { goToCheckout } from './nova-oferta/constants';

const faqs = [
    {
        question: 'Para quem é este guia?',
        answer: 'Para qualquer pessoa que fez cirurgia bariátrica e quer saber exatamente o que comer, como suplementar e como evitar deficiências nutricionais.',
    },
    {
        question: 'Preciso ter feito a cirurgia recentemente?',
        answer: 'Não. O guia serve tanto para quem operou há meses quanto para quem operou há anos. A fisiologia pós-bariátrica é permanente.',
    },
    {
        question: 'As receitas são complicadas?',
        answer: 'Não. Foram pensadas com ingredientes acessíveis do dia a dia, sem complicação.',
    },
    {
        question: 'Quanto tempo tenho de acesso?',
        answer: 'Acesso imediato e vitalício. O material é seu para sempre.',
    },
    {
        question: 'E se eu não gostar?',
        answer: 'Você tem 7 dias de garantia incondicional. Se não servir para você, devolvemos 100% do valor sem perguntas.',
    },
    {
        question: 'O guia substitui o acompanhamento médico?',
        answer: 'Não. Ele complementa. No final do material, há também uma condição especial para quem deseja acompanhamento individualizado com o Dr. Lucas.',
    },
    {
        question: 'Como recebo o material?',
        answer: 'Após o pagamento, você recebe acesso imediato por email ao guia em PDF + bônus.',
    },
    {
        question: 'Posso pagar com PIX?',
        answer: 'Sim! Cartão de crédito ou PIX, processamento imediato.',
    },
];

export const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 bg-clinical-white relative overflow-hidden scroll-section">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-14"
                    initial={{ y: 40 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-medical-slate mb-4">
                        Perguntas <span className="text-primary">Frequentes</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-sans">
                        Tudo o que você precisa saber antes de garantir seu guia.
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="max-w-2xl mx-auto space-y-4 mb-16">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden"
                                initial={{ y: 16 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <button
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-display font-bold text-medical-slate">
                                        {faq.question}
                                    </span>
                                    <span className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                                        {isOpen
                                            ? <Minus className="w-4 h-4 text-primary" />
                                            : <Plus className="w-4 h-4 text-primary" />}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        >
                                            <p className="px-6 pb-6 text-slate-600 leading-relaxed text-sm font-sans">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA final da seção */}
                <motion.div
                    className="max-w-xl mx-auto text-center"
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
                        <div className="relative px-6 py-4 flex items-center justify-center gap-2 text-white font-bold tracking-wide">
                            <span>QUERO ACESSAR O GUIA AGORA</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </motion.button>
                    <p className="text-sm font-bold text-slate-700 mt-4">
                        Condição especial de lançamento: de <span className="line-through text-slate-400">R$ 97</span> por <span className="text-primary">R$ 37</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
