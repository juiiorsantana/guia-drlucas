import React from 'react';
import { HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const questions = [
    'Você sabe quais micronutrientes seu corpo absorve menos agora?',
    "Já se perguntou por que o cansaço não vai embora, mesmo comendo 'certinho'?",
    'Quantas vezes você pesquisou receitas online e ficou mais confusa?',
    'Você sente que está cuidando do corpo — mas os exames dizem o contrário?',
];

export const LeadSection: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden scroll-section">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-sans">
                        Você saiu do hospital depois da bariátrica sentindo que finalmente ia mudar tudo. Os primeiros quilos foram embora rápido, as roupas começaram a caber, e pela primeira vez em anos você sentiu <strong className="text-medical-slate">esperança de verdade</strong>...
                    </p>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mt-8 font-sans">
                        Mas aí vieram as primeiras dúvidas. Ninguém te disse o que comer de verdade. Ninguém te explicou como evitar que o cabelo caísse. Ninguém te avisou que seus exames podiam <strong className="text-alert-orange">despencar silenciosamente</strong>...
                    </p>
                </motion.div>

                {/* Perguntas retóricas — cards */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {questions.map((question, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 backdrop-blur-md rounded-3xl p-7 shadow-soft hover:shadow-soft-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 flex items-start gap-4 group"
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="w-11 h-11 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <HelpCircle className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed font-sans">
                                {question}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
