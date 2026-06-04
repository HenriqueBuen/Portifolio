import React from 'react'

export default function ExtraInfo() {
  return (
    
    <div className="w-full h-96 gap-y-5 flex flex-col justify-center items-start sm:w-[90%] md:w-[50%] lg:w-[30%]">
      {/* Extra Information, story, New src e foco atual */ }
        <div className="justify-center items-start flex flex-col gap-2">
            <h2 className="text-xl font-bold text-amber-50">Sobre mim</h2>
            <p className="text-amber-50 max-w-md break-all ">Estudante de Banco de Dados em busca de estágio na área de dados. Possui experiência prática em coleta, tratamento e
              visualização de dados adquirida em ambiente corporativo, incluindo criação de dashboards no Power BI e Excel Avançado, análise
              exploratória de dados do ERP SAP e consultas SQL em MySQL, PostgreSQL e SQL Server. Complementa o perfil com background
              em suporte de TI, o que permite compreender os sistemas na origem dos dados. Perfil analítico, proativo e com facilidade de
              comunicação com áreas de negócio.</p>
        </div>
         { /* <SquareDetail /> comitado para ser reutilizado caso necessário */  }
        <div className="bg-black/20 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl text-white">
            <h2 className="text-lg font-medium text-cyan-300">Foco Atual:</h2>
            <p className="text-amber-50">Em Busca de estágio em Dados</p>
        </div>
    </div>
  )
}
