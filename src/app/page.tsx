"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Caminho from "@/components/sections/Caminho";
import Persona from "@/components/sections/Persona";
import Conteudo from "@/components/sections/Conteudo";
import Cronograma from "@/components/sections/Cronograma";
import ProvaMaterial from "@/components/sections/ProvaMaterial";
import Autoridade from "@/components/sections/Autoridade";
import Garantia from "@/components/sections/Garantia";
import Certificado from "@/components/sections/Certificado";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Reflexao from "@/components/sections/Reflexao";
import Footer from "@/components/sections/Footer";
import OQuePossoFazer from "@/components/sections/OQuePossoFazer";
import PreRegistrationModal from "@/components/modals/PreRegistrationModal";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp } from "lucide-react";
import StickyViewport from "@/components/ui/sticky-viewport";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  // Handle modal opening from different sections
  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      setSelectedTier(event.detail?.tier || "");
      setIsModalOpen(true);
    };

    window.addEventListener('openPreRegistration', handleOpenModal as EventListener);
    return () => {
      window.removeEventListener('openPreRegistration', handleOpenModal as EventListener);
    };
  }, []);

  // Handle scroll events for sticky button and scroll to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show sticky button after hero section
      setShowStickyButton(scrollY > heroHeight);
      
      // Show scroll to top after significant scroll
      setShowScrollTop(scrollY > heroHeight * 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exit intent detection
  useEffect(() => {
    let exitIntentShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentShown && !isModalOpen) {
        setShowExitIntent(true);
        exitIntentShown = true;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isModalOpen]);

  const handleStickyButtonClick = () => {
    setIsModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse no Workshop Lapidação Empresarial.', '_blank');
  };

  return (
    <main className="relative">
      {/* Header */}
      <Header />
      
      {/* Hero preso (pinned). */}
      <StickyViewport heightVh={220} zIndex={1}>
        <Hero />
      </StickyViewport>
      {/* Próxima seção sobe por cima do Hero */}
      <div className="relative z-10 -mt-[100vh]"><Caminho /></div>
      {/* O que eu posso fazer: pinned */}
      <StickyViewport heightVh={220} zIndex={2}>
        <OQuePossoFazer />
      </StickyViewport>
      {/* Persona + Conteúdo sobem juntas sobre OQuePossoFazer, sem sticky, mesmo background */}
      <section className="relative z-20 -mt-[100vh] py-24 md:py-28 bg-gradient-to-tr from-blue-50 via-white to-blue-100">
        <div className="relative">
          <Persona />
          <div className="mt-10 md:mt-14">
            <Conteudo />
          </div>
        </div>
      </section>
      <div className="relative z-10"><Cronograma /></div>
      {/* Cases (ProvaMaterial) sobrepondo o cronograma, como no efeito do Hero */}
      <div className="relative z-20 -mt-[100vh]"><ProvaMaterial /></div>
      <div className="relative z-10"><Autoridade /></div>
      <div className="relative z-10"><Garantia /></div>
      <div className="relative z-10"><Certificado /></div>
      <div className="relative z-10"><Testimonials /></div>
      <div className="relative z-10"><Pricing /></div>
      <div className="relative z-10"><FAQ /></div>
      <div className="relative z-10"><Reflexao /></div>
      <Footer />

      {/* Sticky CTA Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: showStickyButton ? 0 : 100, 
          opacity: showStickyButton ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-1/2 transform -translate-x-1/2 z-[80] bottom-[calc(env(safe-area-inset-bottom,0px)+88px)] md:bottom-6"
      >
        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-r from-[hsl(var(--brand-1))] to-[hsl(var(--brand-2))] opacity-30 blur-2xl" />
          <Button
            onClick={handleStickyButtonClick}
            size="lg"
            className="relative px-8 py-4 text-lg font-semibold rounded-full text-white shadow-[0_10px_30px_rgba(2,132,199,0.35)] ring-1 ring-[hsl(var(--brand-2))]/40 border border-transparent bg-gradient-to-r from-[hsl(var(--brand-1))] to-[hsl(var(--brand-2))] hover:brightness-105 transition-all duration-300 transform hover:scale-105"
          >
            Comprar Ingresso | Lote Zero
          </Button>
        </div>
      </motion.div>

      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed right-4 md:right-6 z-50 bottom-4 md:bottom-6"
      >
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 p-0"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 md:left-6 z-50 bottom-[calc(env(safe-area-inset-bottom,0px)+24px)] md:bottom-6"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="outline"
          className="w-12 h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 text-gray-600" />
        </Button>
      </motion.div>

      {/* Pre-Registration Modal */}
      <PreRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
      />

      {/* Exit Intent Modal */}
      <PreRegistrationModal
        isOpen={showExitIntent}
        onClose={() => setShowExitIntent(false)}
        selectedTier="Exit Intent - Oferta Especial"
      />

      {/* Global CSS for grid pattern */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </main>
  );
}
