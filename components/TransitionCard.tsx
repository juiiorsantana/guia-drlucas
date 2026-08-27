import React from 'react';
import { CheckCheck, Brain, Heart, Utensils, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export const TransitionCard = () => {
    return (
        <section className="py-16 bg-transparent overflow-hidden relative scroll-section">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: WhatsApp Floating Card */}
                    <motion.div
                        className="relative"
                        initial={{ x: -50 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Glassmorphic "Phone" Container */}
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 rounded-[2.5rem] shadow-soft-xl relative animate-float">

                            {/* Chat Interface */}
                            <div className="space-y-4 flex flex-col font-sans">

                                {/* Incoming Message 1 */}
                                <motion.div
                                    className="self-start max-w-[85%]"
                                    initial={{ x: -20 }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm relative text-slate-800 text-lg leading-snug">
                                        Todo mundo fala "agora é fácil, você operou"… mas não é 😞
                                        <span className="text-[10px] text-slate-400 block text-right mt-2 font-medium">10:42</span>
                                    </div>
                                </motion.div>

                                {/* Incoming Message 2 */}
                                <motion.div
                                    className="self-start max-w-[85%]"
                                    initial={{ x: -20 }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm relative text-slate-600 leading-snug">
                                        Nunca sei se estou comendo certo depois da bariátrica…
                                        <span className="text-[10px] text-slate-400 block text-right mt-2 font-medium">10:43</span>
                                    </div>
                                </motion.div>

                                {/* Outgoing Message (Call to Action) */}
                                <motion.div
                                    className="self-end max-w-[90%] mt-4"
                                    initial={{ x: 20, scale: 0.95 }}
                                    whileInView={{ x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="bg-[#dcf8c6] border border-green-100 rounded-2xl rounded-tr-none p-4 shadow-sm relative text-slate-900 leading-snug">
                                        <p className="font-medium">
                                            👉 Se você se identificou, este guia prático foi criado para você.
                                        </p>
                                        <div className="flex items-center justify-end gap-1 mt-2">
                                            <span className="text-[10px] text-green-700/60 font-medium">10:44</span>
                                            <CheckCheck size={14} className="text-blue-500" />
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100 to-blue-100 blur-3xl rounded-full opacity-60"></div>
                    </motion.div>


                    {/* RIGHT COLUMN: Copy & Differentiated Grid */}
                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    >
                        <motion.div
                            className="space-y-4"
                            variants={{
                                hidden: { y: 30 },
                                visible: { y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                                A Cirurgia te deu uma nova chance, agora você <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">precisa do protocolo certo.</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium">
                                A Bariátrica tratou a obesidade, mas <b>NÃO</b> ensina a se alimentar no longo prazo, não explica quais vitaminas repor e não mostra como:
                            </p>
                        </motion.div>

                        {/* Differentiated Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <motion.div
                                className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-blue-100 transition-all duration-300 md:col-span-2"
                                variants={{
                                    hidden: { y: 20, scale: 0.95 },
                                    visible: { y: 0, scale: 1 }
                                }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                        <Utensils size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Alimentação correta</h3>
                                        <p className="text-slate-600 leading-snug mt-1">Criar uma relação equilibrada com a comida, sem restrições absurdas.</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-red-100 transition-all duration-300"
                                variants={{
                                    hidden: { y: 20, scale: 0.95 },
                                    visible: { y: 0, scale: 1 }
                                }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                        <Brain size={20} />
                                    </div>
                                    <p className="font-bold text-slate-800 leading-snug">Quais micronutrientes são essenciais</p>
                                </div>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-green-100 transition-all duration-300"
                                variants={{
                                    hidden: { y: 20, scale: 0.95 },
                                    visible: { y: 0, scale: 1 }
                                }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                        <Leaf size={20} />
                                    </div>
                                    <p className="font-bold text-slate-800 leading-snug">Como evitar deficiências silenciosas</p>
                                </div>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div
                                className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-cyan-100 transition-all duration-300 md:col-span-2"
                                variants={{
                                    hidden: { y: 20, scale: 0.95 },
                                    visible: { y: 0, scale: 1 }
                                }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-primary shrink-0">
                                        <Heart size={20} />
                                    </div>
                                    <p className="font-bold text-slate-800 text-lg">Como manter saúde e qualidade de vida</p>
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};
