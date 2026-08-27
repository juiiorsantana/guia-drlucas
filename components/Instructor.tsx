import React from 'react';
import { motion } from 'motion/react';

// IMAGENS
// A imagem desktop deve ter o Dr. Lucas à esquerda e espaço vazio à direita para o texto
const DESKTOP_IMAGE = "/images/bghero.avif";
// A imagem mobile deve ter o Dr. Lucas no topo e espaço vazio embaixo (ou degradê) para o texto
const MOBILE_IMAGE = "/images/bghero.avif";

export const Instructor = () => {
    return (
        <section className="relative w-full py-16 md:py-20 overflow-hidden bg-slate-900 border-t border-slate-800 scroll-section">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(min-width: 768px)" srcSet={DESKTOP_IMAGE} />
                    <img
                        src={MOBILE_IMAGE}
                        alt="Dr. Lucas Nemes"
                        className="w-full h-full object-cover object-top md:object-center"
                    />
                </picture>

                {/* Gradients for Text Readability */}

                {/* Desktop Gradient: Fade from Slate-900 (Right) to Transparent (Left) */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-slate-950/70 from-40% via-slate-900/10 via-65% to-transparent"></div>

                {/* Mobile Gradient: Fade from Slate-900 (Bottom) to Transparent (Top) */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="flex justify-end"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                >
                    <div className="w-full md:w-1/2 lg:w-[45%] text-left md:text-left">
                        <motion.div
                            className="mb-8"
                            variants={{
                                hidden: { x: 40 },
                                visible: { x: 0 }
                            }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3 drop-shadow-md">
                                QUEM VAI TE ENSINAR
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest uppercase drop-shadow-lg leading-tight">
                                DR. LUCAS <br className="hidden md:block" /> NEMES
                            </h3>
                            {/* TODO: RQE divergente no repositório original (7982 aqui vs. 79890 no rodapé). Confirmar o número correto com o Dr. Lucas antes de publicar. */}
                            <p className="text-slate-300 font-mono mt-3 tracking-wider text-sm border-l-2 border-primary pl-3">
                                CRM/MT 8060 | RQE 79890
                            </p>
                        </motion.div>

                        <motion.div
                            className="space-y-6 text-lg text-slate-200 leading-relaxed font-light drop-shadow-md"
                            variants={{
                                hidden: { y: 30 },
                                visible: { y: 0 }
                            }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <p>
                                <span className="text-white font-medium">Médico Nutrólogo graduado pela UFMT e Especialista pela ABRAN/AMB</span>, referência em acompanhamento pós-bariátrico em Mato Grosso.
                            </p>
                            <p>
                                Nos últimos 10 anos, atendi <span className="text-white font-medium">mais de 300 pacientes pós-bariátricos</span>, desenvolvendo um método que vai além da nutrologia tradicional. Trabalhamos com mudança comportamental profunda, gestão emocional e reconstrução de identidade — porque cada pessoa é única, e manter resultados exige muito mais que dieta e suplementos.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Instructor;
