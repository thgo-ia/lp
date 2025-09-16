"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Cog, Crown, ArrowRight, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Estratégia de Crescimento",
    description: "Metodologias comprovadas para identificar oportunidades e criar planos de expansão sustentável",
    features: [
      "Análise de mercado e posicionamento",
      "Definição de metas SMART",
      "Criação de funil de vendas otimizado",
      "Estratégias de diferenciação competitiva"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Cog,
    title: "Otimização de Processos",
    description: "Transforme operações complexas em sistemas eficientes que geram mais resultados com menos recursos",
    features: [
      "Mapeamento de processos críticos",
      "Eliminação de gargalos operacionais",
      "Automação e digitalização",
      "Métricas de performance (KPIs)"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Crown,
    title: "Liderança de Alta Performance",
    description: "Desenvolva habilidades de liderança que inspiram equipes e multiplicam resultados organizacionais",
    features: [
      "Técnicas de comunicação assertiva",
      "Gestão de equipes de alto rendimento",
      "Cultura organizacional vencedora",
      "Desenvolvimento de sucessores"
    ],
    color: "from-amber-500 to-amber-600"
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O QUE VOCÊ VAI{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              APRENDER
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três pilares fundamentais que transformarão sua empresa em uma máquina
            de resultados consistentes e escaláveis
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-3 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section - What Makes It Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-gray-50 to-primary/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Por que este Workshop é{" "}
                <span className="text-primary">Diferente?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Metodologia Prática</h4>
                    <p className="text-gray-600 text-sm">Exercícios hands-on com sua própria empresa durante o evento</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Casos Reais</h4>
                    <p className="text-gray-600 text-sm">Exemplos e estudos de casos de empresas que multiplicaram receita</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Implementação Imediata</h4>
                    <p className="text-gray-600 text-sm">Saia com um plano de ação detalhado para os próximos 90 dias</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Você vai receber:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Workbook exclusivo de 50+ páginas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Templates prontos para implementação
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Acesso ao grupo VIP por 90 dias
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Certificado de participação
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Coffee breaks premium inclusos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
