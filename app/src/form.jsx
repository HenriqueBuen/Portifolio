import React from 'react'
// 1. IMPORTAÇÃO DO NEXT/IMAGE QUE ESTAVA FALTANDO
import Image from 'next/image' 

import correct from '../assets/correct.png'
import calendario from "../assets/calendario.png"

// 2. BOA PRÁTICA: Nome do componente com a primeira letra maiúscula (Form)
export default function Form() {
  return (
    <div className="w-full relative bg-neutral-950 overflow-hidden flex flex-col items-center justify-center gap-8 mt-32">
      <h1 className="text-xl font-bold text-white"> Formação </h1>
      
      {/* Container Card */}
      <div className="w-full h-full p-2 flex items-center justify-center gap-8 flex-col md:flex-row max-w-4xl px-4">
        
        {/* Card - Concluído */}
        <div className="w-full md:w-1/2 border border-white/20 p-6 rounded-lg shadow-lg bg-neutral-950 opacity-70 hover:border-green-400 hover:scale-105 transition-transform">
          <div className="text-white font-bold flex flex-row rounded-4xl bg-neutral-950 p-1 items-center gap-4 w-max mb-4">
            <div className="text-white font-bold flex flex-row border-green-400 border rounded-4xl bg-neutral-950 p-1 items-center gap-2 w-max">
              {/* CORREÇÃO DA IMAGEM: Removido .src e adicionado width/height */}
              <Image src={correct} alt="Sucesso" width={12} height={12} className="w-3 h-3"/>
              <h3 className="text-white text-xs">CONCLUÍDO</h3>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-xs">12/2023</p>
              {/* CORREÇÃO DA IMAGEM */}
              <Image src={calendario} alt="Calendário" width={16} height={16} className="w-4 h-4"/>
            </div>
          </div>
          <h2 className="text-white font-bold text-lg"> Análise e Desenvolvimento de Sistemas </h2>
          <p className="text-green-400 text-sm"> Universidade Cruzeiro do Sul </p>
        </div>

        {/* Card - Em Andamento */}
        <div className="w-full md:w-1/2 border border-white/20 p-6 rounded-lg shadow-lg bg-neutral-950 opacity-70 hover:border-yellow-400 hover:scale-105 transition-transform">
          <div className="text-white font-bold flex flex-row rounded-4xl bg-neutral-950 p-1 items-center gap-4 w-max mb-4">
            <div className="text-white font-bold flex flex-row border-yellow-400 border rounded-4xl bg-neutral-950 p-1 items-center gap-2 w-max">
              <h3 className="text-white text-xs">EM ANDAMENTO</h3>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-xs">12/2028</p>
              {/* CORREÇÃO DA IMAGEM */}
              <Image src={calendario} alt="Calendário" width={16} height={16} className="w-4 h-4"/>
            </div>
          </div>
          <h2 className="text-white font-bold text-lg"> Banco de Dados </h2>
          <p className="text-yellow-400 text-sm"> Estácio </p>
        </div>

      </div>
    </div>
  )
}