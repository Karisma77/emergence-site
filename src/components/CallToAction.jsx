import React from 'react'
import { Link } from 'react-router-dom'
import imageCTA from '../assets/cta-image.jpg'

function CallToAction() {
  return (
    <section className='mx-auto bg-[#F4F4F4] w-full'>
    <div className='mx-auto flex flex-col py-12 px-2 max-w-7xl lg:flex-row lg:justify-center gap-[60px] xl:px-[50px]'>
        <div className='w-fit'>
        <img src={imageCTA} alt="image"/>
        </div>
        <div className='flex flex-col gap-5'>
            <h3>Espace futurs étudiants</h3>
            <p className='text-[16px] text-justify max-w-[356px]'>Pour plus d’informations, vous pouvez contacter un responsable ou consulter notre calendrier académique. </p>
            <div className='flex flex-col xl:flex-row'>
                <div className='flex flex-col gap-[16px] w-fit'>
                    <p className='font-bold text-[16px]'>Dr Herve NYASSA, PhD</p>
                    <p className='text-[16px]'>(+237) 6 99 56 03 97</p>
                    <p className='text-[16px]'>Odza borne 12, Entrée Sabel</p>
                </div>
                <div className='flex flex-col gap-5 py-4 xl:ml-[50px]'>
                    <Link to="#" className='btnCTA'>Consulter le calendrier académique</Link>
                    <Link to="#" className='btnCTA'>Contacter un responsable</Link>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CallToAction