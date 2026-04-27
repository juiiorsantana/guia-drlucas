import React from 'react';
import { Marquee } from './ui/Marquee';
import { PointerHighlight } from './ui/pointer-highlight';
import { motion } from 'motion/react';

const stats = [
    { label: 'Pacientes atendidos', value: '+300', icon: '👥' },
    { label: 'Mantêm o peso após 12 meses', value: '89%', icon: '⚖️' },
    { label: 'Média de gordura eliminada', value: '15kg', icon: '🔥' },
    { label: 'Dedicados à nutrologia', value: '10 Anos', icon: '✅' },
];

const testimonials = [
    {
        quote: "Hoje mantenho meus 45kg a menos e finalmente tenho paz com a comida.",
        author: "Ana P.",
        age: "38",
        role: "Paciente há 2 anos"
    },
    {
        quote: "Aprendi que manutenção não é perfeição, é consistência.",
        author: "Carla Mendes",
        age: "42",
        role: "Paciente há 1 ano"
    },
    {
        quote: "Foi a primeira vez que alguém cuidou do meu emocional.",
        author: "Juliana Costa",
        age: "35",
        role: "Paciente há 6 meses"
    },
    {
        quote: "Me sinto com 20 anos de novo, recuperei minha energia vital.",
        author: "Roberto S.",
        age: "45",
        role: "Paciente há 3 anos"
    },
    {
        quote: "O método mudou minha relação com o espelho e com a saúde.",
        author: "Fernanda L.",
        age: "31",
        role: "Paciente há 8 meses"
    },
    {
        quote: "Profissionalismo e atenção ímpares, recomendo de olhos fechados.",
        author: "Marcelo D.",
        age: "50",
        role: "Paciente há 1.5 anos"
    }
];

export const SocialProof: React.FC = () => {

    return (
        <section className="py-24 bg-transparent relative overflow-hidden scroll-section">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-fluid-blue rounded-full blur-3xl opacity-50 animate-pulse-fast"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-orange rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-medical-slate mb-6">
                        Mais de <PointerHighlight containerClassName="inline-flex align-bottom" rectangleClassName="bg-blue-500/20 border-none rounded-md" pointerClassName="text-blue-500"><span className="text-primary px-1">300 pacientes</span></PointerHighlight> já transformaram suas vidas
                    </h2>
                    <p className="text-lg text-slate-600">
                        com o acompanhamento do Dr. Lucas Nemes. Resultados reais, baseados em ciência e empatia.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-soft-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 flex flex-col items-center text-center group"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="w-12 h-12 mb-4 bg-fluid-blue rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="font-display font-bold text-3xl text-medical-slate mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="flex justify-between items-end mb-8 px-2">
                        <div>
                            <h3 className="font-display font-bold text-2xl text-medical-slate mb-2">
                                Histórias de Sucesso
                            </h3>
                            <p className="text-slate-500">
                                O que dizem nossos pacientes
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <Marquee pauseOnHover className="[--gap:1.5rem] py-4">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-[400px] bg-white rounded-4xl p-8 shadow-soft hover:shadow-soft-xl transition-all duration-500 h-64 border border-slate-100 flex flex-col relative overflow-hidden group mx-4"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="text-4xl text-primary mb-4 font-serif opacity-30">"</div>
                                    <p className="text-lg text-slate-700 italic flex-grow leading-relaxed line-clamp-3">
                                        {testimonial.quote}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl shrink-0">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-medical-slate">
                                                {testimonial.author}, <span className="text-slate-400 font-normal">{testimonial.age}</span>
                                            </div>
                                            <div className="text-xs text-primary font-medium uppercase tracking-wider">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-clinical-white dark:from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-clinical-white dark:from-background"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
