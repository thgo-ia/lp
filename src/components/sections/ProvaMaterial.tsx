"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/magicui/card-3d";

export default function ProvaMaterial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cases = [
    {
      empresa: "Ello Solar",
      resultados: ["+185% faturamento", "+57% taxa de conversão"],
      img: "/img6.webp",
    },
    {
      empresa: "AITA",
      resultados: ["+54% faturamento", "-44% investimento em tráfego"],
      img: "/img7.jpg",
    },
    {
      empresa: "Okologie",
      resultados: ["Liderança descentralizada", "+ retenção", "-53% rotatividade"],
      img: "/img8.jpeg",
    },
  ];

  return (
    <section id="prova-material" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Cases com Resultados Reais
          </h2>
          <div className="mt-4 flex justify-center gap-2 flex-wrap order-1">
            {['+35% receita', '+39% satisfação', '+53% retenção de talentos'].map((t) => (
              <span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-800 ring-1 ring-blue-200 text-sm font-semibold">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">*Cases detalhados serão apresentados no workshop</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
            >
              <CardContainer>
                <CardBody className="h-[320px] flex flex-col">
                  <CardItem className="px-4 pt-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">{c.empresa}</h3>
                  </CardItem>
                  <CardItem className="px-4 mt-2">
                    <div className="w-full h-36 rounded-xl overflow-hidden">
                      <img src={c.img} alt={c.empresa} className="w-full h-36 object-cover" />
              </div>
                  </CardItem>
                  <CardItem className="px-4 pb-4 mt-3">
                    <div className="flex flex-wrap gap-2">
                      {c.resultados.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
              </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



