import React from 'react';
import { Marquee } from './ui/Marquee';
import { PointerHighlight } from './ui/pointer-highlight';
import { motion } from 'motion/react';

const stats = [
    { label: 'Pacientes atendidos', value: '+300', icon: '👥' },
    { label: 'Dedicados à nutrologia', value: '10 Anos', icon: '✅' },
    { label: 'Especialista', value: 'ABRAN/AMB', icon: '🩺' },
];

const testimonials = [
    {
        quote: "Hoje tenho paz com a comida e sinto que finalmente entendi como me alimentar depois da cirurgia. As receitas do guia viraram rotina na minha casa.",
        author: "Ana P.",
        age: "38",
        role: "Paciente há 2 anos",
        result: "Rotina alimentar organizada",
        tag: "Manutenção de peso",
        stars: 5,
    },
    {
        quote: "Aprendi que manutenção não é perfeição, é consistência. Passei a acompanhar minha suplementação de ferro com muito mais atenção desde a cirurgia.",
        author: "Carla Mendes",
        age: "42",
        role: "Paciente há 1 ano",
        result: "Suplementação acompanhada de perto",
        tag: "Controle nutricional",
        stars: 5,
    },
    {
        quote: "Foi a primeira vez que alguém cuidou do meu emocional junto com a nutrição. Me senti acolhida de verdade.",
        author: "Juliana Costa",
        age: "35",
        role: "Paciente há 6 meses",
        result: "Acompanhamento emocional e nutricional",
        tag: "Saúde emocional",
        stars: 5,
    },
    {
        quote: "Recuperei minha energia no dia a dia e passei a levar meus exames de rotina muito mais a sério.",
        author: "Roberto S.",
        age: "45",
        role: "Paciente há 3 anos",
        result: "Acompanhamento de exames em dia",
        tag: "Qualidade de vida",
        stars: 5,
    },
    {
        quote: "O método mudou minha relação com a comida e com a saúde. As receitas são práticas e deliciosas, sem abrir mão dos nutrientes.",
        author: "Fernanda L.",
        age: "31",
        role: "Paciente há 8 meses",
        result: "Alimentação reorganizada",
        tag: "Transformação corporal",
        stars: 5,
    },
    {
        quote: "Profissionalismo e atenção ímpares, recomendo de olhos fechados. Finalmente entendi o que meu corpo precisa após a bariátrica.",
        author: "Marcelo D.",
        age: "50",
        role: "Paciente há 1.5 anos",
        result: "Suplementação ajustada com orientação médica",
        tag: "Protocolo pós-bariátrico",
        stars: 5,
    },
];

export const SocialProof: React.FC = () => {

    return (
        <section className="py-16 bg-transparent relative overflow-hidden scroll-section">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-fluid-blue rounded-full blur-3xl opacity-50 animate-pulse-fast"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-orange rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ y: 40 }}
                    whileInView={{ y: 0 }}
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
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-3xl mx-auto"
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
                                hidden: { scale: 0.8, y: 20 },
                                visible: { scale: 1, y: 0 }
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
                    initial={{ y: 30 }}
                    whileInView={{ y: 0 }}
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
                                    className="w-[420px] bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-xl transition-all duration-500 border border-slate-100 flex flex-col relative overflow-hidden group mx-4"
                                >
                                    {/* Accent bar */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                                    {/* Tag + Stars */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                            {testimonial.tag}
                                        </span>
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: testimonial.stars }).map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Result badge */}
                                    <div className="flex items-center gap-2 mb-4 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 w-fit">
                                        <span className="text-emerald-500 text-sm">✓</span>
                                        <span className="text-emerald-700 font-bold text-sm">{testimonial.result}</span>
                                    </div>

                                    {/* Quote */}
                                    <p className="text-slate-700 leading-relaxed flex-grow text-sm">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center text-primary font-bold text-base shrink-0">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-medical-slate text-sm">
                                                {testimonial.author}, <span className="text-slate-400 font-normal">{testimonial.age} anos</span>
                                            </div>
                                            <div className="text-xs text-slate-400 mt-0.5">
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
                    <p className="text-center text-xs text-slate-400 mt-6">
                        Relatos de pacientes atendidos pelo Dr. Lucas Nemes. Resultados individuais podem variar.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
