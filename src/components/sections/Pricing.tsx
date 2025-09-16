"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Progress } from "@/components/ui/progress";
import { Check, Star, Users, Gift, AlertCircle } from "lucide-react";
import WarpBackground from "@/components/magicui/warp-background";

const pricingTiers = [
  {
    id: 1,
    name: "Presencial (Itajaí-SC)",
    lotLabel: "Lote Zero",
    slotNote: "Apenas 4 vagas",
    originalPrice: 497,
    currentPrice: 129.97,
    discount: 74,
    totalSlots: 4,
    remainingSlots: 4,
    deadline: "Enquanto durar o Lote Zero",
    popular: true,
    features: [
      "Evento presencial para apenas 35 empresários",
      "5h de imersão transformadora",
      "Networking qualificado",
      "Certificado de participação",
      "Plano de ação prático",
    ],
    bonuses: [
      "Acesso VIP ao grupo de empresários",
    ]
  },
  {
    id: 2,
    name: "Online (Ao vivo)",
    lotLabel: "Lote Zero",
    slotNote: "Apenas 36 vagas",
    originalPrice: 197,
    currentPrice: 29.90,
    discount: 85,
    totalSlots: 36,
    remainingSlots: 36,
    deadline: "Enquanto durar o Lote Zero",
    popular: false,
    features: [
      "Transmissão ao vivo",
      "5h de conteúdo prático",
      "Plano de ação prático",
      "Certificado de participação digital",
    ],
    bonuses: [
      "Acesso VIP ao grupo de empresários",
    ]
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentLot] = useState(1);

  const handleCTAClick = (tierName: string) => {
    const event = new CustomEvent('openPreRegistration', { detail: { tier: tierName } });
    window.dispatchEvent(event);
  };

  const getProgressPercentage = (remaining: number, total: number) => {
    return ((total - remaining) / total) * 100;
  };

  return (
    <section id="pricing" className="relative overflow-hidden py-20">
      <WarpBackground className="py-4">
      <div className="container mx-auto px-4 py-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <AuroraText className="font-extrabold">Preço Especial de Lançamento</AuroraText>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gray-900 text-white shadow">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Lote Zero
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Não precisa ser muito experiente para saber: uma consultoria desse porte custaria R$ 15.000 a R$ 25.000.
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Por que é tão barato? Seu maior investimento aqui é o seu tempo. Quem não paga não se compromete, então o Lote Zero tem desconto massivo para formar um grupo seleto de empresários comprometidos.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const isCurrentLot = currentLot === tier.id;
            const isAvailable = tier.remainingSlots > 0;
            const progressPercentage = getProgressPercentage(tier.remainingSlots, tier.totalSlots);
            
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative transition-all duration-300 h-full ${!isAvailable ? 'opacity-60' : ''}`}
              >
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/50 via-accent/40 to-secondary/50 opacity-60 blur-[2px] group-hover:opacity-90 transition" />
                <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl p-8 h-full flex flex-col">
                  {/* Badges */}
                  <div className="absolute -top-4 left-4">
                    {tier.popular ? (
                      <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow">
                        <Star className="w-4 h-4 fill-current" /> MAIS PROCURADO
                      </div>
                    ) : isCurrentLot ? (
                      <div className="bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow">LOTE ATUAL</div>
                    ) : null}
                  </div>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-gray-900 text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {tier.lotLabel}
                      </span>
                      <span className="text-[12px] font-medium text-gray-600">{tier.slotNote}</span>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-5xl font-extrabold text-gray-900 leading-tight">
                        R$ {tier.currentPrice.toLocaleString('pt-BR')}
                      </div>
                      <span className="inline-block mt-1 text-gray-500 line-through text-base">
                        R$ {tier.originalPrice.toLocaleString('pt-BR')}
                      </span>
                      <span className="inline-block mt-2 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                        {tier.discount}% OFF
                      </span>
                      <div className="mt-2 text-sm text-gray-600">
                        Você economiza R$ {(tier.originalPrice - tier.currentPrice).toLocaleString('pt-BR')}
                      </div>
                    </div>

                    {/* Slots Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Vagas Disponíveis</span>
                        <span className="text-sm font-bold text-gray-900">
                          {tier.remainingSlots} de {tier.totalSlots}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2 bg-gray-100" />
                      {tier.remainingSlots <= 5 && tier.remainingSlots > 0 && (
                        <p className="text-red-600 text-sm font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Últimas vagas!
                        </p>
                      )}
                    </div>

                    <p className="text-sm text-gray-500">Válido até {tier.deadline}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4">O que está incluso:</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bonuses */}
                  {tier.bonuses.length > 0 && (
                    <div className="mb-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Gift className="w-5 h-5 text-accent" />
                        Bônus Exclusivos:
                      </h4>
                      <ul className="space-y-2">
                        {tier.bonuses.map((bonus, bonusIndex) => (
                          <li key={bonusIndex} className="flex items-start gap-3">
                            <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{bonus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleCTAClick(tier.name)}
                    disabled={!isAvailable}
                    className={`mt-auto w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white ${
                      isAvailable
                        ? 'bg-gradient-to-r from-[hsl(var(--brand-1))] to-[hsl(var(--brand-2))] hover:brightness-105 shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-400'
                    } ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {!isAvailable ? (
                      <>
                        <Users className="w-5 h-5 mr-2" />
                        Vagas Esgotadas
                      </>
                    ) : (
                      `Garantir Vaga - ${tier.name}`
                    )}
                  </Button>

                  {isAvailable && (
                    <p className="text-center text-gray-500 text-sm mt-3">
                      🔒 Pagamento 100% seguro
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/40 via-accent/30 to-secondary/40 opacity-60 blur-[2px]" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Garantia de Satisfação 100%
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Se após participar do workshop você não estiver 100% satisfeito com o conteúdo
              e não visualizar aplicações práticas para sua empresa, devolvemos seu investimento
              integral em até 7 dias.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Sem letra miúda
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Devolução rápida
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Risco zero para você
              </span>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
      </WarpBackground>
    </section>
  );
}
