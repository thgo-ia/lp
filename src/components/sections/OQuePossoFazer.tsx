"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Blocks, Store } from "lucide-react";

export default function OQuePossoFazer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pilares = [
    {
      icon: Target,
      title: "Vendas Estratégicas",
      desc: "Transformar sua equipe em máquinas de conversão",
    },
    {
      icon: Users,
      title: "Liderança Ativadora",
      desc: "Despertar o potencial adormecido do seu time",
    },
    {
      icon: Blocks,
      title: "Cultura Organizacional",
      desc: "Criar conexão entre pessoas e propósito",
    },
    {
      icon: Store,
      title: "Modelo de Negócio",
      desc: "Definir como sua empresa se posiciona e se vende no mercado",
    },
  ];

  const saida = [
    "Mapa estratégico personalizado para seu negócio",
    "Ferramentas práticas para ativar sua equipe",
    "Metodologia comprovada para aumentar performance",
    "Rede de contatos com outros empresários transformadores",
  ];

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const headingOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const pillarDrifts: Array<[number, number]> = [
    [-8, 8],
    [-4, 10],
    [-10, 0],
    [-6, 6],
  ];

  return (
    <section id="o-que-eu-posso-fazer" className="relative py-24 md:py-28 overflow-hidden">
      {/* Background image full section */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(https://ekoant.com.br/wp-content/uploads/2025/09/TOPO-lp.webp)" }} />
      {/* Blue overlay to increase contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-950/60 via-blue-950/55 to-indigo-950/60" />

      <div className="container mx-auto px-4 min-h-[80vh] flex items-center" ref={ref}>
        <div className="w-full">
          {/* Cabeçalho centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            style={{ y: headingY, opacity: headingOpacity }}
            className="max-w-4xl mx-auto text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              O QUE EU POSSO FAZER COM ISSO?
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-200">
              Chega de conversa motivacional ou técnicas de vendas. Vamos mergulhar no DNA do seu negócio
              para conectar propósito, pessoas e processos de forma prática.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-200">4 pilares fundamentais:</p>
          </motion.div>

          {/* Desktop: timeline horizontal de 4 pilares */}
          <div className="relative hidden md:block mb-12 max-w-6xl mx-auto">
            <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-blue-300/60 via-blue-400/60 to-blue-500/60"></div>
            <div className="grid grid-cols-4 gap-6 text-center">
              {pilares.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: i * 0.05 + 0.2 }}
                    style={{ y: useTransform(scrollYProgress, [0, 1], pillarDrifts[i % pillarDrifts.length]) }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 backdrop-blur-sm">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 w-full rounded-xl p-4 shadow-xl bg-white/15 backdrop-blur-md border border-white/20 text-left text-white/90">
                      <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                      <p className="text-[13px] text-white/80 mt-1">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: timeline vertical */}
          <div className="md:hidden max-w-2xl mx-auto space-y-4">
            {pilares.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.4, delay: i * 0.05 + 0.15 }}
                  className="relative rounded-xl p-4 bg-white/15 backdrop-blur-md shadow-xl border border-white/20"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-blue-400 to-blue-600"></div>
                  <div className="flex items-start gap-3 pl-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-black ring-1 ring-blue-200">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                      <p className="text-[13px] text-white/80 mt-1">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Box: Em 5 horas intensivas (abaixo do timeline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto mt-12"
          >
            <div className="rounded-2xl bg-white p-6 shadow-2xl border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Em 5 horas intensivas, você sairá com:</h3>
              <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                {saida.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


