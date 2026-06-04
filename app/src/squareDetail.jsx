import React from 'react'

export default function squareDetail() {
  return (
    <div className="flex flex-row items-center font-sans text-amber-50 gap-x-5 mt-5">
        {/* Square Detail Content 1 - certified detail */}
        <div className="w-80 p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <h1> square detail 1 </h1>
        </div>
        {/* Square Detail Content 2 - certified detail */}
        <div className="w-80 p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <h1> square detail 2 </h1>
        </div>
    </div>
  )
}
