import React from 'react'
import Image from 'next/image'

function MediumCard({ img, title }) {
  return (
    <div>
      <div
        className="relative h-80 w-80 transform cursor-pointer transition duration-300
      ease-out hover:scale-105"
      >
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <div>
        <h3 className="mt-3 text-2xl">{title}</h3>
      </div>
    </div>
  )
}

export default MediumCard
