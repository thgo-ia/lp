"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function Conteudo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modulos = [
    {
      titulo: "Módulo 1 - Papergia + DNA Ekoant (60min)",
      bullets: [
        "Mapeamento do DNA do seu negócio",
        "Identificação dos 'mortos-vivos' da folha de pagamento",
        "Análise de potencial não explorado",
      ],
    },
    {
      titulo: "Módulo 2 - Vendas, modelo de negócio e metodologia FLECHAS (120min)",
      bullets: [
        "Da conexão à conversão",
        "Inteligência relacional",
        "Transforme seu concorrente em seu maior aliado",
      ],
    },
    {
      titulo: "Módulo 3 - Liderança, MetAmorFase, VIDAS e ARCOS (120min)",
      bullets: [
        "Liderança > gestão",
        "Metas, causa e tensão",
        "Pessoas, processos e propósito",
      ],
    },
  ];

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="conteudo" className="pt-0 pb-0 bg-transparent relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Conteúdo Programático do Workshop
          </h2>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium ring-1 ring-blue-200">
              5 horas de imersão
            </span>
          </div>
          <p className="text-base text-gray-600 mt-2">Claro, direto ao ponto e fácil de acompanhar</p>
        </motion.div>

        {/* Grid legível: cards separados com leve movimento no scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {modulos.map((mod, i) => {
            const driftSets: Array<[number, number]> = [
              [-10, 6],
              [-6, 10],
              [-8, -2],
            ];
            const [fromY, toY] = driftSets[i % driftSets.length];
            const y = useTransform(scrollYProgress, [0, 1], [fromY, toY]);
            const title = `Módulo ${i + 1}`;
            const subtitle = mod.titulo.replace(/^M[óo]dulo\s*\d+\s*-\s*/i, "");
            const timeMatch = subtitle.match(/\(([^)]+)\)\s*$/);
            const timeLabel = timeMatch ? timeMatch[1] : undefined;
            const cleanSubtitle = subtitle.replace(/\s*\([^)]+\)\s*$/, "");
            const durations = [3.2, 2.6, 2.0];
            const shineDuration = durations[i % durations.length];
            return (
              <motion.div
                key={i}
                style={{ y, willChange: "transform" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2, margin: "-100px 0px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative h-full"
              >
                <ShineBorder
                  rounded="rounded-2xl"
                  className="bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                  color="rgba(29,78,216,0.95)"
                  duration={shineDuration}
                  thickness={3}
                >
                  <div className="relative rounded-2xl p-6 min-h-[280px] h-full flex flex-col">
                    <div className="flex items-center justify-between gap-3 bg-blue-50 text-blue-800 rounded-xl px-3 py-2 border border-blue-200">
                      <h3 className="text-sm md:text-base font-bold tracking-wide uppercase">{title}</h3>
                      {timeLabel && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 ring-1 ring-blue-200">
                          {timeLabel}
                        </span>
                      )}
                    </div>
                    <h4 className="mt-4 text-lg md:text-xl font-bold text-gray-900">{cleanSubtitle}</h4>
                    <ul className="mt-4 space-y-3 text-gray-700">
                      {mod.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-400"></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ShineBorder>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



