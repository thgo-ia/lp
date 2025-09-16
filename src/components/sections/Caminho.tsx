"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, RefreshCw, Users, AlertTriangle, CircleDollarSign, Factory } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { Meteors } from "@/components/ui/meteors";

export default function Caminho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bullets = [
    {
      icon: Users,
      title: "Apenas 16% dos funcionários estão comprometidos",
      body:
        "Isso significa que 84% da sua equipe pode estar operando no modo 'automático', fazendo apenas o mínimo necessário.",
      source: "Fonte: Great Place to Work Brasil (2024)",
    },
    {
      icon: RefreshCw,
      title: "Maior rotatividade do mundo: 51,3% (CAGED)",
      body:
        "O Brasil possui a maior taxa de rotatividade do mundo, custando milhões às empresas brasileiras em recontratações e treinamentos.",
      source:
        "Fonte: Cadastro Geral de Empregados e Desempregados (CAGED)",
    },
    {
      icon: TrendingUp,
      title: "Propósito ativado = performance",
      body:
        "Propósito conectado à missão aumenta eficiência (85%), produtividade (31%) e inovação (300%).",
      source: "Fonte: Principais Estatísticas de RH 2024",
    },
    {
      icon: AlertTriangle,
      title: "Quiet quitting tem cura",
      body:
        "75% relataram quiet quitting. Com propósito claro, metas vivas e liderança estratégica, o 'básico' vira proatividade.",
      source: "Fonte: Índice Engaja S/A 2024",
    },
    {
      icon: CircleDollarSign,
      title: "Desengajamento custa caro",
      body:
        "9% do PIB global se perde com desengajamento. No Brasil, 67% com estresse. Reconhecimento reduz até 35%.",
      source: "Fonte: Wellhub - Dados de RH 2024",
    },
    {
      icon: Factory,
      title: "Produtividade em queda?",
      body:
        "Indústria caiu 1,3% (1º tri/24). Sem liderança ativadora, processos claros e cultura forte, produtividade e receita caem.",
      source:
        "Fonte: Confederação Nacional da Indústria (CNI) - Agosto/2024",
    },
  ];

  const renderTextWithHighlights = (text: string, numberClass?: string) => {
    const parts = text.split(/(\b\d+[\d\.,]*%?\b)/g);
    const defaultNumberClass = "font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent";
    const cls = numberClass || defaultNumberClass;
    return (
      <>
        {parts.map((p, i) =>
          /\d/.test(p) ? (
            <span key={i} className={cls}>
              {p}
            </span>
          ) : (
            <span key={i}>{p}</span>
          )
        )}
      </>
    );
  };

  // No horizontal scroll hooks (using Bento Grid now)

  return (
    <section id="caminho" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A Estatística é <span className="text-red-600">ALARMANTE</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Você provavelmente vive isso todos os dias. Aqui está o que os dados
            mostram.
          </p>
        </motion.div>

        {/* Primeiras duas boxes (fixas acima) */}
        <div className="relative max-w-6xl mx-auto bg-red-50/40 rounded-3xl p-4 md:p-6 ring-1 ring-red-100/60 mb-6 overflow-hidden">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold uppercase tracking-wide">
              Dados críticos
            </span>
          </div>
          {/* Meteors - efeito apenas na caixa vermelha */}
          <div className="pointer-events-none absolute inset-0">
            <Meteors number={28} className="opacity-70 bg-rose-400 before:from-rose-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {bullets.slice(0, 2).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.05 + 0.2 }}
                className="relative rounded-2xl p-5 md:p-6 bg-white shadow-lg ring-1 ring-black/5 overflow-hidden group hover:shadow-2xl hover:ring-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Accent stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary"></div>
                {/* Soft background pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_0,black_2px,transparent_2px)] bg-[length:20px_20px]"></div>
                {/* Icon */}
                <div className="relative z-10 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-black ring-1 ring-black/20">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                {/* Content */}
                <h3 className="relative z-10 text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {renderTextWithHighlights(item.title, "font-extrabold text-red-600")}
                </h3>
                <p className="relative z-10 text-sm md:text-[15px] text-gray-700 leading-6 mb-2">
                  {renderTextWithHighlights(item.body, "font-extrabold text-red-600")}
                </p>
                <p className="relative z-10 text-[11px] text-gray-500 italic">
                  {item.source}
                </p>
                {/* Glow on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-secondary/20 blur"></div>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto mt-12">
          <h3 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Como isso é possível?
          </h3>
          <BentoGrid>
            {bullets.slice(2).map((item, index) => {
              const Icon = item.icon;
              // Layout pattern to mimic creative bento mosaic
              const spanMap = [
                "",                 // 1:1
                "",                 // 1:1
                "md:row-span-2",    // 1:2 (tall)
                "md:col-span-2",    // 2:1 (wide)
              ] as const;
              const span = spanMap[index % spanMap.length];
              return (
                <BentoCard
                  key={index}
                  className={span}
                  variant={index}
                  icon={
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-black ring-1 ring-black/20">
                      <Icon className="w-5 h-5" />
                    </div>
                  }
                  title={item.title}
                  description={item.body}
                  footer={<p className="text-xs italic opacity-80">{item.source}</p>}
                />
              );
            })}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}


