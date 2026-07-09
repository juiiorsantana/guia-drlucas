import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Marquee } from '../ui/Marquee';

const stats = [
    { label: 'Pacientes atendidos', value: '+300' },
    { label: 'Mantêm o peso após 12 meses', value: '89%' },
    { label: 'Dedicados à nutrologia', value: '10 anos' },
];

// Depoimentos reutilizados da página original (SocialProof)
const testimonials = [
    {
        quote: 'Hoje mantenho meus 45kg a menos e finalmente tenho paz com a comida. As receitas do guia viraram rotina na minha casa.',
        author: 'Ana P.',
        age: '38',
        result: '−45 kg mantidos',
        tag: 'Manutenção de peso',
    },
    {
        quote: 'Aprendi que manutenção não é perfeição, é consistência. Parei de ter deficiência de ferro pela primeira vez desde a cirurgia.',
        author: 'Carla Mendes',
        age: '42',
        result: 'Sem anemia há 8 meses',
        tag: 'Controle nutricional',
    },
    {
        quote: 'Foi a primeira vez que alguém cuidou do meu emocional junto com a nutrição. Me sinto de verdade curada por dentro.',
        author: 'Juliana Costa',
        age: '35',
        result: '−18 kg em 6 meses',
        tag: 'Saúde emocional',
    },
    {
        quote: 'Me sinto com 20 anos de novo, recuperei minha energia vital. Meus exames estão perfeitos pela primeira vez em anos.',
        author: 'Roberto S.',
        age: '45',
        result: 'Exames 100% normalizados',
        tag: 'Qualidade de vida',
    },
    {
        quote: 'O método mudou minha relação com o espelho e com a saúde. As receitas são práticas e deliciosas, sem abrir mão dos nutrientes.',
        author: 'Fernanda L.',
        age: '31',
        result: '−22 kg em 8 meses',
        tag: 'Transformação corporal',
    },
    {
        quote: 'Profissionalismo e atenção ímpares, recomendo de olhos fechados. Finalmente entendi o que meu corpo precisa após a bariátrica.',
        author: 'Marcelo D.',
        age: '50',
        result: 'Suplementação zerada',
        tag: 'Protocolo pós-bariátrico',
    },
];

const beforeAfter = [
    { before: 'Queda de cabelo', after: 'Cabelo forte e saudável' },
    { before: 'Anemia crônica', after: 'Exames normalizados' },
    { before: 'Cansaço persistente', after: 'Energia restaurada' },
    { before: 'Confusão alimentar', after: 'Clareza total' },
];

export const EvidenceSection: React.FC = () => {
    return (
        <section className="py-24 bg-medical-slate relative overflow-hidden scroll-section">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Credibilidade */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-14"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                        Resultados que <span className="text-cyan-400">falam por si</span>
                    </h2>
                    <p className="text-lg text-slate-300 font-sans">
                        Médico Nutrólogo — UFMT | Especialista ABRAN/AMB
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center"
                            variants={{
                                hidden: { opacity: 0, scale: 0.85, y: 16 },
                                visible: { opacity: 1, scale: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="font-display font-bold text-4xl text-cyan-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Depoimentos em marquee */}
                <motion.div
                    className="relative mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <Marquee pauseOnHover className="[--gap:1.5rem] py-4">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-[380px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 flex flex-col mx-4 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">
                                        {testimonial.tag}
                                    </span>
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-bold text-sm px-3 py-1.5 rounded-xl w-fit mb-4">
                                    ✓ {testimonial.result}
                                </span>
                                <p className="text-slate-300 leading-relaxed flex-grow text-sm font-sans">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-5 pt-5 border-t border-white/10 font-bold text-white text-sm">
                                    {testimonial.author}, <span className="text-slate-400 font-normal">{testimonial.age} anos</span>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-medical-slate" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-medical-slate" />
                </motion.div>

                {/* Before / After */}
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h3 className="font-display font-bold text-2xl text-white text-center mb-8">
                        O que muda na prática
                    </h3>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/10">
                            <div className="px-6 py-4">Antes</div>
                            <div className="px-6 py-4 border-l border-white/10">Depois</div>
                        </div>
                        {beforeAfter.map((row, index) => (
                            <div key={index} className="grid grid-cols-2 border-b border-white/5 last:border-b-0">
                                <div className="px-6 py-4 flex items-center gap-3 text-slate-300 text-sm font-sans">
                                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                                    {row.before}
                                </div>
                                <div className="px-6 py-4 flex items-center gap-3 text-white text-sm font-medium border-l border-white/10 font-sans">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    {row.after}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
