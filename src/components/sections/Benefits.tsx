"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle,
  ArrowRight,
  Lightbulb
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Resultados Imediatos",
    description: "Implementações práticas que geram impacto desde o primeiro dia",
    features: ["Framework exclusivo", "Templates prontos", "Checklist de implementação"],
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    delay: 0.1
  },
  {
    icon: Target,
    title: "Estratégias Comprovadas",
    description: "Metodologias testadas em 500+ empresas com resultados mensuráveis",
    features: ["Cases reais", "Dados de performance", "ROI comprovado"],
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    delay: 0.2
  },
  {
    icon: Users,
    title: "Mentoria Personalizada",
    description: "Acompanhamento direto com especialistas durante a implementação",
    features: ["Suporte 90 dias", "Grupo VIP", "Sessões 1:1"],
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    delay: 0.3
  },
  {
    icon: TrendingUp,
    title: "Crescimento Escalável",
    description: "Sistemas que crescem com sua empresa sem perder eficiência",
    features: ["Automação inteligente", "Processos otimizados", "KPIs definidos"],
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    delay: 0.4
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "100% do investimento devolvido se não ficar satisfeito",
    features: ["7 dias de garantia", "Sem perguntas", "Risco zero"],
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-50",
    delay: 0.5
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Evite anos de tentativa e erro com soluções prontas",
    features: ["Atalhos comprovados", "Erros evitados", "Implementação rápida"],
    color: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-50",
    delay: 0.6
  }
];

const transformationSteps = [
  {
    step: "01",
    title: "Diagnóstico Completo",
    description: "Análise 360° da sua empresa identificando gargalos e oportunidades",
    icon: Lightbulb
  },
  {
    step: "02", 
    title: "Estratégia Personalizada",
    description: "Criação do plano específico para seu negócio e mercado",
    icon: Target
  },
  {
    step: "03",
    title: "Implementação Guiada",
    description: "Execução assistida com suporte contínuo da nossa equipe",
    icon: Users
  },
  {
    step: "04",
    title: "Resultados Mensuráveis",
    description: "Acompanhamento de métricas e otimização contínua",
    icon: TrendingUp
  }
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Por que escolher nosso workshop?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefícios que{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transformam
            </span>{" "}
            Empresas
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra por que 98% dos participantes recomendam nosso workshop e como 
            você pode ser o próximo case de sucesso
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: benefit.delay }}
                className="group"
              >
                <div className={`${benefit.bgColor} rounded-2xl p-8 h-full border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transformation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona a{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Transformação
              </span>
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Um processo estruturado em 4 etapas para garantir resultados consistentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-blue-400/30 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
                    <Icon className="w-8 h-8 text-yellow-400" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>

                  {/* Connector Line */}
                  {index < transformationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-12"
          >
            <p className="text-blue-100 mb-6">
              Pronto para transformar sua empresa? Comece hoje mesmo!
            </p>
            <button 
              onClick={() => {
                const event = new CustomEvent('openPreRegistration');
                window.dispatchEvent(event);
              }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Iniciar Minha Transformação
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
