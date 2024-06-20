import React from 'react'

interface SectionProps {
    title: string;
    description?: string;
}

const SectionTitle = ({title, description} : SectionProps) => {
  return (
    <div className='xl:px-4 pl-10 md:pl-0 space-y-3 flex-col items-center justify-center pt-14'>
        <h2 className='md:text-center text-start text-2xl font-bold text-black'>{title}</h2>
        <p className='md:flex md:text-center text-start text-sm md:text-base text-gray-500 xl:px-52 md:44 font-normal'>{description}</p>
    </div>
  )
}

export default SectionTitle