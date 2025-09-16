"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "@/components/magicui/marquee";
import { AuroraText } from "@/components/magicui/aurora-text";

const testimonials = [
  {
    id: 1,
    name: "Joel",
    company: "Executivo em multinacional",
    position: "10+ anos de experiência",
    image: "/testimonial-1.jpg",
    rating: 5,
    testimonial:
      "Obrigado pelo evento, foi de muito aprendizado e reflexão. Levo para vida pessoal e profissional muitos insights para colocar em prática. Poucos treinamentos me fizeram refletir dessa forma.",
    result: "Alto impacto em reflexão e prática",
    beforeAfter: { before: "Baixa reflexão", after: "Alta clareza e ação" },
  },
  {
    id: 2,
    name: "Carlos",
    company: "Empresário - Programas Ekoant",
    position: "Participante",
    image: "/testimonial-2.jpg",
    rating: 5,
    testimonial:
      "Reduzi medicamentos, aumentei qualidade de vida e salvei meu casamento. Passei de 200mg de Sertralina + 4 Rivotril + 1 Quetiapina/dia para 50mg de Sertralina. Muito melhor em relação à ansiedade.",
    result: "Qualidade de vida e performance",
    beforeAfter: { before: "Alta ansiedade", after: "Equilíbrio e foco" },
  },
  {
    id: 3,
    name: "Amanda",
    company: "Ramo de consórcios",
    position: "Empresária",
    image: "/testimonial-3.jpg",
    rating: 5,
    testimonial:
      "Reativei sonhos e metas que já nem lembrava mais e saí com mais vontade de fazer acontecer.",
    result: "Reativação de metas",
    beforeAfter: { before: "Metas adormecidas", after: "Vontade de agir" },
  },
  {
    id: 4,
    name: "Gabriel",
    company: "Ello Solar",
    position: "Diretor Geral",
    image: "/testimonial-4.jpg",
    rating: 5,
    testimonial:
      "Abriu muitos horizontes na forma de pensar profissionalmente. A semente plantada crescerá e dará muitos frutos.",
    result: "Abertura de horizontes",
    beforeAfter: { before: "Rotina engessada", after: "Criação e inovação" },
  },
  {
    id: 5,
    name: "Ricardo",
    company: "CEO - Programas Ekoant",
    position: "Participante",
    image: "/testimonial-5.jpg",
    rating: 5,
    testimonial:
      "Reativou a chama do porquê comecei meu negócio e expandiu minha mente. Todos da empresa precisam viver o negócio não só pelo salário.",
    result: "Propósito e cultura",
    beforeAfter: { before: "Baixa conexão", after: "Cultura viva" },
  },
  {
    id: 6,
    name: "Equipe Ello Solar",
    company: "Case",
    position: "Time Comercial",
    image: "/testimonial-6.jpg",
    rating: 5,
    testimonial:
      "O pior mês virou recorde de vendas após aplicarmos o programa FLECHAS. Transformamos maio, historicamente o pior, no maior recorde de vendas da história.",
    result: "Recorde histórico de vendas",
    beforeAfter: { before: "Pior mês", after: "Maior recorde" },
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const gradients = [
    "from-fuchsia-500 via-violet-500 to-sky-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-rose-500 via-pink-500 to-orange-400",
    "from-amber-400 via-orange-500 to-red-500",
    "from-blue-500 via-sky-500 to-cyan-400",
    "from-lime-500 via-green-500 to-emerald-500",
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que dizem nossos <AuroraText className="font-extrabold">Participantes</AuroraText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de empresários que transformaram seus negócios
            aplicando nossas metodologias
          </p>
        </motion.div>

        {/* Testimonials Marquee - duas linhas, direções opostas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-6 relative">
            {/* Linha superior */}
            <Marquee className="h-auto" pauseOnHover duration={28} reverse>
              {testimonials
                .filter((_, i) => i % 2 === 0)
                .map((t, idx) => (
                  <div key={t.id} className="mx-4 w-[520px] shrink-0">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md h-full min-h-[220px]">
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`inline-block h-8 w-8 rounded-full bg-gradient-to-br ${gradients[idx % gradients.length]}`} />
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900 truncate">{t.name}</div>
                            <div className="text-xs text-gray-500 truncate">{t.position}</div>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-brand-1/90 text-right truncate max-w-[45%]">{t.company}</div>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700 whitespace-normal break-words">{t.testimonial}</p>
                    </div>
                  </div>
                ))}
            </Marquee>

            {/* Espaço entre as linhas */}
            <div className="h-6" />

            {/* Linha inferior (reversa) */}
            <Marquee className="h-auto" pauseOnHover duration={32}>
              {testimonials
                .filter((_, i) => i % 2 === 1)
                .map((t, idx) => (
                  <div key={t.id} className="mx-4 w-[520px] shrink-0">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md h-full min-h-[220px]">
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`inline-block h-8 w-8 rounded-full bg-gradient-to-br ${gradients[idx % gradients.length]}`} />
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900 truncate">{t.name}</div>
                            <div className="text-xs text-gray-500 truncate">{t.position}</div>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-brand-1/90 text-right truncate max-w-[45%]">{t.company}</div>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700 whitespace-normal break-words">{t.testimonial}</p>
                    </div>
                  </div>
                ))}
            </Marquee>

            {/* Fades laterais ampliados */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-white to-transparent" />
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-gray-600">Taxa de Satisfação</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">R$ 2.5M</div>
                <p className="text-gray-600">Receita Adicional Gerada</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">90 dias</div>
                <p className="text-gray-600">Tempo Médio para Resultados</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
