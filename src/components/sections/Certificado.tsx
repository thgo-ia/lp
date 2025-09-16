"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Certificado() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificado" className="py-0">
      {/* Seção removida conforme solicitado */}
      <div ref={ref}></div>
    </section>
  );
}



