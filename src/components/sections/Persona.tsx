"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useRef } from "react";

export default function Persona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paraQuemE = [
    "Empresários com equipes de 12 a 100 colaboradores",
    "Líderes que sabem que há potencial não explorado no time",
    "Gestores frustrados com baixa produtividade",
    "Donos de negócio que trabalham DENTRO e não NO negócio",
    "Empreendedores que querem escalar sem depender 100% da própria presença",
  ];

  const paraQuemNaoE = [
    "Empresários satisfeitos com resultados medíocres",
    "Líderes que acreditam que 'problemas de pessoas' são normais",
    "Gestores que não estão dispostos a mudar sua forma de liderar",
    "Empreendedores que buscam soluções mágicas sem trabalho",
  ];

  const dores: string[] = [];
  const ganhos = [
    "Equipe 85% mais eficaz",
    "-35% no desengajamento",
    "Processos que funcionam sem você",
    "Cultura forte conectada ao propósito",
    "Liderança que multiplica resultados",
    "Time proativo que busca soluções",
  ];

  return (
    <section id="persona" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight flex items-center justify-center gap-4">
            <span className="text-emerald-700">Para quem é</span>
            <span aria-hidden className="relative inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-rose-500 text-white shadow-lg ring-4 ring-white/70">
              VS
            </span>
            <span className="text-rose-700">Para quem não é</span>
          </h2>
        </motion.div>

        {/* Comparativo: Para quem é VS Para quem não é */}
        <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Para quem é */}
          <motion.div initial={false} className="h-full">
            <ShineBorder className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-6 rounded-2xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="text-xl font-bold text-emerald-800">Para quem é</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-black">
                {paraQuemE.map((item, i) => (
                  <BlurFade key={i} delay={0.05 * i}>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600"></span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  </BlurFade>
                ))}
              </ul>
            </ShineBorder>
          </motion.div>

          {/* Para quem não é */}
          <motion.div initial={false} className="h-full">
            <ShineBorder className="bg-gradient-to-br from-rose-50 via-white to-rose-100 p-6 rounded-2xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-rose-600/10 text-rose-700 ring-1 ring-rose-600/20">
                  <X className="h-4 w-4" />
                </span>
                <h3 className="text-xl font-bold text-rose-800">Para quem não é</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-black">
                {paraQuemNaoE.map((item, i) => (
                  <BlurFade key={i} delay={0.05 * i}>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-600"></span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  </BlurFade>
                ))}
              </ul>
            </ShineBorder>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 max-w-6xl mx-auto bg-gradient-to-r from-emerald-50 to-rose-50 border border-primary/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold mb-4 text-black">Após o workshop você terá:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-black">
            {ganhos.map((g, i) => (
              <li key={i} className="flex gap-2">
                <span>🎯</span>
                <span className="font-medium">{g}</span>
              </li>
            ))}
          </ul>
          
        </motion.div>
      </div>
    </section>
  );
}


