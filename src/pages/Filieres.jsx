import React from 'react'
import Heading from '../components/Heading'
import filieres from '../assets/filieres.jpg'
import CallToAction from '../components/CallToAction'
import image1 from '../assets/cta-image.jpg'
import Accordeon from '../components/Accordeon'
import { management, medic, engineer } from '../data/academics.js'

function Filieres() {


  const pageTItle = "nos filières"
  return (
    <div>
      <Heading img={filieres} title={pageTItle} />
      <div className='mx-auto max-w-7xl flex flex-col lg:flex-row px-2 xl:px-[60px] relative'>
        <p className='py-[100px] max-w-[575px]'>
        Les actions de l’Institut Supérieur de l’Emergence sont portées vers la recherche de l’émergence des jeunes par la formation. C’est la formation qui précède l’emploi, c’est pour cela que l’institut offre un cursus de formation abouti.
        </p>
        <div className='hidden xl:flex absolute top-0 translate-y-[-50%] right-0 w-[450px] h-[495px] bg-cover bg-center lg:z-40' style={{backgroundImage: `url(${image1})`}}></div>
      </div>
      <div className='pt-10 pb-[120px] px-2 xl:px-[60px] mx-auto max-w-7xl flex flex-wrap gap-10'>
        <div className='flex flex-col max-w-sm w-fit gap-12'>
          <h6 className='bg-primary text-white font-semibold text-2xl p-1 w-fit capitalize'>Gestion</h6>
          { management.map((item, index)=>(
          <Accordeon key={index} title={item.title} content={item.content} />
        )) }
        </div>
        <div className='flex flex-col max-w-sm w-fit gap-12'>
          <h6 className='bg-primary text-white font-semibold text-2xl p-1 w-fit capitalize'>Ingénieurie</h6>
          { engineer.map((item, index)=>(
          <Accordeon key={index} title={item.title} content={item.content} />
        )) }
        </div>
        <div className='flex flex-col max-w-sm w-fit gap-12'>
          <h6 className='bg-primary text-white font-semibold text-2xl p-1 w-fit capitalize'>Sciences médicales</h6>
          { medic.map((item, index)=>(
          <Accordeon key={index} title={item.title} content={item.content} />
        )) }
        </div>
      </div>
      <CallToAction />
    </div>
  )
}

export default Filieres