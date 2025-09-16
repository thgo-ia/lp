"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, BadgeCheck } from "lucide-react";

export default function Garantia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="garantia" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Garantia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col bg-white/95 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition min-h-[260px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Garantia Incondicional</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Se após participar do workshop você não acreditar que as ferramentas apresentadas podem
              transformar sua empresa, devolvemos <strong>200% do seu investimento</strong>. Nós devolvemos o seu
              dinheiro e pagamos pelo seu tempo.
            </p>
            {/* CTA removida conforme solicitado */}
          </motion.div>

          {/* Certificação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col bg-white/95 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition min-h-[260px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <BadgeCheck className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Certificação Oficial</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2"><span>📜</span> Certificado de Participação no Workshop Lapidação Empresarial</li>
              <li className="flex items-start gap-2"><span>🎯</span> Plano de Ação para implementação</li>
              <li className="flex items-start gap-2"><span>🤝</span> Acesso VIP ao grupo exclusivo de empresários</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



