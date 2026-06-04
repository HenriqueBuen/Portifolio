import React from 'react'
import Image from 'next/image'
// Importando o componente de Link nativo do Next.js
import Link from 'next/link' 

import iconGmail from '../assets/gmail.png'
import iconLinkedin from '../assets/linkedin.png'
import iconGithub from '../assets/github.png'

// Boa prática: Primeira letra maiúscula
export default function Tags() {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      
      {/* Tag Gmail */}
      <Link 
        href="mailto:henrique.bueno2311@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-black/20 text-white/70 border border-white/20 rounded-md text-sm font-medium hover:scale-105 hover:border-cyan-300 transition-transform cursor-pointer flex items-center justify-center"
      >
        <Image src={iconGmail} alt="Gmail" width={24} height={24} className="w-6 h-6" />
      </Link>

      {/* Tag Linkedin */}
      <Link 
        href="https://linkedin.com/in/henrique-buen" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-black/20 text-white/70 border border-white/20 rounded-md text-sm font-medium hover:scale-105 hover:border-cyan-300 transition-transform cursor-pointer flex items-center justify-center"
      >
        <Image src={iconLinkedin} alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
      </Link>

      {/* Tag GitHub */}
      <Link 
        href="https://github.com/HenriqueBuen" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-black/20 text-white/70 border border-white/20 rounded-md text-sm font-medium hover:scale-105 hover:border-cyan-300 transition-transform cursor-pointer flex items-center justify-center"
      >
        <Image src={iconGithub} alt="GitHub" width={24} height={24} className="w-6 h-6" />
      </Link>

    </div>
  )
}