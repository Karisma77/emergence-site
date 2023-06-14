import React from 'react'
import Heading from '../components/Heading'
import image1 from '../assets/admissions.jpg'
import image2 from '../assets/top-image.jpg'
import CallToAction from '../components/CallToAction'

function Admission() {

  const pageTItle = "admission"

  return (
    <div>
      <Heading img={image1} title={pageTItle} />
      {/**Content */}
      <div className='mx-auto max-w-7xl flex flex-col lg:flex-row px-2 xl:px-[60px] justify-between'>
        <div className='py-[90px] max-w-[575px]'>
          <h6 className='font-semibold text-xl mb-5'>Condition d'admission</h6>
          <ul className='list-classic'>
            <li>Par voie de concours </li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto delectus, ad dolorem ratione debitis blanditiis voluptas expedita ducimus saepe obcaecati tenetur dolor maxime nostrum cum repellendus? Voluptatibus, explicabo nobis?</p>
            <li>Sur étude de dossier </li>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis optio quaerat modi deserunt saepe odit numquam mollitia eveniet nobis? Minus eos id quis eaque, ipsum officiis molestias ipsa quod.</p>
          </ul>
          <h6 className='font-semibold text-xl mb-5'>Pièce à fournir</h6>
          <ul className='font-light'>
            <li>01 Fiche d'inscription à remplir sur place</li>
            <li>02 photos couleur 4x4</li>
            <li>01 photocopie lisible de l'acte de naissance</li>
            <li>01 photocopie du BAC, GCE A level. ou tout autre diplôme équivalent</li>
            <li>01 fiche d'engagement disciplinaire à signer sur place</li>
            <li>01 photocopie du relevé de note de 1ere année pour toute admission en 2eme année</li>
          </ul>
        </div>
        <img src={image2} alt="top-image" className='h-full'/>
      </div>
      <CallToAction />
    </div>
  )
}

export default Admission