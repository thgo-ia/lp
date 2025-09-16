"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BackgroundGradient from "@/components/magicui/background-gradient";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function Cronograma() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const agenda = [
    { horario: "08h30", atividade: "Recepção | Abertura e Boas-vindas" },
    { horario: "09h00", atividade: "Início do Módulo 1 (Diagnóstico Empresarial)" },
    { horario: "10h00", atividade: "Módulo 2: Vendas de Alto Impacto (Parte 1)" },
    { horario: "12h00", atividade: "Coffee Break + Networking" },
    { horario: "12h40", atividade: "Módulo 3: Vendas de Alto Impacto (Parte 2)" },
    { horario: "15h00", atividade: "Perguntas & Respostas + Conexão, Networking e Vendas" },
  ];

  const timelineRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="cronograma" className="py-0 relative overflow-visible bg-gradient-to-b from-black via-slate-950 to-blue-950 text-white">
      <div className="relative h-[240vh] md:h-[220vh]">
        <div className="sticky top-0 z-20">
          {/* Conteúdo centralizado na viewport */}
          <div className="container mx-auto px-4 min-h-screen py-24 flex flex-col items-center justify-center" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Programação Completa
              </h2>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-sm">18 de Outubro</span>
              </div>
              <p className="text-base md:text-lg text-white/70 mt-3">Horários e atividades</p>
            </motion.div>

            {/* Card com Shine Border bem forte e contrastado */}
            <div className="w-full max-w-3xl">
              <ShineBorder
                rounded="rounded-3xl"
                thickness={0}
                duration={2}
                shineColors={[
                  "rgba(29,78,216,1)",  /* blue-700 */
                  "rgba(37,99,235,1)",  /* blue-600 */
                  "rgba(250,204,21,1)", /* amber-400 */
                  "rgba(2,132,199,1)",  /* sky-600 */
                ]}
                className="p-[3px]"
              >
                <div ref={timelineRef} className="relative bg-white text-gray-900 rounded-3xl p-4 md:p-6 supports-[backdrop-filter]:backdrop-blur-md">
                {/* Barra lateral verde animada (sem scroll progress) */}
                <div className="pointer-events-none absolute left-8 top-6 bottom-6 w-px bg-gray-200/60"></div>
                <motion.div
                  className="pointer-events-none absolute left-8 top-6 w-px origin-top bg-gradient-to-b from-emerald-400 to-emerald-600"
                  style={{ height: "calc(100% - 3rem)" }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <ol className="divide-y divide-gray-100">
                  {agenda.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: i * 0.05 + 0.2 }}
                      className="relative pl-14 md:pl-16 py-5"
                    >
                      {/* Marcador */}
                      <span
                        className={`absolute left-8 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full ring-4 ring-white shadow ${
                          ([0, 3] as number[]).includes(i) ? "bg-emerald-400" : "bg-emerald-600"
                        }`}
                      />
                      <div className="grid grid-cols-[90px_1fr] gap-4">
                        <time className="font-semibold text-gray-900">{item.horario}</time>
                        <p className="text-gray-700">{item.atividade}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
                </div>
              </ShineBorder>
            </div>

            {/* CTA removido a pedido - sem botão aqui */}
          </div>
        </div>
      </div>
    </section>
  );
}


