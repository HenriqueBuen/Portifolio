"use client";

import dynamic from "next/dynamic";

// O { ssr: false } garante que o componente rode apenas no lado do cliente
const MotionParticles = dynamic(() => import("./src/motionParticles.jsx"), {
  ssr: false,
}); 

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center justify-center overflow-x-hidden">
      {/* Fundo rodando no cliente */}
      <MotionParticles />
    </main>
  );
} // <- Faltava fechar a chave da função aqui