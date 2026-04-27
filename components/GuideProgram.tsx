import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export default function GuideProgram() {
    return (
        <section className="bg-medical-slate py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* LEFT COLUMN - STICKY INFO */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-gray-300 mb-6 backdrop-blur-md">
                                    <BookOpen size={14} className="text-primary" />
                                    <span className="text-xs font-medium tracking-wide uppercase">Conteúdo do Guia</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                    O que você vai encontrar
                                </h2>

                                <div className="flex items-center gap-4 text-lg text-gray-300 bg-white/5 border border-white/10 p-4 rounded-2xl w-fit backdrop-blur-sm">
                                    <span className="font-medium">Formato:</span>
                                    <div className="flex items-center gap-2 bg-[#2D8CFF]/20 px-3 py-1 rounded-lg border border-[#2D8CFF]/30">
                                        <BookOpen size={18} className="text-[#2D8CFF]" />
                                        <span className="font-bold text-white tracking-wide">Guia Prático em PDF</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SCHEDULE CONTENT */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* Chapter 1 */}
                        <div className="space-y-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Capítulo 1: Compreendendo a cirurgia</h3>
                                <p className="text-gray-400">Entenda as mudanças no seu corpo e como se adaptar a elas.</p>
                            </div>
                            <div className="space-y-4">
                                <ScheduleItem title="O que muda no seu estômago após a cirurgia?" />
                                <ScheduleItem title="A nova fisiologia da digestão e absorção" />
                            </div>
                        </div>

                        {/* Chapter 2 */}
                        <div className="space-y-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Capítulo 2: Princípios da Dietoterapia</h3>
                                <p className="text-gray-400">As bases de uma nutrição inteligente para o seu novo momento.</p>
                            </div>
                            <div className="space-y-4">
                                <ScheduleItem title="Macro e micronutrientes essenciais no pós-bariátrica" />
                                <ScheduleItem title="Hidratação inteligente e como montar o prato ideal" />
                            </div>
                        </div>

                        {/* Chapter 3 */}
                        <div className="space-y-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Capítulo 3: Receitas Funcionais</h3>
                                <p className="text-gray-400">Refeições saborosas, fáceis de fazer e ricas em nutrientes.</p>
                            </div>
                            <div className="space-y-4">
                                <ScheduleItem title="Cafés da manhã rápidos e lanches nutritivos" />
                                <ScheduleItem title="Almoços funcionais e jantares de fácil digestão" />
                            </div>
                        </div>

                        {/* Chapter 4 */}
                        <div className="space-y-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Capítulo 4: Suplementação Pós-Bariátrica</h3>
                                <p className="text-gray-400">O pilar para evitar deficiências a longo prazo.</p>
                            </div>
                            <div className="space-y-4">
                                <ScheduleItem title="Quais vitaminas e minerais são inegociáveis?" />
                                <ScheduleItem title="Sinais de deficiência e protocolos de reposição" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

const ScheduleItem = ({ title }: { title: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07]"
        >
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight size={20} />
                </div>
                <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{title}</span>
            </div>
        </motion.div>
    );
};
