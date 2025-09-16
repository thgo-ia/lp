"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEnd = window.innerHeight; // só aparece depois que a hero some por completo
      setIsScrolled(window.scrollY >= heroEnd);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    const event = new CustomEvent('openPreRegistration');
    window.dispatchEvent(event);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Conteúdo", href: "conteudo" },
    { label: "Preço", href: "pricing" },
    { label: "FAQ", href: "faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/75 backdrop-blur-md shadow-sm border-b border-gray-200/70' 
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Grupo esquerdo: Logo + Nav */}
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center"
              >
                <Image src="/logoekoantazul.png" alt="Logo Ekoant" width={120} height={28} className="w-24 h-auto" />
              </motion.div>

              {/* Desktop Navigation (ao lado da logo) */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-black hover:text-primary font-medium transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* CTA enxuta com PulsatingButton */}
            <div className="hidden lg:flex items-center">
              <PulsatingButton
                onClick={handleCTAClick}
                pulseColor="37, 99, 235"
                duration="2.2s"
                className="px-5 py-2 text-sm"
              >
                Comprar Ingresso
              </PulsatingButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-8 py-3">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-black hover:text-primary font-medium transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <PulsatingButton
                  onClick={handleCTAClick}
                  pulseColor="37, 99, 235"
                  duration="2.2s"
                  className="w-full py-3 text-center"
                >
                  Comprar Ingresso
                </PulsatingButton>
              </div>
            </nav>
          </div>
        </motion.div>
      </motion.header>

      {/* Spacer to prevent content overlap when header is visible */}
      <div className={isScrolled ? "h-12 lg:h-14" : "h-0"}></div>
    </>
  );
}
