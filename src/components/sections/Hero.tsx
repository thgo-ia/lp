"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [soldPercentage] = useState(65); // Placeholder de progresso
  const [loteLabel] = useState("Lote Zero");
  const [priceLabel] = useState("R$ 129,97");

  const handleCTAClick = () => {
    const event = new CustomEvent('openPreRegistration');
    window.dispatchEvent(event);
  };
  

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"></div>
        {/* Vignette radial suave */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)",
          }}
        ></div>
        {/* Degradês cruzados sutis */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/20 via-transparent to-black/20 mix-blend-multiply"></div>
      </div>

      {/* Giant background headline (double exposure feel) */}
      <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center">
        <div className="w-full px-4 md:px-8 text-center">
          {/* Stroke layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="tracking-tight leading-none text-transparent uppercase -mb-4 md:-mb-8"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.08)",
              fontWeight: 900,
              fontSize: "clamp(48px, 12vw, 180px)",
            }}
          >
            Do Caos à Precisão
          </motion.div>
          {/* Fill layer with blend */}
          <motion.div
            animate={{ y: [0, -6, 0], opacity: [0.06, 0.1, 0.06] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="tracking-tight leading-none text-white/5 mix-blend-overlay uppercase blur-[0.5px]"
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 12vw, 180px)",
            }}
          >
            Do Caos à Precisão
          </motion.div>
        </div>
      </div>

      {/* Top Row (aligned to container) */}
      <div className="absolute top-6 left-0 right-0 z-10">
        <div className="container mx-auto px-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Image
              src="/logoekoantebranca.png"
              width={180}
              height={40}
              alt="Logo Ekoant"
              priority
              className="w-32 md:w-40 h-auto opacity-90"
            />
            <div className="text-white/90 text-sm md:text-base pr-1 lg:pr-0">
              <span className="font-semibold">18 de Outubro</span> | Presencial e Online
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-end min-h-[80vh]">
          {/* Left: Title + Progress + CTA */}
          <div className="lg:col-span-6 flex flex-col justify-end min-h-[60vh] self-end pb-6 pl-0">
            {/* Progress */}
            <div className="max-w-xs md:max-w-sm mb-6">
              <div className="w-full h-2 bg-white/15 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-white/70 to-white"
                  style={{ width: `${soldPercentage}%` }}
                />
                {/* shimmer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="h-full w-20 bg-white/20 blur-md -skew-x-12 animate-[shimmer_1.8s_ease-in-out_infinite]" />
                </div>
              </div>
              <div className="mt-2 text-white/80 text-xs md:text-sm">
                {soldPercentage}% das vagas preenchidas à {priceLabel}
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h1 className="text-white font-bold leading-tight text-5xl md:text-6xl xl:text-7xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                WORKSHOP
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                  LAPIDAÇÃO
                </span>
                <span className="block text-4xl md:text-5xl">EMPRESARIAL</span>
              </h1>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="relative overflow-hidden bg-white text-black hover:bg-white/90 px-6 py-6 rounded-2xl text-base md:text-lg font-semibold shadow-2xl border border-transparent"
              >
                Comprar Ingresso | {loteLabel}
                {/* shine */}
                <motion.span
                  initial={{ x: -100 }}
                  animate={{ x: [ -100, 200 ] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12"
                />
                {/* Border Beam */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(#fff,transparent,transparent,#fff)]">
                  <span className="absolute -inset-px rounded-2xl blur-sm bg-[conic-gradient(from_0deg,theme(colors.primary.DEFAULT)_0%,theme(colors.ring)_25%,theme(colors.brand-3)_50%,theme(colors.primary.DEFAULT)_100%)] opacity-70"></span>
                </span>
              </Button>
            </div>
          </div>

          {/* Right: Short description */}
          <div className="lg:col-span-6 flex items-end self-end pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 max-w-lg ml-auto pr-2 md:pr-0 mb-4 md:mb-10"
            >
              <p className="text-base md:text-lg leading-relaxed">
                Um mergulho de 5 horas no DNA do seu negócio para estruturarmos juntos um mapa para despertar os mortos-vivos da sua folha de pagamento e transformá-los em máquinas de resultado, despertando o que é mais importante:
                {" "}
                <span className="inline-block font-extrabold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)] animate-pulse">
                  O SEU PROPÓSITO
                </span>
              </p>
              <div className="mt-4 text-sm text-white/70">[EmptyView] Inserir imagem/vídeo hero final</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <div className="w-7 h-12 rounded-full border-2 border-white/30 flex justify-center items-start p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating animated shapes for dynamism */}
      <motion.div
        className="absolute -left-10 top-24 w-24 h-24 rounded-full bg-white/8 blur-2xl"
        animate={{ y: [0, 30, 0], x: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 bottom-28 w-32 h-32 rounded-full border border-white/10"
        animate={{ rotate: [0, 180, 360], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
