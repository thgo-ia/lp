"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Reflexao() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reflexao" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A decisão que define o futuro da sua empresa
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Você tem duas opções: continuar com os mesmos resultados de sempre ou investir 5 horas para transformar seus "mortos-vivos" em máquinas de resultado.
          </p>
          <p className="text-gray-600">
            66% dos trabalhadores consideraram deixar seus empregos nos últimos 3 meses. Empresas com equipes engajadas têm 21% mais lucratividade. O que você vai decidir?
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}




