import React from 'react'

export default function ExtraInfo() {
  return (
    
    <div className="w-full h-96 gap-y-10 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 flex flex-col justify-center items-center sm:w-[90%] md:w-[50%] lg:w-[30%] sm:items-center md:items-start lg:items-start">
      {/* Extra Information, story, New src e foco atual */ }
        <div className="justify-center items-center flex flex-col gap-2 sm:items-center md:items-start lg:items-start">
            <h2 className="text-xl font-bold text-amber-50 px-4">Sobre mim</h2>
            <p className="text-amber-50 text-center text-md px-4 sm:text-sm md:text-md lg:text-lg sm:text-start md:text-center lg:text-left">Estudante de Banco de Dados em busca de estágio na área de dados. Possui experiência prática em coleta, tratamento e
              visualização de dados adquirida em ambiente corporativo, incluindo criação de dashboards no Power BI e Excel Avançado, análise
              exploratória de dados do ERP SAP e consultas SQL em MySQL, PostgreSQL e SQL Server. Complementa o perfil com background
              em suporte de TI, o que permite compreender os sistemas na origem dos dados. Perfil analítico, proativo e com facilidade de
              comunicação com áreas de negócio.</p>
        </div>
         { /* <SquareDetail /> comitado para ser reutilizado caso necessário */  }
        <div className="bg-black/20 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl text-white">
            <h2 className="text-lg font-medium text-cyan-300">Foco Atual:</h2>
            <p className="text-amber-50">Em Busca de estágio em Dados</p>
        </div>
    </div>
  )
}
