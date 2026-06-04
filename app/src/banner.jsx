import React from 'react'
import Image from 'next/image' 
import PerfilImg from '../assets/perfil.png'
import Tags from './tags.jsx'

export default function Banner() {
    var name = "Henrique Bueno"
    var description = "Analista de Dados"

  return (
        <div className="flex flex-col justify-center items-center w-96 h-[39vh] p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 shadow-xl text-white">
            {/* CORRIGIDO: Agora passando perfilImg direto, sem o .src */}
            <Image 
              src={PerfilImg}
              alt="Profile Picture" 
              width={128} 
              height={128} 
              className="rounded-full w-32 h-32 object-cover border-4 border-white/20 my-2" 
            />
            <h1 className="text-md font-bold text-amber-50 my-2">{name}</h1>
            <p className="">{description}</p>
            <Tags />
        </div>
  )
}