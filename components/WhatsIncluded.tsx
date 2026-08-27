import React from 'react';
import { FluidButton } from './ui/FluidButton';
import { Check, ShieldCheck, Lock, Clock, Video } from 'lucide-react';

export const WhatsIncluded = () => {
    return (
        <section className="py-16 bg-black relative overflow-hidden">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] opacity-40 pointer-events-none"
            />

            {/* Radial gradient for fading edges */}
            <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 opacity-[0.03] [background-size:40px_40px] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">

                        {/* LEFT COLUMN: Content List */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                                    É ISSO QUE VOCÊ VAI TER ACESSO <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                                        NO GUIA PRÁTICO DE DIETOTERAPIA.
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-lg">
                                    Tudo o que você precisa para assumir o controle no pós-bariátrica.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Feito pelo Médico Nutrólogo Dr. Lucas Nemes",
                                    "Guia Prático de Dietoterapia Pós-Bariátrica",
                                    "Lista de suplementação",
                                    "+40 Receitas funcionais",
                                    "Certificado de participação",
                                    "Grupo exclusivo de membros",
                                    "Condição especial para acompanhamento individualizado"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-cyan-500 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-primary/20">
                                            <Check size={14} className="text-white font-bold" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-200 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT COLUMN: Pricing & CTA */}
                        <div className="flex flex-col justify-center">

                            {/* Top Badges */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 backdrop-blur-sm">
                                    <div className="p-1.5 bg-pink-500/20 rounded-full text-pink-500">
                                        <Clock size={16} />
                                    </div>
                                    <span className="text-slate-300 text-sm font-medium">Conteúdo Exclusivo</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 backdrop-blur-sm">
                                    <div className="p-1.5 bg-purple-500/20 rounded-full text-purple-500">
                                        <Video size={16} />
                                    </div>
                                    <span className="text-slate-300 text-sm font-medium">Acesso imediato</span>
                                </div>
                            </div>

                            {/* Pricing Card */}
                            <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 shadow-xl">
                                <div className="flex items-end justify-center gap-3 mb-2">
                                    <span className="text-slate-400 text-lg relative top-[-6px]">De <span className="line-through decoration-red-500 decoration-2">R$ 97,00</span></span>
                                    <span className="text-slate-300 text-lg relative top-[-6px]">Por apenas</span>
                                </div>

                                <div className="text-center mb-10">
                                    <div className="text-7xl font-bold text-white tracking-tighter inline-flex items-start">
                                        <span className="text-2xl mt-2 mr-1 text-slate-400">R$</span>
                                        37
                                        <span className="text-2xl mt-2 text-slate-400">,00</span>
                                    </div>
                                </div>

                                <FluidButton
                                    variant="primary"
                                    fullWidth
                                    className="h-16 text-lg font-bold shadow-[0_0_30px_-5px_var(--primary)] hover:shadow-[0_0_50px_-10px_var(--primary)] transition-all duration-300"
                                    onClick={() => window.location.href = 'https://pay.hotmart.com/N106123722W'}
                                >
                                    GARANTIR MEU ACESSO
                                </FluidButton>

                                {/* Condição de lançamento */}
                                <div className="mt-8">
                                    <p className="text-center text-slate-400 text-sm font-medium">
                                        <span className="text-white font-bold">Condição especial de lançamento:</span> de R$ 97 por R$ 37
                                    </p>
                                </div>

                                {/* Security Badges */}
                                <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap justify-between gap-4">
                                    <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                                        <ShieldCheck size={16} className="text-white" />
                                        <span className="text-[10px] text-white font-medium uppercase leading-tight text-left">Checkout<br />Seguro</span>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                                        <Check size={16} className="text-white" />
                                        <span className="text-[10px] text-white font-medium uppercase leading-tight text-left">Satisfação<br />Garantida</span>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                                        <Lock size={16} className="text-white" />
                                        <span className="text-[10px] text-white font-medium uppercase leading-tight text-left">Privacidade<br />Protegida</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
