"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Coffee, Users, Target, Lightbulb, Rocket } from "lucide-react";

const timelineData = [
  {
    day: "DIA 1",
    date: "15 de Novembro - Sábado",
    subtitle: "Diagnóstico e Estratégia",
    sessions: [
      {
        time: "09:00 - 09:30",
        title: "Credenciamento e Welcome Coffee",
        description: "Recepção dos participantes e networking inicial",
        icon: Coffee,
        type: "break"
      },
      {
        time: "09:30 - 12:00",
        title: "Diagnóstico Empresarial Completo",
        description: "Análise 360° do seu negócio: pontos fortes, fracos, oportunidades e ameaças. Identificação dos gargalos que impedem o crescimento.",
        icon: Target,
        type: "session",
        highlights: ["Assessment personalizado", "Mapeamento de processos", "Análise SWOT avançada"]
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço Networking",
        description: "Momento para troca de experiências entre participantes",
        icon: Users,
        type: "break"
      },
      {
        time: "13:30 - 17:00",
        title: "Estratégia de Crescimento Acelerado",
        description: "Definição do plano estratégico personalizado com metas claras e ações específicas para os próximos 90 dias.",
        icon: Rocket,
        type: "session",
        highlights: ["Definição de objetivos SMART", "Criação do roadmap de crescimento", "Estratégias de posicionamento"]
      },
      {
        time: "17:00 - 17:30",
        title: "Coffee Break e Revisão",
        description: "Pausa para assimilação do conteúdo e esclarecimento de dúvidas",
        icon: Coffee,
        type: "break"
      }
    ]
  },
  {
    day: "DIA 2", 
    date: "16 de Novembro - Domingo",
    subtitle: "Implementação e Plano de Ação",
    sessions: [
      {
        time: "09:00 - 09:30",
        title: "Revisão e Energização",
        description: "Recap do dia anterior e preparação para implementação",
        icon: Lightbulb,
        type: "session"
      },
      {
        time: "09:30 - 12:00",
        title: "Otimização de Processos e Sistemas",
        description: "Implementação de metodologias para eliminar desperdícios, automatizar processos e aumentar a produtividade da equipe.",
        icon: Target,
        type: "session",
        highlights: ["Mapeamento de fluxos de trabalho", "Implementação de KPIs", "Automação de processos"]
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço Executivo",
        description: "Discussões estratégicas em grupos menores",
        icon: Users,
        type: "break"
      },
      {
        time: "13:30 - 16:30",
        title: "Liderança e Gestão de Equipes",
        description: "Desenvolvimento de habilidades de liderança para maximizar o desempenho da equipe e criar uma cultura de alta performance.",
        icon: Users,
        type: "session",
        highlights: ["Técnicas de motivação", "Gestão de conflitos", "Desenvolvimento de talentos"]
      },
      {
        time: "16:30 - 17:30",
        title: "Plano de Ação Personalizado",
        description: "Criação do seu plano de implementação dos próximos 90 dias com metas específicas e métricas de acompanhamento.",
        icon: Rocket,
        type: "session",
        highlights: ["Cronograma detalhado", "Métricas de sucesso", "Próximos passos"]
      },
      {
        time: "17:30 - 18:00",
        title: "Encerramento e Entrega de Certificados",
        description: "Recap final, entrega de materiais e certificados",
        icon: Coffee,
        type: "break"
      }
    ]
  }
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cronograma{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Detalhado
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dois dias intensivos de conteúdo prático e aplicável, estruturados para
            maximizar seu aprendizado e resultados
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {timelineData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.3 }}
              className="relative"
            >
              {/* Day Header */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 mb-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{day.day}</h3>
                    <p className="text-lg opacity-90">{day.date}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                      {day.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sessions */}
              <div className="space-y-6">
                {day.sessions.map((session, sessionIndex) => {
                  const Icon = session.icon;
                  
                  return (
                    <motion.div
                      key={sessionIndex}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: dayIndex * 0.3 + sessionIndex * 0.1 + 0.2 }}
                      className={`relative flex gap-6 ${
                        session.type === 'break' 
                          ? 'bg-gradient-to-r from-gray-50 to-gray-100' 
                          : 'bg-white'
                      } rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300`}
                    >
                      {/* Time Badge */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${
                          session.type === 'break' 
                            ? 'bg-gradient-to-br from-gray-200 to-gray-300' 
                            : 'bg-gradient-to-br from-primary/10 to-secondary/10'
                        }`}>
                          <Icon className={`w-8 h-8 ${
                            session.type === 'break' ? 'text-gray-600' : 'text-primary'
                          }`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Time and Title */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                              session.type === 'break' 
                                ? 'bg-gray-200 text-gray-700' 
                                : 'bg-primary/10 text-primary'
                            }`}>
                              {session.time}
                            </span>
                            <h4 className="text-xl font-bold text-gray-900">{session.title}</h4>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {session.description}
                        </p>

                        {/* Highlights */}
                        {session.highlights && (
                          <div className="flex flex-wrap gap-2">
                            {session.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="bg-accent/10 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              16 Horas de Conteúdo Intensivo
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Cada minuto foi cuidadosamente planejado para maximizar seu aprendizado
              e garantir a implementação prática em sua empresa
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Material Completo Incluso
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Coffee Breaks Premium
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Certificado de Participação
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
