"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Clock, MapPin, Coffee, FileText, Users, CreditCard, Award, Phone } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";

const faqData = [
  {
    id: "porte-empresa",
    icon: Users,
    question: "O workshop é adequado para empresas de qualquer porte?",
    answer:
      "É ideal para empresas com 12 a 100 colaboradores que querem escalar de forma estruturada.",
  },
  {
    id: "online-presencial",
    icon: MapPin,
    question: "Posso participar online e ter os mesmos resultados?",
    answer:
      "Sim! O conteúdo é o mesmo. A diferença é no networking presencial e dinâmicas de grupo.",
  },
  {
    id: "aplicacao-ferramentas",
    icon: FileText,
    question: "E se eu não conseguir aplicar as ferramentas?",
    answer:
      "Oferecemos 30 dias de suporte por WhatsApp para tirar dúvidas de implementação.",
  },
  {
    id: "material-apoio",
    icon: FileText,
    question: "Há material de apoio?",
    answer:
      "Sim! Todos recebem workbook digital, templates e acesso ao grupo VIP.",
  },
  {
    id: "levar-equipe",
    icon: Users,
    question: "Posso levar membros da minha equipe?",
    answer:
      "O evento é exclusivo para empresários. Presencial: limitado a 1 ingresso por empresa (podendo comprar mais 1 para sócio). Online: compre 1 ingresso e assista com sua equipe.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <AuroraText className="font-extrabold">Perguntas frequentes</AuroraText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o Workshop Lapidação Empresarial.
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => {
              const Icon = faq.icon;
              
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <AccordionItem 
                    value={faq.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-gray-50 transition-colors duration-300">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-gray-900 text-lg">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="ml-14 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Bottom Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre o workshop
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                WhatsApp: (11) 99999-9999
              </a>
              <a
                href="mailto:contato@workshop-lapidacao.com"
                className="text-primary hover:text-primary-600 font-semibold transition-colors duration-300"
              >
                contato@workshop-lapidacao.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
