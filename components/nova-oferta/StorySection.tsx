import React from 'react';
import { motion } from 'motion/react';

const patientStories = [
    {
        name: 'Ana',
        age: 38,
        story: 'Emagreceu bastante, mas começou a perder cabelo. Descobriu deficiência de ferro no exame de rotina.',
        result: 'Passou a acompanhar a suplementação com o guia',
    },
    {
        name: 'Carla',
        age: 42,
        story: 'Achava que comer pouco era suficiente. Vivia com anemia crônica.',
        result: 'Aprendeu que manutenção é consistência, não perfeição',
    },
    {
        name: 'Roberto',
        age: 45,
        story: 'Exames sempre alterados, energia zero.',
        result: 'Passou a levar os exames de rotina mais a sério com o protocolo',
    },
];

export const StorySection: React.FC = () => {
    return (
        <section className="py-16 bg-medical-slate relative overflow-hidden scroll-section">
            {/* Background com foto do Dr. Lucas */}
            <div
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bghero.avif')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-medical-slate/60 via-transparent to-medical-slate" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ y: 40 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                        Uma frustração que se repetia <span className="text-cyan-400">consultório adentro</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
                        Nos últimos 10 anos, o Dr. Lucas Nemes atendeu mais de 300 pacientes pós-bariátricos em Mato Grosso. E o que mais o frustrava não era a complexidade dos casos — era ver pacientes voltando ao consultório com os mesmos problemas que <strong className="text-white">poderiam ter sido prevenidos</strong>...
                    </p>
                </motion.div>

                {/* Timeline vertical com histórias */}
                <div className="max-w-2xl mx-auto relative mb-20">
                    <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent" />
                    {patientStories.map((patient, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-16 pb-10 last:pb-0"
                            initial={{ x: -24 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* Avatar na timeline */}
                            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                {patient.name.charAt(0)}
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors duration-300">
                                <div className="font-bold text-white mb-2">
                                    {patient.name}, <span className="text-slate-400 font-normal">{patient.age} anos</span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">
                                    {patient.story}
                                </p>
                                <span className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-semibold text-sm px-3 py-1.5 rounded-xl">
                                    ✓ {patient.result}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Citação — o problema revelado */}
                <motion.blockquote
                    className="max-w-3xl mx-auto text-center relative"
                    initial={{ y: 30 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="font-display text-7xl text-cyan-400/30 leading-none block mb-2">"</span>
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-sans">
                        O problema nunca foi falta de disciplina. O problema é que a cirurgia bariátrica muda a fisiologia do seu corpo — e a maioria das receitas e dietas que existem por aí simplesmente <strong className="text-cyan-400">ignoram isso</strong>.
                    </p>
                    {/* TODO: RQE divergente no repositório original (7982 aqui vs. 79890 no rodapé). Confirmar o número correto com o Dr. Lucas antes de publicar. */}
                    <footer className="mt-6 text-sm text-slate-400 font-medium tracking-wide uppercase">
                        Dr. Lucas Nemes — CRM/MT 8060 | RQE 79890
                    </footer>
                </motion.blockquote>
            </div>
        </section>
    );
};
