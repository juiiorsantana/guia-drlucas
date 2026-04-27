import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export default function WhyCheap() {
    return (
        <section className="relative w-full py-20 bg-black overflow-hidden scroll-section" id="why-so-cheap">
            {/* Grid Pattern */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]",
                    "opacity-40"
                )}
            />

            {/* Radial gradient for fading edges */}
            <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-10 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Headline */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            Por que um material <span className="opacity-90">tão barato?</span>
                        </h2>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        className="text-left space-y-6 text-zinc-300 md:text-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                    >
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Porque cansei de ver pacientes pós-bariátricos reganhando peso em silêncio. Este guia existe para democratizar um método completo, científico e testado com centenas de pacientes.
                        </motion.p>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <strong className="text-white">Com o tempo:</strong> Surgem as consequências: cansaço persistente, queda de cabelo, unhas fracas, flacidez da pele, baixa autoestima e desânimo emocional. Em muitos casos, os exames mostram deficiências importantes, gerando frustração e sensação de abandono. Na maioria das vezes, não é falta de disciplina — é falta de orientação prática e acessível para a realidade do pós-bariátrico..
                        </motion.p>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <strong className="text-white">Transparência Total:</strong> o valor baixo garante que você aplique a base da nutrição sem comprometer seu orçamento. Além disso, no final do material, apresentarei o Programa Vida Plena, meu acompanhamento de 6 meses com consultas online e suporte contínuo, para quem desejar o próximo passo.
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
