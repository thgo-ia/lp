"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Autoridade() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bullets = [
    "+15 anos em Vendas e Liderança",
    "Especialista em Inteligência Empresarial e Comercial",
    "Criador da Metodologia Lapidação Empresarial e FLECHAS",
    "Host do Podcast Lapidação",
    "200+ empresas transformadas • R$ 50M+ em resultados",
    "Metodologia testada em múltiplos segmentos e 6 estados",
    "95% clientes reportam +produtividade • 120% +performance • -45% rotatividade • ROI 400%/12m",
  ];

  const highlights = bullets.slice(0, bullets.length - 1);
  const stats = [
    { value: "95%", label: "+produtividade" },
    { value: "120%", label: "+performance" },
    { value: "-45%", label: "rotatividade" },
    { value: "400%", label: "ROI/12m" },
  ];

  return (
    <section id="autoridade" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Seu Mentor: <AuroraText className="font-extrabold">Jhonatan Mateus</AuroraText>
          </h2>
          <p className="text-lg text-gray-600 mt-2">CEO e Fundador da Ekoant • Especialista em Lapidação Empresarial</p>
        </motion.div>

        {/* Nova composição: tópicos destacados à esquerda, imagens à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto items-stretch">
          {/* Tópicos / experiência */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experiência e resultados</h3>
              <ul className="grid grid-cols-1 gap-3 text-gray-800">
                {highlights.map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

              {/* Clientes reportam (cards estruturados) */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Clientes reportam</h4>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((s, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                      <div className="text-2xl font-extrabold text-blue-800">{s.value}</div>
                      <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
        </div>

              {/* Botão para o YouTube */}
              <div className="mt-6">
                <a
                  href="https://www.youtube.com/@EkoantEduca%C3%A7%C3%A3oExpans%C3%A3o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold shadow-md transition-colors duration-200"
                >
                  Ir para o canal no YouTube
                </a>
              </div>
            </div>
          </motion.div>

          {/* Galeria de imagens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <img src="/img3.jpg" alt="Foto profissional do Jhonatan" className="w-full h-64 md:h-72 object-cover" />
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <img src="/img2.png" alt="Podcast com convidados" className="w-full h-64 md:h-72 object-cover" />
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden sm:col-span-2">
                <img src="/img4.jpg" alt="Logos e Manual de Identidade" className="w-full h-64 md:h-72 object-cover" />
              </div>
          </div>
          </motion.div>
        </div>

        {/* Removido bloco de imagem do YouTube; CTA já foi movido acima */}
      </div>
    </section>
  );
}



