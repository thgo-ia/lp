"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  ExternalLink
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCTAClick = () => {
    const event = new CustomEvent('openPreRegistration');
    window.dispatchEvent(event);
  };

  const quickLinks = [
    { label: "Sobre o Workshop", href: "about" },
    { label: "Cronograma", href: "timeline" },
    { label: "Depoimentos", href: "testimonials" },
    { label: "Investimento", href: "pricing" },
    { label: "FAQ", href: "faq" },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com/workshoplapidacao", 
      label: "Instagram" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/workshop-lapidacao", 
      label: "LinkedIn" 
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/@workshoplapidacao", 
      label: "YouTube" 
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - CTA */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Pronto para{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Transformar
                  </span>{" "}
                  sua Empresa?
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Garante sua vaga agora e comece a jornada de transformação empresarial
                </p>
                <button
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Garantir Minha Vaga Agora
                </button>
              </motion.div>

              {/* Right Side - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefone / WhatsApp</p>
                    <p className="text-lg font-semibold">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-lg font-semibold">contato@workshop-lapidacao.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Local do Evento</p>
                    <p className="text-lg font-semibold">São Paulo - SP</p>
                    <p className="text-sm text-gray-400">Hotel 5 estrelas • Faria Lima</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logoekoantazul.png" alt="Logo Ekoant" width={140} height={32} className="w-36 h-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Somos especialistas em transformação empresarial com mais de 15 anos de experiência 
                ajudando empresas a alcançarem resultados extraordinários através de metodologias 
                comprovadas e inovadoras.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-yellow-400/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/privacidade" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    Política de Privacidade
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="/termos" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    Termos de Uso
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="/cancelamento" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    Política de Cancelamento
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 mt-8 pt-8 text-center"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
              © {currentYear} Workshop Lapidação Empresarial. Feito com 
              <Heart className="w-4 h-4 text-red-500 fill-current" /> 
              para transformar empresas.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              CNPJ: 12.345.678/0001-90 • Todos os direitos reservados
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
