import React from 'react'
import img from '../assets/admissions.jpg'

function Heading(props) {
  return (
    <div className='w-full h-[300px] md:h-[500px] bg-center bg-cover flex items-end' style={{backgroundImage: `url(${props.img || img})`}}>
      <div className='mx-auto max-w-[1160px] relative w-full'>
        <p className='p-7 bg-primary text-white font-bold text-4xl md:text-[64px] w-fit capitalize absolute bottom-0 translate-y-[50%] left-0'>{props.title}</p>
      </div>
    </div>
  )
}

export default Heading