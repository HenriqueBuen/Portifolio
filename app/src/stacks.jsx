import React from 'react'
// 1. Importação do componente do Next.js que faltava
import Image from 'next/image' 

import PythonIcon from '../assets/python.png'
import AwsIcon from '../assets/aws.png'
import SqlIcon from '../assets/mysql.png'
import PowerBIIcon from '../assets/new_Power_BI_Logo.svg.png'
import ServerSQLIcon from '../assets/servidor-sql.png'
import ExcelIcon from '../assets/folhas.png'
import linuxIcon from '../assets/linux.png'
import githubIcon from '../assets/github.png'

// Boa prática: Componentes em React devem começar com letra Maiúscula (Stacks)
export default function Stacks() {
  return (
        <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-white">Ferramentas e Tecnologias</h2>
          
          {/* Grid responsivo ajustado */}
          <div className="grid gap-4 border border-white/20 p-6 rounded-lg shadow-lg bg-black/20 grid-cols-1 sm:grid-cols-2 w-full">
            
            {/* Python */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={PythonIcon} alt="Python" width={36} height={36} className="w-9 h-9" /> Python 
            </div>
            
            {/* AWS */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={AwsIcon} alt="AWS" width={36} height={36} className="w-9 h-9" /> AWS Cloud 
            </div>
            
            {/* MySQL */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={SqlIcon} alt="SQL" width={36} height={36} className="w-9 h-9" /> MySQL 
            </div>
            
            {/* Power BI */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={PowerBIIcon} alt="Power BI" width={36} height={36} className="w-9 h-9" /> Power BI 
            </div>
            
            {/* SQL */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={ServerSQLIcon} alt="SQL" width={36} height={36} className="w-9 h-9" /> SQL Server
            </div>
            
            {/* Excel */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={ExcelIcon} alt="Excel" width={36} height={36} className="w-9 h-9" /> Excel 
            </div>
            
            {/* Linux */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={linuxIcon} alt="Linux" width={36} height={36} className="w-9 h-9" /> Linux 
            </div>
            
            {/* GitHub */}
            <div className="border border-white/20 p-4 w-full rounded-lg shadow-lg hover:border-cyan-300 flex flex-row justify-center items-center gap-2 hover:scale-105 transition-transform text-white"> 
              <Image src={githubIcon} alt="GitHub" width={36} height={36} className="w-9 h-9" /> GitHub/Git 
            </div>

          </div>
        </div>
  )
}