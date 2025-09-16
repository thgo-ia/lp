"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Award, Calendar } from "lucide-react";

const statistics = [
  {
    icon: Users,
    value: "500+",
    label: "Empresas Transformadas",
    description: "Já ajudamos mais de 500 empresas a multiplicarem seus resultados",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "ROI Médio",
    description: "Retorno médio sobre investimento após aplicar nossas metodologias",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfação",
    description: "Taxa de satisfação dos participantes que recomendam o workshop",
  },
  {
    icon: Calendar,
    value: "15+",
    label: "Anos de Experiência",
    description: "Mais de uma década lapidando empresas para o sucesso",
  },
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resultados que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Comprovam
            </span>{" "}
            a Eficácia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números reais de empresas que aplicaram nossas metodologias e
            transformaram seus negócios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-3"
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Seja a Próxima Empresa de Sucesso
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Junte-se a centenas de empresários que já transformaram seus negócios
              com nossas metodologias comprovadas
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Metodologias Exclusivas
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Suporte Contínuo
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Resultados Garantidos
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
