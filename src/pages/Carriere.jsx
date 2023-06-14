import React from 'react'
import Heading from '../components/Heading'
import noPost from '../assets/sitting-4.svg'

function Carriere() {

  const pageTitle = "carrière";

  return (
    <div>
      {/* <Heading title={pageTitle} /> */}
      <div className='py-[20vh] mx-auto flex flex-col justify-center gap-[95px]'>
        <img src={noPost} alt="" className='w-[150px] md:w-[270px] mx-auto'/>
        <p className='text-xl text-center'>Désolé aucun poste n’est disponible pour l’instant.</p>
      </div>
    </div>
  )
}

export default Carriere