import React from 'react'
import calendario from "../assets/calendario.png"
import local from "../assets/local.jpg"

export default function projects() {
  return (
    <div className="w-full h-auto relative overflow-hidden flex items-center justify-center gap-8 flex-col mt-32">
      <h1 className="text-xl font-bold text-white">Projects</h1>
      {/* Container Projects cards*/}
      <div className="w-full h-full flex flex-col items-center justify-center gap-8 sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
      {/* Project 1 */}
      <div href="https://github.com/HenriqueBuen/analise-gastos-cartao" className="w-auto flex items-center justify-center gap-8 flex-col hover:scale-105 hover:border-cyan-300 border transition-transform cursor-pointer">
        {/* Card, titulo, tag, descrição, data e local */}
        <div className="flex flex-row border border-white/20 p-6 h-[21vh] rounded-lg shadow-lg bg-black/20">
          <div className="flex flex-col items-start gap-1 mr-8">
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-white font-bold">Análise de Gastos Cartão</h2>
                <div className="p-1 border border-cyan-400 rounded-full h-5 flex items-center justify-center gap-1">
                  <h1 className="text-cyan-400 font-bold text-xs">current</h1>
                </div>
              </div>
            <p className="text-gray-400 max-w-xs break-all">Projeto de análise exploratória para entender padrões de consumo e identificar oportunidades de controle financeiro pessoal.</p>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div href="https://github.com/HenriqueBuen/ParkVision" className="w-auto flex items-center justify-center gap-8 flex-col hover:scale-105 hover:border-cyan-300 border transition-transform cursor-pointer">
        <div className="flex flex-row border border-white/20 p-6 rounded-lg shadow-lg bg-black/20">
          <div className="flex flex-col items-start gap-1 mr-8">
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-white font-bold">ParkVision</h2>
                <div className="p-1 border border-cyan-400 rounded-full h-5 flex items-center justify-center gap-1">
                  <h1 className="text-cyan-400 font-bold text-xs">current</h1>
                </div>
              </div>
            <p className="text-gray-400 max-w-xs break-all">Um projeto de visão computacional que usa OpenCV e NumPy para detectar vagas de estacionamento livres ou ocupadas em vídeos em tempo real, aplicando técnicas práticas de análise de imagens.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
