"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Banner from "./banner.jsx";
import ExtraInfo from "./extraInfo.jsx";
import Stacks from "./stacks.jsx";
import Form from "./form.jsx";
import Projects from "./projects.jsx";

export default function ParticlesTest() {
  // Em JS, não usamos o <Particle[]>
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Gerando as partículas sem anotações de tipo
    const generatedParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      moveX: (Math.random() - 0.5) * 200,
      moveY: (Math.random() - 0.5) * 200,
      duration: Math.random() * 3 + 2,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* 1. SEÇÃO SOBRE MIM (Amarela) - Substituído por min-h e adicionado padding vertical */}
      <div className="w-full h-screen flex items-center justify-center gap-8 md:flex-row flex-col">
        <Banner />
        <ExtraInfo />
      </div>

      {/* 3. SEÇÃO FERRAMENTAS - Removido mt-16 para não criar um vão preto antes do fundo */}
      <div className="w-full relative flex items-center justify-center gap-8 md:flex-row flex-col ">
        <Stacks />
      </div>

      {/* 4. SEÇÃO FORMAÇÃO - Adicionado py-20 para espaçamento interno idêntico */}
      <div className="w-full relative flex items-center justify-center gap-8 md:flex-row flex-col ">
        <Form />
      </div>

      {/* 5. SEÇÃO PROJETOS */}
      <div className="w-full relative flex items-center justify-center gap-8 md:flex-row flex-col">
        <Projects />
      </div>

      {/* footer */}
      <div className="w-full h-auto relative flex items-center justify-center gap-8 md:flex-row flex-col mt-16">

      </div>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400 opacity-70"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            boxShadow: "0 0 8px rgba(34, 211, 238, 0.6)",
          }}
          animate={{
            x: particle.moveX,
            y: particle.moveY,
            scale: [1, 1.5, 0],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}