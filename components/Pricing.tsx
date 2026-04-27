import React from 'react';
import { FluidButton } from './ui/FluidButton';
import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-transparent relative overflow-hidden scroll-section">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-slate-50 opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-0 bg-white rounded-[3rem] shadow-soft-xl overflow-hidden border border-slate-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >

                    <motion.div
                        className="p-12 md:p-16 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            O QUE ESTÁ INCLUSO
                        </h3>
                        <motion.ul
                            className="space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
                        >
                            {[
                                "Guia Prático Completo em PDF",
                                "Acesso Imediato ao Material",
                                "Material de Apoio (PDF)",
                                "Certificado Oficial",
                                "Grupo de Networking"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-4 text-lg text-slate-700 font-medium"
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.div
                            className="mt-12 flex items-center gap-3 text-sm font-medium text-slate-500 bg-slate-50 p-4 rounded-xl w-fit"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <ShieldCheck className="text-slate-400" /> Garantia de 7 dias incondicional
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="p-12 md:p-16 flex flex-col justify-center bg-slate-900 text-white relative overflow-hidden group"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Gradient Blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-10"></div>

                        <motion.div
                            className="relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                        >
                            <motion.div
                                className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-8"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                ✨ Oferta Especial
                            </motion.div>

                            <motion.p
                                className="text-slate-400 line-through text-lg mb-2"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                de R$ 97,00
                            </motion.p>

                            <motion.div
                                className="mb-8"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <p className="text-primary text-xl font-semibold mb-2">
                                    1º Lote por apenas
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-medium text-slate-400">R$</span>
                                    <span className="text-8xl md:text-9xl font-bold tracking-tighter text-white">37</span>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <FluidButton variant="primary" fullWidth className="shadow-soft-primary hover:shadow-glow">
                                    GARANTIR AGORA
                                </FluidButton>
                            </motion.div>

                            <motion.p
                                className="text-center text-xs text-slate-500 mt-6"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                Pagamento seguro via cartão ou PIX
                            </motion.p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};
