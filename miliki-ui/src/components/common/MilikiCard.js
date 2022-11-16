import React from 'react'
import MilikiButton from './MilikiButton'

const MilikiCard = ({imgSrc, alt }) => {
  return (
    <div>
      <div className='max-w-[950px] px-1 py-2 mt-3 rounded-md ring-1 ring-miliki-sky-blue'>
        <img className="w-full object-cover h-[256px] px-2 rounded-[9px]" src={imgSrc} alt={alt}/>
        <p className="px-2 py-4 text-justify">is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
        </p>
        <div className='flex items-start px-2 py-2 ml-4'>
        <ul className='list-disc'>
            <li className='text-start'>JavaScript</li>
            <li className='text-start'>React Js</li>
            <li className='text-start'>Tailwindcss</li>
        </ul>
        </div>
        <div className='flex flex-row gap-2 px-1'>
            <MilikiButton isButtonForm={false} buttonStyle="rounded full text-miliki-black" buttonText="Amount"/>
            <MilikiButton isButtonForm={false} buttonStyle="rounded full text-miliki-black" buttonText="Duration"/>
            <MilikiButton isButtonForm={false} buttonStyle="rounded full text-miliki-black" buttonText="Status"/>
        </div>
      </div>
    </div>
  )
}

export default MilikiCard
