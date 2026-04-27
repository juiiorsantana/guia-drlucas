import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export const Agitation = () => {
    const pains = [
        "Não sabe o que comer após a bariátrica",
        "Quais suplementos são necessários no seu caso",
        "Como evitar viver à base de comprimidos",
        "Como montar refeições equilibradas e saborosas"
    ];

    return (
        <section className="py-24 bg-transparent overflow-hidden relative scroll-section">
            {/* Soft Background Elements */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-20 left-0 w-64 h-64 bg-cyan-200 rounded-full blur-[80px] opacity-20"></div>
                <div className="absolute bottom-20 right-0 w-64 h-64 bg-blue-200 rounded-full blur-[80px] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-white/60 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[3rem] shadow-soft-xl relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-cyan-600"></div>

                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            A cirurgia mudou o seu corpo, mas ningúem te ensinou <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600 font-black">a como cuidar depois?</span>

                        </motion.h2>

                        <motion.div
                            className="grid md:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                        >
                            {pains.map((pain, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 shadow-soft-sm hover:shadow-soft transition-all duration-300 group"
                                    variants={{
                                        hidden: { opacity: 0, y: 20, scale: 0.95 },
                                        visible: { opacity: 1, y: 0, scale: 1 }
                                    }}
                                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors">
                                        <AlertTriangle className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="font-medium text-lg text-slate-700">{pain}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-12 p-8 bg-slate-900 text-white text-center rounded-3xl relative shadow-soft-xl"
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-[60px] opacity-20"></div>
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-cyan-600 px-6 py-1.5 text-xs font-bold uppercase tracking-widest rounded-b-xl shadow-lg">
                                Diagnóstico
                            </div>
                            <p className="text-xl font-medium leading-relaxed opacity-90 relative z-10">
                                "Se você se identificou com pelo menos 2 pontos, essa <span className="text-primary font-bold">imersão</span> foi criada exatamente para você."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
